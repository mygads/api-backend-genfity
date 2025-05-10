export interface Feature {
  id: string;
  name: string;
  included: boolean;
  packageId: string;
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  // packages?: Package[]; 
}

export interface Addon {
  id: string;
  name: string;
  description?: string | null;
  price: number; // Keep as number for data consistency
  image?: string | null;
  categoryId: string;
  // category?: Category; 
}

export interface Package {
  id: string;
  name: string;
  description?: string | null;
  price: number; // Keep as number
  image?: string | null;
  popular?: boolean | null;
  bgColor?: string | null;
  categoryId: string;
  subcategoryId: string;
  features: Feature[];
  addons?: Addon[]; // Optional field for associated addons
  // category?: Category; 
  // subcategory?: Subcategory; 
}

export interface Category {
  id: string;
  name: string;
  icon?: string | null;
  subcategories: Subcategory[]; // Assuming API returns this or it's managed client-side
  addons: Addon[]; // Assuming API returns this or it's managed client-side
  packages: Package[]; // Assuming API returns this or it's managed client-side
}

// --- Form Data Interfaces ---

export interface CategoryFormData {
  name: string;
  icon?: string;
}

export interface SubcategoryFormData {
  name: string;
  categoryId: string;
}

export interface AddonFormData {
  name: string;
  description?: string;
  price: string; // Input as string, convert to number on save
  categoryId: string;
  image?: string; // For existing image URL or new path after upload
}

export interface PackageFeatureFormData {
  id?: string; // For existing features during edit, or temp client-side ID
  name: string;
  included: boolean;
}

export interface PackageFormData {
  name: string;
  description?: string;
  price: string; // Input as string, convert to number on save
  categoryId: string;
  subcategoryId: string;
  image?: string; // Existing image URL or new path
  popular: boolean;
  bgColor?: string;
  features: PackageFeatureFormData[];
  addonIds: string[]; // Added for managing selected addons in the form
}

export type ProductEntityType = 'categories' | 'subcategories' | 'addons' | 'packages';
