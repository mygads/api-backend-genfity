# Customer-Facing API Documentation

This document describes the customer-facing APIs for the Genfity platform. All APIs use CORS headers and require proper authentication where specified.

## Base URL
```
https://your-domain.com/api
```

## Authentication

The Genfity platform supports two authentication methods for customer APIs:

### 1. NextAuth Session (Cookie-based)
For web applications using NextAuth, authentication is handled via session cookies automatically.

### 2. JWT Token (Header-based)
For mobile apps and API clients, use JWT tokens in the Authorization header.

**How to use JWT tokens:**
1. Sign in using `/auth/signin` to get a JWT token
2. Include the token in the `Authorization` header for subsequent requests:
   ```
   Authorization: Bearer your-jwt-token-here
   ```

**Example Request with JWT Token:**
```bash
curl -X GET \
  'https://your-domain.com/api/customer/transactions' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' \
  -H 'Content-Type: application/json'
```

**Note:** All authentication APIs (signup, signin, OTP verification, etc.) are publicly accessible and do not require API keys or authentication headers.

## API Endpoints

### Authentication APIs

All authentication APIs are publicly accessible (no API key required) and support CORS for browser applications.

#### POST /auth/signup
Register a new customer account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",    // Optional
  "phone": "+628123456789",       // Optional
  "password": "password123"       // Optional for phone-only signup
}
```

**Supported Registration Types:**
- Email + Phone + Password: Full registration with OTP verification
- Email + Password: Email verification required
- Phone only: Auto-generates password, sends via WhatsApp

**Response:**
```json
{
  "message": "Pengguna berhasil dibuat. Silakan cek WhatsApp Anda untuk kode OTP.",
  "userId": "user-id",
  "nextStep": "VERIFY_OTP"
}
```

#### POST /auth/signin
Sign in with email/phone and password.

**Request Body:**
```json
{
  "identifier": "john@example.com",  // Email or phone number
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login berhasil",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  },
  "token": "jwt-token"
}
```

#### POST /auth/verify-otp
Verify OTP code for phone verification.

**Request Body:**
```json
{
  "identifier": "+628123456789",
  "otp": "1234"
}
```

**Response:**
```json
{
  "message": "Verifikasi OTP berhasil",
  "user": {
    "id": "user-id",
    "name": "John Doe"
  },
  "randomPassword": "auto-generated-password"  // Only for phone-only signups
}
```

#### POST /auth/resend-otp
Resend OTP code to phone number.

**Request Body:**
```json
{
  "identifier": "+628123456789"
}
```

**Rate Limiting:** Once per 60 seconds

#### POST /auth/send-otp
Send password reset OTP via email or WhatsApp.

**Request Body:**
```json
{
  "identifier": "john@example.com",  // Email or phone
  "method": "email"                   // "email" or "whatsapp"
}
```

#### POST /auth/reset-password
Reset password using OTP.

**Request Body:**
```json
{
  "identifier": "john@example.com",
  "otp": "1234",
  "newPassword": "newpassword123"
}
```

#### GET /auth/session
Get current session information.

**Response:**
```json
{
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

### Customer Product Catalog APIs

### 1. Product Catalog APIs

#### GET /catalog/packages
Get all packages with optional filtering.

**Query Parameters:**
- `categoryId` (optional): Filter by category ID
- `subcategoryId` (optional): Filter by subcategory ID  
- `popular` (optional): Filter popular packages (true/false)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "package-id",
      "name_en": "Package Name",
      "name_id": "Nama Paket",
      "description_en": "Description",
      "description_id": "Deskripsi",
      "price_idr": 100000,
      "price_usd": 10,
      "image": "image-url",
      "popular": true,
      "bgColor": "#color",
      "category": {
        "id": "category-id",
        "name_en": "Category",
        "name_id": "Kategori",
        "icon": "icon-url"
      },
      "subcategory": {
        "id": "subcategory-id", 
        "name_en": "Subcategory",
        "name_id": "Subkategori"
      },
      "features": [
        {
          "id": "feature-id",
          "name_en": "Feature Name",
          "name_id": "Nama Fitur",
          "included": true
        }
      ]
    }
  ],
  "total": 10
}
```

#### GET /catalog/addons
Get all addons with optional filtering.

**Query Parameters:**
- `categoryId` (optional): Filter by category ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "addon-id",
      "name_en": "Addon Name",
      "name_id": "Nama Addon", 
      "description_en": "Description",
      "description_id": "Deskripsi",
      "price_idr": 50000,
      "price_usd": 5,
      "image": "image-url",
      "category": {
        "id": "category-id",
        "name_en": "Category",
        "name_id": "Kategori",
        "icon": "icon-url"
      }
    }
  ],
  "total": 5
}
```

#### GET /catalog/categories
Get all categories with subcategories and counts.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "category-id",
      "name_en": "Category Name",
      "name_id": "Nama Kategori",
      "icon": "icon-url",
      "subcategories": [
        {
          "id": "subcategory-id",
          "name_en": "Subcategory",
          "name_id": "Subkategori"
        }
      ],
      "_count": {
        "packages": 10,
        "addons": 5
      }
    }
  ],
  "total": 3
}
```

#### GET /catalog/details
Get detailed information for a specific package or addon.

**Query Parameters:**
- `packageId` (optional): Package ID to fetch
- `addonId` (optional): Addon ID to fetch

**Response:**
```json
{
  "success": true,
  "data": {
    // Full package or addon object with relations
  }
}
```

### 2. Transaction APIs

#### GET /transactions
Get user's transactions with pagination.

**Authentication:** Required

**Query Parameters:**
- `status` (optional): Filter by status (pending, paid, expired, cancelled)
- `limit` (optional): Number of items per page (default: 10)
- `offset` (optional): Number of items to skip (default: 0)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "transaction-id",
      "transactionDate": "2025-05-25T00:00:00Z",
      "startDate": "2025-05-25T00:00:00Z", 
      "endDate": "2025-06-25T00:00:00Z",
      "status": "pending",
      "referenceLink": "optional-reference-url",
      "package": {
        "id": "package-id",
        "name_en": "Package Name",
        "price_idr": 100000
      },
      "addon": null,
      "payment": {
        "id": "payment-id",
        "amount": 100000,
        "method": "midtrans",
        "status": "pending",
        "paymentDate": null
      }
    }
  ],
  "pagination": {
    "total": 25,
    "limit": 10,
    "offset": 0,
    "hasMore": true
  }
}
```

#### POST /transactions
Create a new transaction.

**Authentication:** Required

**Request Body:**
```json
{
  "packageId": "package-id", // Either packageId or addonId required
  "addonId": "addon-id",     // Either packageId or addonId required
  "startDate": "2025-05-25T00:00:00Z",
  "endDate": "2025-06-25T00:00:00Z",
  "referenceLink": "optional-reference-url"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    // Created transaction object
  },
  "message": "Transaction created successfully"
}
```

#### GET /transactions/[transactionId]
Get specific transaction details.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "data": {
    // Full transaction object with package/addon details
  }
}
```

### 3. Payment APIs

#### POST /payments/process
Process payment for a transaction.

**Authentication:** Required

**Request Body:**
```json
{
  "transactionId": "transaction-id",
  "method": "midtrans", // midtrans, xendit, manual
  "amount": 100000
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "transaction_id": "transaction-id",
    "payment_id": "payment-id",
    "method": "midtrans",
    "amount": 100000,
    "status": "pending",
    "payment_url": "https://payment-gateway-url",
    "token": "payment-token"
  },
  "message": "Payment processing initiated"
}
```

#### GET /payments/status/[paymentId]
Check payment status.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "payment-id",
    "amount": 100000,
    "method": "midtrans",
    "status": "pending",
    "paymentDate": null,
    "transaction": {
      // Transaction details
    },
    "gateway_info": {
      "gateway_status": "pending",
      "fraud_status": "accept"
    }
  }
}
```

### 4. WhatsApp Service APIs

#### GET /whatsapp/packages
Get available WhatsApp API packages.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "package-id",
      "name": "Basic Package",
      "description": "Description",
      "priceMonth": 100000,
      "priceYear": 1000000,
      "maxSession": 5,
      "yearlyDiscount": 17,
      "recommended": true,
      "features": [
        "Up to 5 WhatsApp sessions",
        "API webhook support",
        "Message automation"
      ]
    }
  ],
  "total": 3
}
```

#### GET /whatsapp/services
Get user's WhatsApp services.

**Authentication:** Required

**Query Parameters:**
- `status` (optional): active, expired, all

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "service-id",
      "expiredAt": "2025-12-25T00:00:00Z",
      "createdAt": "2025-05-25T00:00:00Z",
      "package": {
        "id": "package-id",
        "name": "Basic Package",
        "maxSession": 5
      },
      "status": "active",
      "daysRemaining": 214,
      "isExpiringSoon": false
    }
  ],
  "total": 2
}
```

#### POST /whatsapp/services
Subscribe to WhatsApp service.

**Authentication:** Required

**Request Body:**
```json
{
  "packageId": "package-id",
  "duration": "month" // month or year
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    // Created transaction object
  },
  "message": "Subscription request created. Complete payment to activate service."
}
```

#### GET /whatsapp/transactions
Get user's WhatsApp transactions.

**Authentication:** Required

**Query Parameters:**
- `status` (optional): Filter by status
- `limit` (optional): Items per page
- `offset` (optional): Items to skip

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "transaction-id",
      "duration": "month",
      "price": 100000,
      "status": "pending",
      "createdAt": "2025-05-25T00:00:00Z",
      "package": {
        "id": "package-id",
        "name": "Basic Package"
      },
      "durationText": "1 Month",
      "statusText": "Pending Payment",
      "canRetryPayment": true
    }
  ],
  "pagination": {
    "total": 5,
    "limit": 10,
    "offset": 0,
    "hasMore": false
  }
}
```

### 5. Profile APIs

#### GET /profile
Get user profile information.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user-id",
    "name": "User Name",
    "email": "user@example.com",
    "phone": "+1234567890",
    "image": "profile-image-url",
    "emailVerified": "2025-05-25T00:00:00Z",
    "phoneVerified": null,
    "role": "customer",
    "stats": {
      "totalTransactions": 10,
      "totalWhatsappTransactions": 5,
      "activeWhatsappServices": 2,
      "totalWhatsappServices": 3
    }
  }
}
```

#### PUT /profile
Update user profile.

**Authentication:** Required

**Request Body:**
```json
{
  "name": "Updated Name",
  "phone": "+0987654321"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    // Updated user profile
  },
  "message": "Profile updated successfully"
}
```

## Error Responses

All APIs return consistent error responses:

```json
{
  "success": false,
  "error": "Error message description"
}
```

Common HTTP status codes:
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (authentication required)
- `403`: Forbidden (insufficient permissions)
- `404`: Not Found
- `500`: Internal Server Error

## CORS Support

All customer APIs include CORS headers to support cross-origin requests from web applications.
