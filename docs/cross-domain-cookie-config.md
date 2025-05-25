# Cross-Domain NextAuth Cookie Configuration

## 🌐 **Cross-Domain Cookie Authentication**

### **Problem Statement**
- Frontend: `https://yourdomain.com` (or localhost:3000)
- Backend: `https://api.yourdomain.com` (or localhost:3001)
- Need: Automatic cookie sharing between domains

### **Solution: Configure Cross-Domain Cookies**

#### **1. Backend Configuration (Already Done!)**

Your backend already has CORS properly configured:

```javascript
// src/lib/cors.ts - Already implemented
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'https://yourdomain.com',
    // Add your frontend domains here
  ],
  credentials: true, // ✅ CRITICAL: Allows cookies
  optionsSuccessStatus: 200,
}
```

#### **2. Frontend Configuration**

```javascript
// next.config.js (if using Next.js frontend)
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:3001/api/auth/:path*', // Backend URL
      },
      {
        source: '/api/:path*', 
        destination: 'http://localhost:3001/api/:path*', // Backend URL
      }
    ]
  }
}

// Or configure NextAuth to use custom backend
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        // Forward to your backend
        const response = await fetch('http://localhost:3001/api/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })
        
        if (response.ok) {
          const user = await response.json()
          return user
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.role = token.role
      return session
    }
  }
})
```

#### **3. Frontend API Calls**

```javascript
// Always include credentials for cross-domain requests
const response = await fetch('http://localhost:3001/api/customer/profile', {
  credentials: 'include', // ✅ CRITICAL: Include cookies
  headers: {
    'Content-Type': 'application/json'
  }
})

// Or use Axios with default config
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true // ✅ CRITICAL: Include cookies
})

// Usage
const profile = await api.get('/api/customer/profile')
```

#### **4. Production Configuration**

For production with different domains:

```javascript
// Backend CORS (already configured)
const corsOptions = {
  origin: [
    'https://yourdomain.com',
    'https://app.yourdomain.com', 
    'https://admin.yourdomain.com'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
}

// Frontend (ensure HTTPS and proper domain setup)
const api = axios.create({
  baseURL: 'https://api.yourdomain.com',
  withCredentials: true // Cookies will be shared
})
```

## ✅ **Automatic Cookie Benefits**

1. **Zero Token Management**: No manual token storage/retrieval
2. **Automatic Expiry**: Browser handles cookie expiration
3. **Secure by Default**: HttpOnly cookies prevent XSS
4. **Works Everywhere**: Compatible with all modern browsers
5. **Your Backend Ready**: Already fully implemented!

## 🧪 **Testing Cross-Domain Cookies**

```bash
# Test with curl (simulate browser)
curl -c cookies.txt -X POST http://localhost:3001/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"identifier": "user@example.com", "password": "password123"}'

# Use cookies in subsequent requests
curl -b cookies.txt http://localhost:3001/api/customer/profile

# Check if cookies are properly set
cat cookies.txt
```

## 🎯 **Recommendation for Your Use Case**

Since you mentioned "separated frontend/backend", here's the best approach:

### **Option A: NextAuth Cookies + CORS (Simpler)**
- Configure CORS properly (already done!)
- Use `credentials: 'include'` in frontend
- Automatic cookie handling
- No token management needed

### **Option B: JWT Tokens (More Control)**  
- Manual token management
- Works without CORS complexity
- Better for multiple client types
- Already 100% working in your system

**My recommendation: Start with JWT tokens** because:
1. ✅ Already fully tested and working
2. ✅ No CORS cookie complications  
3. ✅ Works with any frontend framework
4. ✅ Future-proof for mobile apps
5. ✅ Industry standard for API authentication

You can always add NextAuth cookie support later if needed!
