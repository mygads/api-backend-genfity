// Customer API Response Types

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string | any[];
  message?: string;
}

export interface PaginationInfo {
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T> {
  pagination: PaginationInfo;
}

// Product Catalog Types
export interface CustomerPackage {
  id: string;
  name_en: string;
  name_id: string;
  description_en: string;
  description_id: string;
  price_idr: number;
  price_usd: number;
  image: string;
  popular?: boolean;
  bgColor?: string;
  category: {
    id: string;
    name_en: string;
    name_id: string;
    icon: string;
  };
  subcategory: {
    id: string;
    name_en: string;
    name_id: string;
  };
  features: CustomerFeature[];
}

export interface CustomerAddon {
  id: string;
  name_en: string;
  name_id: string;
  description_en?: string;
  description_id?: string;
  price_idr: number;
  price_usd: number;
  image?: string;
  category: {
    id: string;
    name_en: string;
    name_id: string;
    icon: string;
  };
}

export interface CustomerCategory {
  id: string;
  name_en: string;
  name_id: string;
  icon: string;
  subcategories: {
    id: string;
    name_en: string;
    name_id: string;
  }[];
  _count: {
    packages: number;
    addons: number;
  };
}

export interface CustomerFeature {
  id: string;
  name_en: string;
  name_id: string;
  included: boolean;
}

// Transaction Types
export interface CustomerTransaction {
  id: string;
  transactionDate: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'paid' | 'expired' | 'cancelled';
  referenceLink?: string;
  package?: {
    id: string;
    name_en: string;
    name_id: string;
    price_idr: number;
    price_usd: number;
    image: string;
  };
  addon?: {
    id: string;
    name_en: string;
    name_id: string;
    price_idr: number;
    price_usd: number;
    image?: string;
  };
  payment?: CustomerPayment;
}

export interface CustomerPayment {
  id: string;
  amount: number;
  method: string;
  status: 'pending' | 'paid' | 'failed';
  paymentDate?: string;
}

export interface CreateTransactionRequest {
  packageId?: string;
  addonId?: string;
  startDate: string;
  endDate: string;
  referenceLink?: string;
}

// Payment Types
export interface ProcessPaymentRequest {
  transactionId: string;
  method: 'midtrans' | 'xendit' | 'manual';
  amount: number;
}

export interface PaymentResponse {
  transaction_id: string;
  payment_id: string;
  method: string;
  amount: number;
  status: string;
  payment_url?: string;
  token?: string;
  redirect_url?: string;
  external_id?: string;
  invoice_id?: string;
  bank_account?: {
    bank_name: string;
    account_number: string;
    account_name: string;
  };
  payment_code?: string;
  instructions?: string;
}

export interface PaymentStatusResponse extends CustomerPayment {
  transaction: {
    id: string;
    status: string;
    transactionDate: string;
    startDate: string;
    endDate: string;
    package?: {
      id: string;
      name_en: string;
      name_id: string;
    };
    addon?: {
      id: string;
      name_en: string;
      name_id: string;
    };
  };
  gateway_info: {
    gateway_status?: string;
    fraud_status?: string;
    transaction_time?: string;
    external_id?: string;
    updated?: string;
    verification_status?: string;
    last_checked?: string;
  };
}

// WhatsApp Service Types
export interface CustomerWhatsAppPackage {
  id: string;
  name: string;
  description?: string;
  priceMonth: number;
  priceYear: number;
  maxSession: number;
  createdAt: string;
  yearlyDiscount: number;
  recommended: boolean;
  features: string[];
}

export interface CustomerWhatsAppService {
  id: string;
  expiredAt: string;
  createdAt: string;
  package: {
    id: string;
    name: string;
    description?: string;
    maxSession: number;
  };
  status: 'active' | 'expired';
  daysRemaining: number;
  isExpiringSoon: boolean;
}

export interface CustomerWhatsAppTransaction {
  id: string;
  duration: 'month' | 'year';
  price: number;
  status: 'pending' | 'paid' | 'failed';
  createdAt: string;
  package: {
    id: string;
    name: string;
    description?: string;
    maxSession: number;
  };
  durationText: string;
  statusText: string;
  canRetryPayment: boolean;
}

export interface CreateWhatsAppSubscriptionRequest {
  packageId: string;
  duration: 'month' | 'year';
}

// Profile Types
export interface CustomerProfile {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
  emailVerified?: string;
  phoneVerified?: string;
  role: string;
  stats: {
    totalTransactions: number;
    totalWhatsappTransactions: number;
    activeWhatsappServices: number;
    totalWhatsappServices: number;
  };
}

export interface UpdateProfileRequest {
  name?: string;
  phone?: string;
}

// API Query Parameters
export interface PackageQueryParams {
  categoryId?: string;
  subcategoryId?: string;
  popular?: string;
}

export interface AddonQueryParams {
  categoryId?: string;
}

export interface TransactionQueryParams {
  status?: string;
  limit?: string;
  offset?: string;
}

export interface WhatsAppServiceQueryParams {
  status?: 'active' | 'expired' | 'all';
}

export interface WhatsAppTransactionQueryParams {
  status?: string;
  limit?: string;
  offset?: string;
}

export interface ItemDetailsQueryParams {
  packageId?: string;
  addonId?: string;
}
