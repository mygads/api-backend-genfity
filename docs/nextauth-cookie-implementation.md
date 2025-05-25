# NextAuth Cookie Authentication Implementation

## 🍪 **Cookie-based Authentication Setup**

### Frontend Setup (React/Next.js Client)

```javascript
// 1. Install NextAuth client (if separate frontend)
npm install next-auth

// 2. Setup NextAuth provider
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider 
      session={session}
      baseUrl="http://localhost:3001" // Your backend URL
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

// 3. Configure next-auth client to point to your backend
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"

export default NextAuth({
  providers: [], // Empty - backend handles this
  callbacks: {
    async signIn() { return true },
    async session({ session, token }) {
      return session
    },
  }
})
```

### Backend Configuration (Already Done!)

Your backend already supports NextAuth sessions:
- `/api/auth/[...nextauth]` - NextAuth handler
- `/api/auth/signin` page working
- Cookies automatically set and read

### Client Usage Examples

```javascript
// Login using NextAuth signIn
import { signIn, signOut, useSession } from "next-auth/react"

// 1. Login
const handleLogin = async () => {
  const result = await signIn('credentials', {
    redirect: false,
    identifier: 'user@example.com',
    password: 'password123'
  })
  
  if (result?.ok) {
    console.log('Logged in successfully!')
  }
}

// 2. Get current session
const { data: session, status } = useSession()

// 3. Make API calls (cookies sent automatically)
const fetchUserData = async () => {
  const response = await fetch('http://localhost:3001/api/customer/profile', {
    credentials: 'include' // Important: Include cookies
  })
  const data = await response.json()
  return data
}

// 4. Logout
const handleLogout = () => {
  signOut({ callbackUrl: '/auth/signin' })
}
```

## 🔧 **Cross-Domain Cookie Setup**

If frontend and backend are on different domains, configure:

### Backend (Already configured in your CORS):
```javascript
// In your CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'https://yourdomain.com'], 
  credentials: true, // Allow cookies
  optionsSuccessStatus: 200,
}
```

### Frontend:
```javascript
// Always include credentials in fetch requests
fetch('http://backend.domain.com/api/customer/profile', {
  credentials: 'include', // Send cookies cross-domain
  headers: {
    'Content-Type': 'application/json'
  }
})
```

## ✅ **Advantages of Cookie Approach**

1. **Automatic**: No need to manually handle tokens
2. **Secure**: HttpOnly cookies prevent XSS attacks  
3. **Simple**: No token refresh logic needed
4. **Browser Native**: Leverage browser's cookie handling
5. **Already Implemented**: Your backend fully supports this

## ⚠️ **Limitations**

1. **Cross-domain complexity**: Requires proper CORS setup
2. **Mobile apps**: Harder to implement than JWT tokens
3. **Third-party integrations**: Some services prefer Bearer tokens
4. **Cookie limitations**: Size limits and browser policies

## 🧪 **Testing Cookie Authentication**

```bash
# 1. Login via browser or curl to get session cookie
curl -c cookies.txt -X POST http://localhost:3001/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"identifier": "user@example.com", "password": "password123"}'

# 2. Use cookie in subsequent requests  
curl -b cookies.txt http://localhost:3001/api/customer/profile
```
