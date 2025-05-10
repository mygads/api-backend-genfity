export interface Feature {
  name: string;
  included: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Icon name (e.g., "Monitor" for lucide-react)
  subcategories: Subcategory[];
}

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // Category ID
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // Category ID
  subcategory: string; // Subcategory ID
  popular?: boolean;
  bgColor?: string; // Tailwind CSS class for background gradient
  features: Feature[];
}

export interface ProductData {
  categories: Category[];
  addons: Addon[];
  packages: Package[];
}
