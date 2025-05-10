'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'; // Assuming you have Dialog components
import { Label } from '@/components/ui/label'; // Assuming you have a Label component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // For category selection
import Image from 'next/image'; // Import Next Image
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

// --- Interface Definitions ---
interface Feature {
  id: string;
  name: string;
  included: boolean;
  packageId: string;
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  // packages?: Package[]; // Optional: if you need to show packages under a subcategory directly
}

interface Addon {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  image?: string | null;
  categoryId: string;
  // category?: Category; // Optional: if you need to show parent category details
}

interface Package {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  image?: string | null;
  popular?: boolean | null;
  bgColor?: string | null;
  categoryId: string;
  subcategoryId: string;
  features: Feature[];
  // category?: Category; // Optional
  // subcategory?: Subcategory; // Optional
}

interface Category {
  id: string;
  name: string;
  icon?: string | null;
  subcategories: Subcategory[];
  addons: Addon[];
  packages: Package[];
}

// For form data
interface CategoryFormData {
  name: string;
  icon?: string;
}

// --- Subcategory Interface and Form Data ---
interface SubcategoryFormData {
  name: string;
  categoryId: string;
}

// --- Addon Interface and Form Data ---
interface AddonFormData {
  name: string;
  description?: string;
  price: string; // Store as string for input, convert to number before sending
  categoryId: string;
  image?: string; // To store existing image URL or new image path after upload
}

// --- Package Interface and Form Data ---
interface PackageFeatureFormData {
  id?: string; // For existing features during edit, or temp client-side ID
  name: string;
  included: boolean;
}

interface PackageFormData {
  name: string;
  description?: string;
  price: string; // Store as string for input
  categoryId: string;
  subcategoryId: string;
  image?: string; // Existing image URL or new path
  popular: boolean;
  bgColor?: string;
  features: PackageFeatureFormData[];
}

type ProductEntityType = 'categories' | 'subcategories' | 'addons' | 'packages';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<ProductEntityType>('categories');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [addons, setAddons] = useState<Addon[]>([]);
  const [packages, setPackages] = useState<Package[]>([]); // State for packages

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState<CategoryFormData>({ name: '', icon: '' });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [isSubcategoryModalOpen, setIsSubcategoryModalOpen] = useState(false);
  const [subcategoryFormData, setSubcategoryFormData] = useState<SubcategoryFormData>({ name: '', categoryId: '' });
  const [editingSubcategory, setEditingSubcategory] = useState<Subcategory | null>(null);

  const [isAddonModalOpen, setIsAddonModalOpen] = useState(false);
  const [addonFormData, setAddonFormData] = useState<AddonFormData>({ name: '', description: '', price: '0', categoryId: '' });
  const [editingAddon, setEditingAddon] = useState<Addon | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Package States
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [packageFormData, setPackageFormData] = useState<PackageFormData>({
    name: '',
    description: '',
    price: '0',
    categoryId: '',
    subcategoryId: '',
    popular: false,
    bgColor: '#FFFFFF', // Default color
    features: [],
    image: undefined,
  });
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  // State to hold subcategories filtered by the selected category in the package form
  const [filteredSubcategoriesForPackageForm, setFilteredSubcategoriesForPackageForm] = useState<Subcategory[]>([]);


  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/product/categories');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch categories');
      }
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchSubcategories = useCallback(async (categoryId?: string) => {
    setIsLoading(true);
    setError(null);
    let url = '/api/product/subcategories';
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch subcategories');
      }
      const data: Subcategory[] = await response.json();
      setSubcategories(data);
    } catch (err: any) {
      setError(err.message);
      setSubcategories([]); // Clear subcategories on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchAddons = useCallback(async (categoryId?: string) => {
    setIsLoading(true);
    setError(null);
    let url = '/api/product/addons';
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch addons');
      }
      const data: Addon[] = await response.json();
      setAddons(data);
    } catch (err: any) {
      setError(err.message);
      setAddons([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchPackages = useCallback(async (categoryId?: string, subcategoryId?: string) => {
    setIsLoading(true);
    setError(null);
    let url = '/api/product/packages';
    const params = new URLSearchParams();
    if (categoryId) params.append('categoryId', categoryId);
    if (subcategoryId) params.append('subcategoryId', subcategoryId);
    if (params.toString()) url += `?${params.toString()}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch packages');
      }
      const data: Package[] = await response.json();
      setPackages(data);
    } catch (err: any) {
      setError(err.message);
      setPackages([]);
    } finally {
      setIsLoading(false);
    }
  }, []);


  useEffect(() => {
    if (activeTab === 'categories') {
      fetchCategories();
    } else if (activeTab === 'subcategories') {
      fetchSubcategories(); 
      if (categories.length === 0) fetchCategories(); 
    } else if (activeTab === 'addons') {
      fetchAddons();
      if (categories.length === 0) fetchCategories(); 
    } else if (activeTab === 'packages') {
      fetchPackages();
      if (categories.length === 0) fetchCategories();
      // Subcategories will be fetched/filtered when a category is selected in the form,
      // or we can fetch all initially if preferred. For now, let's fetch all.
      if (subcategories.length === 0) fetchSubcategories();
    }
  }, [activeTab, fetchCategories, fetchSubcategories, fetchAddons, fetchPackages, categories.length, subcategories.length]);

  const handleCategoryFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubcategoryFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubcategoryFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubcategoryCategoryChange = (categoryId: string) => {
    setSubcategoryFormData(prev => ({ ...prev, categoryId }));
  };

  const handleAddonFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddonFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddonCategoryChange = (categoryId: string) => {
    setAddonFormData(prev => ({ ...prev, categoryId }));
  };

  // --- Package Form Handlers ---
  const handlePackageFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked; // For checkboxes

    setPackageFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePackageCategoryChange = async (categoryId: string) => {
    setPackageFormData(prev => ({ ...prev, categoryId, subcategoryId: '' })); // Reset subcategory on category change
    // Filter subcategories for the selected category
    if (categoryId) {
      setIsLoading(true); // Potentially show a loading indicator for subcategories
      try {
        const response = await fetch(`/api/product/subcategories?categoryId=${categoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch subcategories for the selected category');
        }
        const data: Subcategory[] = await response.json();
        setFilteredSubcategoriesForPackageForm(data);
      } catch (err: any) {
        setError(err.message);
        setFilteredSubcategoriesForPackageForm([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setFilteredSubcategoriesForPackageForm([]); // Clear if no category is selected
    }
  };
  
  const handlePackageSubcategoryChange = (subcategoryId: string) => {
    setPackageFormData(prev => ({ ...prev, subcategoryId }));
  };

  const handleAddPackageFeature = () => {
    setPackageFormData(prev => ({
      ...prev,
      features: [...prev.features, { name: '', included: true, id: `temp-${Date.now()}`  }], // Add a temporary unique ID for key prop
    }));
  };

  const handlePackageFeatureChange = (index: number, field: keyof PackageFeatureFormData, value: string | boolean) => {
    setPackageFormData(prev => {
      const newFeatures = [...prev.features];
      // Ensure the feature at the index exists
      if (newFeatures[index]) {
        (newFeatures[index] as any)[field] = value;
      }
      return { ...prev, features: newFeatures };
    });
  };
  
  const handleRemovePackageFeature = (index: number) => {
    setPackageFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };
  // --- End Package Form Handlers ---


  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImageFile(null);
      setImagePreview(editingAddon?.image || null); // Revert to original if file is deselected
    }
  };

  const handleSaveCategory = async () => {
    setIsLoading(true);
    setError(null);
    const method = editingCategory ? 'PUT' : 'POST';
    const url = editingCategory ? `/api/product/categories/${editingCategory.id}` : '/api/product/categories';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoryFormData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || (editingCategory ? 'Failed to update category' : 'Failed to create category'));
      }
      await fetchCategories(); // Refresh list
      setIsCategoryModalOpen(false);
      setEditingCategory(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveSubcategory = async () => {
    setIsLoading(true);
    setError(null);
    if (!subcategoryFormData.categoryId) {
      setError('Category is required for a subcategory.');
      setIsLoading(false);
      return;
    }

    const method = editingSubcategory ? 'PUT' : 'POST';
    const url = editingSubcategory ? `/api/product/subcategories/${editingSubcategory.id}` : '/api/product/subcategories';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subcategoryFormData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || (editingSubcategory ? 'Failed to update subcategory' : 'Failed to create subcategory'));
      }
      await fetchSubcategories(); // Refresh list
      if (activeTab === 'categories') await fetchCategories(); // Refresh categories if subcategories were added/updated under them
      setIsSubcategoryModalOpen(false);
      setEditingSubcategory(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveAddon = async () => {
    // ... existing setup code ...
    // Ensure isLoading is set at the beginning
    setIsLoading(true);
    setError(null);

    let imageUrl = editingAddon?.image; 
    if (selectedImageFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedImageFile);
        const res = await fetch('/api/product/images/upload', { // Assuming this is your upload endpoint
          method: 'POST',
          body: formData,
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Image upload failed');
        }
        const imageData = await res.json();
        imageUrl = imageData.url; 
      } catch (uploadError: any) {
        setError(`Image upload failed: ${uploadError.message}`);
        setIsLoading(false);
        return;
      }
    }

    // Frontend validation for new addon image (if image is mandatory)
    // If your backend's addonSchema requires an image (i.e., not optional), 
    // you should ensure imageUrl is present before sending.
    // For now, assuming backend handles optionality or it's always provided if new.
    // if (!editingAddon && !imageUrl) {
    //   setError("An image is required to create a new addon.");
    //   setIsLoading(false);
    //   return;
    // }


    const dataToSave: {
      name: string;
      description: string;
      price: number;
      categoryId: string;
      image?: string; 
    } = {
      name: addonFormData.name,
      description: addonFormData.description || "", 
      price: parseFloat(addonFormData.price),
      categoryId: addonFormData.categoryId,
    };

    if (imageUrl) { // Only add image to payload if it exists or was uploaded
      dataToSave.image = imageUrl;
    } else if (editingAddon && editingAddon.image && !selectedImageFile) {
      // If editing, and had an image, and didn't select a new one, keep the old one.
      // This case is covered by imageUrl initialization: let imageUrl = editingAddon?.image;
      // If image was explicitly removed, imageUrl would be undefined/null here.
      // Depending on schema (if image is required), this might need to be handled.
    }


    const apiUrl = editingAddon ? `/api/product/addons/${editingAddon.id}` : '/api/product/addons';

    try {
      const response = await fetch(apiUrl, {
        method: editingAddon ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave),
      });

      if (!response.ok) {
        const errorData = await response.json();
        let errorMessage = `Failed to ${editingAddon ? 'update' : 'create'} addon. Status: ${response.status}`;
        
        // Check for Zod flattened errors
        if (errorData && errorData.errors && errorData.errors.fieldErrors) {
          errorMessage = Object.entries(errorData.errors.fieldErrors)
            .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
            .join('; ');
        } else if (errorData && Array.isArray(errorData)) { // Handle array of Zod issues (older format)
           errorMessage = errorData.map(err => `${err.path?.join('.') || 'Validation Error'}: ${err.message}`).join('; ');
        } else if (errorData && errorData.message) { // General message
          errorMessage = errorData.message;
        }
        setError(errorMessage);
        // No need to throw new Error here if setError is sufficient for user feedback
        return; // Stop execution if response is not ok
      }

      // Success
      fetchAddons(); // Refresh addon list
      setIsAddonModalOpen(false);
      setEditingAddon(null);
      setAddonFormData({ name: '', description: '', price: '0', categoryId: categories[0]?.id || '', image: undefined });
      setSelectedImageFile(null);
      setImagePreview(null);

    } catch (err: any) {
      console.error("Error saving addon:", err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  // --- Package CRUD Operations ---
  const handleSavePackage = async () => {
    setIsLoading(true);
    setError(null);

    if (!packageFormData.categoryId || !packageFormData.subcategoryId) {
      setError('Category and Subcategory are required for a package.');
      setIsLoading(false);
      return;
    }
    if (isNaN(parseFloat(packageFormData.price)) || parseFloat(packageFormData.price) < 0) {
        setError('Valid price is required for a package.');
        setIsLoading(false);
        return;
    }
    if (packageFormData.features.some(f => !f.name.trim())) {
        setError('All features must have a name.');
        setIsLoading(false);
        return;
    }


    let imageUrl = editingPackage?.image || undefined;

    if (selectedImageFile) {
      try {
        const imageFormData = new FormData();
        imageFormData.append('file', selectedImageFile);
        const uploadResponse = await fetch('/api/product/images/upload', {
          method: 'POST',
          body: imageFormData,
        });
        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.message || 'Failed to upload image');
        }
        const uploadResult = await uploadResponse.json();
        imageUrl = uploadResult.filePath;
      } catch (err: any) {
        setError(`Image upload failed: ${err.message}`);
        setIsLoading(false);
        return;
      }
    }

    const method = editingPackage ? 'PUT' : 'POST';
    const url = editingPackage ? `/api/product/packages/${editingPackage.id}` : '/api/product/packages';
    
    const payload = {
      ...packageFormData,
      price: parseFloat(packageFormData.price),
      image: imageUrl,
      // Ensure features sent to API don't have temporary client-side IDs if they are new
      // The backend should handle creation of new features or updates to existing ones based on presence of 'id'
      features: packageFormData.features.map(f => ({
        id: f.id?.startsWith('temp-') ? undefined : f.id, // Remove temp IDs
        name: f.name,
        included: f.included,
      })),
    };

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || (editingPackage ? 'Failed to update package' : 'Failed to create package'));
      }
      await fetchPackages(); // Refresh list
      setIsPackageModalOpen(false);
      setEditingPackage(null);
      setSelectedImageFile(null);
      setImagePreview(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const openCreatePackageModal = () => {
    setEditingPackage(null);
    setPackageFormData({
      name: '',
      description: '',
      price: '0',
      categoryId: categories[0]?.id || '',
      subcategoryId: '',
      popular: false,
      bgColor: '#FFFFFF',
      features: [],
      image: undefined,
    });
    setSelectedImageFile(null);
    setImagePreview(null);
    setError(null);
    // Pre-filter subcategories if a default category is set
    if (categories[0]?.id) {
      handlePackageCategoryChange(categories[0].id); 
    } else {
      setFilteredSubcategoriesForPackageForm([]);
    }
    setIsPackageModalOpen(true);
  };

  const openEditPackageModal = (pkg: Package) => {
    setEditingPackage(pkg);
    setPackageFormData({
      name: pkg.name,
      description: pkg.description || '',
      price: pkg.price.toString(),
      categoryId: pkg.categoryId,
      subcategoryId: pkg.subcategoryId,
      image: pkg.image || undefined,
      popular: pkg.popular || false,
      bgColor: pkg.bgColor || '#FFFFFF',
      features: pkg.features.map(f => ({ id: f.id, name: f.name, included: f.included })), // Map features for form
    });
    setSelectedImageFile(null);
    setImagePreview(pkg.image || null);
    setError(null);
    // Fetch and set subcategories for the package's category
    handlePackageCategoryChange(pkg.categoryId); 
    setIsPackageModalOpen(true);
  };

  const handleDeletePackage = async (packageId: string) => {
    if (!confirm('Are you sure you want to delete this package?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/packages/${packageId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete package');
      }
      if (response.status === 204 || response.status === 200) {
        await fetchPackages(); // Refresh list
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete package');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  // --- End Package CRUD Operations ---


  const openCreateCategoryModal = () => {
    setEditingCategory(null);
    setCategoryFormData({ name: '', icon: '' });
    setIsCategoryModalOpen(true);
  };

  const openEditCategoryModal = (category: Category) => {
    setEditingCategory(category);
    setCategoryFormData({ name: category.name, icon: category.icon || '' });
    setIsCategoryModalOpen(true);
  };

  const openCreateSubcategoryModal = () => {
    setEditingSubcategory(null);
    setSubcategoryFormData({ name: '', categoryId: categories[0]?.id || '' }); // Default to first category or empty
    setError(null); // Clear previous errors
    setIsSubcategoryModalOpen(true);
  };

  const openEditSubcategoryModal = (subcategory: Subcategory) => {
    setEditingSubcategory(subcategory);
    setSubcategoryFormData({ name: subcategory.name, categoryId: subcategory.categoryId });
    setError(null); // Clear previous errors
    setIsSubcategoryModalOpen(true);
  };

  const openCreateAddonModal = () => {
    setEditingAddon(null);
    setAddonFormData({ name: '', description: '', price: '0', categoryId: categories[0]?.id || '' });
    setSelectedImageFile(null);
    setImagePreview(null);
    setError(null);
    setIsAddonModalOpen(true);
  };

  const openEditAddonModal = (addon: Addon) => {
    setEditingAddon(addon);
    setAddonFormData({
      name: addon.name,
      description: addon.description || '',
      price: addon.price.toString(),
      categoryId: addon.categoryId,
      image: addon.image || undefined,
    });
    setSelectedImageFile(null);
    setImagePreview(addon.image || null);
    setError(null);
    setIsAddonModalOpen(true);
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/categories/${categoryId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete category');
      }
      if (response.status === 204) { // Successfully deleted
        await fetchCategories(); // Refresh list
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete category');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSubcategory = async (subcategoryId: string) => {
    if (!confirm('Are you sure you want to delete this subcategory? This might also affect packages associated with it.')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/subcategories/${subcategoryId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.message || 'Failed to delete subcategory');
      }
      // Check for 204 No Content or 200 OK with a success message
      if (response.status === 204 || response.status === 200) {
        await fetchSubcategories(); // Refresh list
        if (activeTab === 'categories') await fetchCategories(); // Refresh categories as their subcategory list might change
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete subcategory');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAddon = async (addonId: string) => {
    if (!confirm('Are you sure you want to delete this addon?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/addons/${addonId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete addon');
      }
      if (response.status === 204 || response.status === 200) {
        await fetchAddons();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete addon');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCategories = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Categories</h2>
        <Button onClick={openCreateCategoryModal} size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Category
        </Button>
      </div>
      {isLoading && activeTab === 'categories' && <p className="text-center py-4">Loading categories...</p>}
      {error && activeTab === 'categories' && <p className="text-red-500 text-center py-4">Error: {error}</p>}
      {!isLoading && !error && categories.length === 0 && activeTab === 'categories' && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">No categories found. Click &apos;Create New Category&apos; to add one.</p>
      )}
      {!isLoading && !error && categories.length > 0 && (
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800/80 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                {(cat.icon && (cat.icon.startsWith('http') || cat.icon.startsWith('/') || cat.icon.startsWith('data:image'))) ? (
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={40}
                    height={40}
                    className="object-contain rounded-md bg-gray-100 dark:bg-gray-700" // Added bg for better visibility of contain
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Optionally, find a sibling placeholder and display it
                    }}
                  />
                ) : cat.icon && cat.icon.length < 30 && !cat.icon.includes('<svg') ? ( // Attempt to render simple text/FA class if not a URL or long SVG
                  <span className="w-[40px] h-[40px] flex items-center justify-center text-gray-600 dark:text-gray-300 text-xl rounded-md bg-gray-200 dark:bg-gray-700">
                    {/* This might need a dedicated component for FontAwesome or SVG string rendering */}
                    {cat.icon}
                  </span>
                ) : (
                  <div className="w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500" title="No image/icon URL">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                )}
                <span className="font-medium text-gray-700 dark:text-gray-200">{cat.name}</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => openEditCategoryModal(cat)}>
                  <Pencil className="mr-1 h-3 w-3" /> Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteCategory(cat.id)}>
                  <Trash2 className="mr-1 h-3 w-3" /> Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderSubcategories = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Manage Subcategories</h2>
          <Button onClick={openCreateSubcategoryModal} disabled={categories.length === 0}>
            {categories.length === 0 ? "Create Category First" : "Create New Subcategory"}
          </Button>
        </div>
        {isLoading && activeTab === 'subcategories' && <p>Loading subcategories...</p>}
        {error && activeTab === 'subcategories' && <p className="text-red-500">Error: {error}</p>}
        
        {!isLoading && categories.length === 0 && activeTab === 'subcategories' && 
          <p>Please create a category first to add or view subcategories.</p>
        }
        {!isLoading && subcategories.length === 0 && categories.length > 0 && activeTab === 'subcategories' && !error &&
          <p>No subcategories found. Click &apos;Create New Subcategory&apos; to add one.</p> // Corrected quotes
        }
        
        {!isLoading && !error && subcategories.length > 0 && (
          <ul className="space-y-2">
            {subcategories.map(subcat => {
              const parentCategory = categories.find(c => c.id === subcat.categoryId);
              return (
                <li key={subcat.id} className="p-3 border rounded-md shadow-sm flex justify-between items-center">
                  <div>
                    <span className="font-medium">{subcat.name}</span>
                    {parentCategory && <span className="ml-2 text-sm text-gray-500">(Category: {parentCategory.name})</span>}
                    {!parentCategory && <span className="ml-2 text-sm text-red-500">(Category ID: {subcat.categoryId} - Not Found)</span>}
                  </div>
                  <div>
                    <Button variant="outline" size="sm" onClick={() => openEditSubcategoryModal(subcat)} className="mr-2">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteSubcategory(subcat.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  const renderAddons = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Addons</h2>
          <Button onClick={openCreateAddonModal} size="sm" disabled={categories.length === 0}>
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Addon
          </Button>
        </div>
        {isLoading && activeTab === 'addons' && <p className="text-center py-4">Loading addons...</p>}
        {error && activeTab === 'addons' && <p className="text-red-500 text-center py-4">Error: {error}</p>}
        {!isLoading && categories.length === 0 && activeTab === 'addons' && 
          <p className="text-center py-4 text-gray-500 dark:text-gray-400">Please create a category first before adding addons.</p>
        }
        {!isLoading && addons.length === 0 && categories.length > 0 && activeTab === 'addons' && !error &&
          <p className="text-center py-4 text-gray-500 dark:text-gray-400">No addons found. Click &apos;Create New Addon&apos; to add one.</p>
        }
        {!isLoading && !error && addons.length > 0 && (
          <ul className="space-y-3">
            {addons.map(addon => {
              const categoryName = categories.find(c => c.id === addon.categoryId)?.name || 'N/A';
              return (
                <li key={addon.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800/80 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    {addon.image ? (
                      <Image
                        src={addon.image}
                        alt={addon.name}
                        width={40}
                        height={40}
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500" title="No image">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{addon.name}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Category: {categoryName} - Price: ${typeof addon.price === 'number' ? addon.price.toFixed(2) : parseFloat(addon.price as string).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => openEditAddonModal(addon)}>
                      <Pencil className="mr-1 h-3 w-3" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteAddon(addon.id)}>
                      <Trash2 className="mr-1 h-3 w-3" /> Delete
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  const renderPackages = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Packages</h2>
          <Button 
            onClick={openCreatePackageModal} 
            size="sm" 
            disabled={categories.length === 0 || subcategories.length === 0}
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Package
          </Button>
        </div>
        {isLoading && activeTab === 'packages' && <p className="text-center py-4">Loading packages...</p>}
        {error && activeTab === 'packages' && <p className="text-red-500 text-center py-4">Error: {error}</p>}
        
        {!isLoading && (categories.length === 0 || subcategories.length === 0) && activeTab === 'packages' && 
          <p className="text-center py-4 text-gray-500 dark:text-gray-400">Please ensure you have at least one category and one subcategory before creating packages.</p>
        }
        {!isLoading && packages.length === 0 && categories.length > 0 && subcategories.length > 0 && activeTab === 'packages' && !error &&
          <p className="text-center py-4 text-gray-500 dark:text-gray-400">No packages found. Click &apos;Create New Package&apos; to add one.</p>
        }
        
        {!isLoading && !error && packages.length > 0 && (
          <ul className="space-y-3">
            {packages.map(pkg => {
              const categoryName = categories.find(c => c.id === pkg.categoryId)?.name || 'N/A';
              const subcategoryName = subcategories.find(sc => sc.id === pkg.subcategoryId)?.name || 'N/A';
              return (
                <li key={pkg.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800/80 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    {pkg.image ? (
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        width={40}
                        height={40}
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500" title="No image">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                         </svg>
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{pkg.name}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {categoryName} &gt; {subcategoryName} - Price: ${typeof pkg.price === 'number' ? pkg.price.toFixed(2) : parseFloat(pkg.price as string).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => openEditPackageModal(pkg)}>
                       <Pencil className="mr-1 h-3 w-3" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeletePackage(pkg.id)}>
                       <Trash2 className="mr-1 h-3 w-3" /> Delete
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };


  const renderContent = () => {
    // Error and loading states are handled within each specific renderer now for better granularity
    // if (isLoading) return <p>Loading...</p>; // General loading can be removed or kept for initial page load
    // if (error && !categories.length) return <p className="text-red-500">Error: {error}</p>; // General error can be removed

    switch (activeTab) {
      case 'categories':
        return renderCategories();
      case 'subcategories':
        // return (
        //   <div>
        //     <h2 className="text-xl font-semibold mb-3">Manage Subcategories</h2>
        //     {/* TODO: Implement Subcategory UI */}
        //     <p>Subcategory management UI will go here.</p>
        //   </div>
        // );
        return renderSubcategories();
      case 'addons':
        // return (
        //   <div>
        //     <h2 className="text-xl font-semibold mb-3">Manage Addons</h2>
        //     {/* TODO: Implement Addon UI */}
        //     <p>Addon management UI will go here.</p>
        //   </div>
        // );
        return renderAddons();
      case 'packages':
        // return (
        //   <div>
        //     <h2 className="text-xl font-semibold mb-3">Manage Packages</h2>
        //     {/* TODO: Implement Package UI */}
        //     <p>Package management UI will go here.</p>
        //   </div>
        // );
        return renderPackages();
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Product Management</h1>
      
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {(['categories', 'subcategories', 'addons', 'packages'] as ProductEntityType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                ${activeTab === tab
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-300'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'}
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div>
        {renderContent()}
      </div>

      {/* Category Create/Edit Modal */}
      {isCategoryModalOpen && (
        <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingCategory ? 'Edit Category' : 'Create New Category'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input 
                  id="name" 
                  name="name"
                  value={categoryFormData.name} 
                  onChange={handleCategoryFormChange} 
                  className="col-span-3" 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="icon" className="text-left">
                  Icon (Optional)
                </Label>
                <Input 
                  id="icon" 
                  name="icon"
                  value={categoryFormData.icon || ''} 
                  onChange={handleCategoryFormChange} 
                  className="col-span-3" 
                  placeholder="e.g., svg, font-awesome class, or URL"
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-500 px-4">Error: {error}</p>}
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={handleSaveCategory} disabled={isLoading || !categoryFormData.name.trim()}>
                {isLoading ? (editingCategory ? 'Saving...' : 'Creating...') : (editingCategory ? 'Save Changes' : 'Create Category')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Subcategory Create/Edit Modal */}
      {isSubcategoryModalOpen && (
        <Dialog open={isSubcategoryModalOpen} onOpenChange={setIsSubcategoryModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingSubcategory ? 'Edit Subcategory' : 'Create New Subcategory'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subcategoryName" className="text-right">
                  Name
                </Label>
                <Input
                  id="subcategoryName"
                  name="name" // Ensure this matches the key in subcategoryFormData
                  value={subcategoryFormData.name}
                  onChange={handleSubcategoryFormChange}
                  className="col-span-3"
                  placeholder="e.g., Menswear, Electronics"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="categoryId" className="text-right">
                  Category
                </Label>
                <Select
                  value={subcategoryFormData.categoryId}
                  onValueChange={handleSubcategoryCategoryChange}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {error && <p className="text-sm text-red-500 px-1 py-2">{error}</p>} {/* Display error inside modal */}
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline" onClick={() => setError(null)}>Cancel</Button>
              </DialogClose>
              <Button 
                type="button" 
                onClick={handleSaveSubcategory} 
                disabled={isLoading || !subcategoryFormData.name.trim() || !subcategoryFormData.categoryId}
              >
                {isLoading ? (editingSubcategory ? 'Saving...' : 'Creating...') : (editingSubcategory ? 'Save Changes' : 'Create Subcategory')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Addon Create/Edit Modal */}
      {isAddonModalOpen && (
        <Dialog open={isAddonModalOpen} onOpenChange={(isOpen) => {
          setIsAddonModalOpen(isOpen);
          if (!isOpen) {
            setError(null);
            setSelectedImageFile(null);
            setImagePreview(null);
          }
        }}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{editingAddon ? 'Edit Addon' : 'Create New Addon'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Name */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonName" className="text-right">Name</Label>
                <Input id="addonName" name="name" value={addonFormData.name} onChange={handleAddonFormChange} className="col-span-3" placeholder="e.g., Extra Cheese" />
              </div>
              {/* Description */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonDescription" className="text-right">Description</Label>
                <Input id="addonDescription" name="description" value={addonFormData.description || ''} onChange={handleAddonFormChange} className="col-span-3" placeholder="(Optional)" />
              </div>
              {/* Price */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonPrice" className="text-right">Price</Label>
                <Input id="addonPrice" name="price" type="number" value={addonFormData.price} onChange={handleAddonFormChange} className="col-span-3" placeholder="e.g., 2.50" />
              </div>
              {/* Category */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonCategoryId" className="text-right">Category</Label>
                <Select value={addonFormData.categoryId} onValueChange={handleAddonCategoryChange} disabled={categories.length === 0}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={categories.length === 0 ? "No categories available" : "Select a category"} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (<SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              {/* Image Input and Preview */}
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="addonImage" className="text-right pt-2">Image</Label>
                <div className="col-span-3 space-y-2">
                  <Input id="addonImage" name="imageFile" type="file" onChange={handleImageFileChange} className="w-full" accept="image/jpeg, image/png, image/gif, image/webp" />
                  {imagePreview && (
                    <div className="mt-2">
                      <Image src={imagePreview} alt="Preview" width={100} height={100} className="object-cover rounded" />
                    </div>
                  )}
                  {!imagePreview && editingAddon?.image && (
                     <div className="mt-2">
                        <Image src={editingAddon.image} alt="Current image" width={100} height={100} className="object-cover rounded" />
                        <p className="text-xs text-gray-500 mt-1">Current image</p>
                     </div>
                  )}
                </div>
              </div>
            </div>
            {error && <p className="text-sm text-red-500 px-1 py-2">Error: {error}</p>}
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                type="button" 
                onClick={handleSaveAddon} 
                disabled={isLoading || !addonFormData.name.trim() || !addonFormData.categoryId || isNaN(parseFloat(addonFormData.price)) || parseFloat(addonFormData.price) <= 0}
              >
                {isLoading ? (editingAddon ? 'Saving...' : 'Creating...') : (editingAddon ? 'Save Changes' : 'Create Addon')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Package Create/Edit Modal */}
      {isPackageModalOpen && (
        <Dialog open={isPackageModalOpen} onOpenChange={(isOpen) => { setIsPackageModalOpen(isOpen); if (!isOpen) { setError(null); setImagePreview(null); setSelectedImageFile(null); setFilteredSubcategoriesForPackageForm([]); } }}>
          <DialogContent className="sm:max-w-lg"> {/* Increased width for package form */}
            <DialogHeader>
              <DialogTitle>{editingPackage ? 'Edit Package' : 'Create New Package'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-5 py-4 max-h-[70vh] overflow-y-auto pr-2"> {/* Scrollable content */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pkg-name" className="text-right">Name</Label>
                <Input id="pkg-name" name="name" value={packageFormData.name} onChange={handlePackageFormChange} className="col-span-3" placeholder="e.g., Starter Pack" />
              </div>

              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="pkg-description" className="text-right pt-2">Description</Label>
                <textarea id="pkg-description" name="description" value={packageFormData.description || ''} onChange={handlePackageFormChange} className="col-span-3 border rounded-md p-2 text-sm min-h-[60px]" placeholder="Optional package description" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pkg-price" className="text-right">Price ($)</Label>
                <Input id="pkg-price" name="price" type="number" value={packageFormData.price} onChange={handlePackageFormChange} className="col-span-3" placeholder="e.g., 49.99" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pkg-category" className="text-right">Category</Label>
                <Select value={packageFormData.categoryId} onValueChange={handlePackageCategoryChange}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pkg-subcategory" className="text-right">Subcategory</Label>
                <Select value={packageFormData.subcategoryId} onValueChange={handlePackageSubcategoryChange} disabled={!packageFormData.categoryId || filteredSubcategoriesForPackageForm.length === 0}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={!packageFormData.categoryId ? "Select category first" : (filteredSubcategoriesForPackageForm.length === 0 ? "No subcategories available" : "Select a subcategory")} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredSubcategoriesForPackageForm.map(subcat => (
                      <SelectItem key={subcat.id} value={subcat.id}>{subcat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="pkg-image" className="text-right pt-2">Image</Label>
                <div className="col-span-3 space-y-2"> {/* Added space-y-2 for better vertical spacing */}
                  <Input id="pkg-image" type="file" accept="image/*" onChange={handleImageFileChange} className="w-full mb-0" /> {/* Ensure input takes full width, remove mb-2 if space-y is used */}
                  {imagePreview && (
                    <div className="flex justify-start pt-1"> {/* Control alignment, added pt-1 for slight separation */}
                      <Image src={imagePreview} alt="Preview" width={80} height={80} className="object-cover rounded" />
                    </div>
                  )}
                  {!imagePreview && editingPackage?.image && (
                    <div className="text-xs text-gray-500 pt-1"> {/* Wrap text for consistent spacing */}
                      Current: {editingPackage.image.split('/').pop()}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pkg-popular" className="text-right">Popular</Label>
                <div className="col-span-3 flex items-center">
                   <Input type="checkbox" id="pkg-popular" name="popular" checked={packageFormData.popular} onChange={handlePackageFormChange} className="h-4 w-4" />
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pkg-bgColor" className="text-right">BG Color</Label>
                <Input id="pkg-bgColor" name="bgColor" type="color" value={packageFormData.bgColor || '#FFFFFF'} onChange={handlePackageFormChange} className="col-span-1 h-8 w-14 p-1" />
                <Input id="pkg-bgColor-text" name="bgColor" type="text" value={packageFormData.bgColor || '#FFFFFF'} onChange={handlePackageFormChange} className="col-span-2" placeholder="#FFFFFF" />
              </div>

              {/* Features Section */}
              <div className="col-span-4">
                <Label className="text-base font-medium">Features</Label>
                {packageFormData.features.map((feature, index) => (
                  <div key={feature.id || index} className="grid grid-cols-12 gap-2 items-center mt-2 p-2 border rounded-md">
                    <Input
                      type="text"
                      placeholder="Feature name"
                      value={feature.name}
                      onChange={(e) => handlePackageFeatureChange(index, 'name', e.target.value)}
                      className="col-span-7 text-sm"
                    />
                    <div className="col-span-4 flex items-center justify-start">
                      <Input
                        type="checkbox"
                        checked={feature.included}
                        onChange={(e) => handlePackageFeatureChange(index, 'included', e.target.checked)}
                        className="h-4 w-4 mr-2"
                        id={`feature-included-${index}`}
                      />
                      <Label htmlFor={`feature-included-${index}`} className="text-sm">Included</Label>
                    </div>
                    <Button type="button" variant="ghost" size="sm" onClick={() => handleRemovePackageFeature(index)} className="col-span-1 text-red-500">✕</Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={handleAddPackageFeature} className="mt-3">
                  Add Feature
                </Button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm px-4 pb-2">{error}</p>}
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" onClick={() => { setIsPackageModalOpen(false); setError(null); setImagePreview(null); setSelectedImageFile(null); setFilteredSubcategoriesForPackageForm([]); }}>Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={handleSavePackage} disabled={isLoading || !packageFormData.categoryId || !packageFormData.subcategoryId}>
                {isLoading ? (editingPackage ? 'Saving...' : 'Creating...') : (editingPackage ? 'Save Changes' : 'Create Package')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
