'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'; // Assuming you have Dialog components
import { Label } from '@/components/ui/label'; // Assuming you have a Label component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // For category selection
import Image from 'next/image'; // Import Next Image
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import CategoriesSection from './components/CategoriesSection';
import SubcategoriesSection from './components/SubcategoriesSection';
import AddonsSection from './components/AddonsSection';
import PackagesSection from './components/PackagesSection';
import type { Category, Subcategory, Addon, Package, CategoryFormData, SubcategoryFormData, AddonFormData, PackageFormData, PackageFeatureFormData, ProductEntityType } from '@/types/product-dashboard';

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
    addonIds: [], // Add this line to satisfy the required property
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
      addonIds: [], // Add this line
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
      addonIds: pkg.addons ? pkg.addons.map(a => a.id) : [],
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

  const renderContent = () => {
    switch (activeTab) {
      case 'categories':
        return (
          <CategoriesSection
            categories={categories}
            isLoading={isLoading}
            error={error}
            openCreateCategoryModal={openCreateCategoryModal}
            openEditCategoryModal={openEditCategoryModal}
            handleDeleteCategory={handleDeleteCategory}
          />
        );
      case 'subcategories':
        return (
          <SubcategoriesSection
            subcategories={subcategories}
            categories={categories}
            isLoading={isLoading}
            error={error}
            openCreateSubcategoryModal={openCreateSubcategoryModal}
            openEditSubcategoryModal={openEditSubcategoryModal}
            handleDeleteSubcategory={handleDeleteSubcategory}
          />
        );
      case 'addons':
        return (
          <AddonsSection
            addons={addons}
            categories={categories}
            isLoading={isLoading}
            error={error}
            openCreateAddonModal={openCreateAddonModal}
            openEditAddonModal={openEditAddonModal}
            handleDeleteAddon={handleDeleteAddon}
          />
        );
      case 'packages':
        return (
          <PackagesSection
            packages={packages}
            categories={categories}
            subcategories={subcategories}
            isLoading={isLoading}
            error={error}
            openCreatePackageModal={openCreatePackageModal}
            openEditPackageModal={openEditPackageModal}
            handleDeletePackage={handleDeletePackage}
          />
        );
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
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingPackage ? 'Edit Package' : 'Create New Package'}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <Label htmlFor="pkg-name" className="block mb-1">Name</Label>
                <Input id="pkg-name" name="name" value={packageFormData.name} onChange={handlePackageFormChange} placeholder="e.g., Starter Pack" />
              </div>
              <div>
                <Label htmlFor="pkg-description" className="block mb-1">Description</Label>
                <textarea id="pkg-description" name="description" value={packageFormData.description || ''} onChange={handlePackageFormChange} className="border rounded-md p-2 text-sm min-h-[60px] w-full" placeholder="Optional package description" />
              </div>
              <div>
                <Label htmlFor="pkg-price" className="block mb-1">Price ($)</Label>
                <Input id="pkg-price" name="price" type="number" value={packageFormData.price} onChange={handlePackageFormChange} placeholder="e.g., 49.99" />
              </div>
              <div>
                <Label htmlFor="pkg-category" className="block mb-1">Category</Label>
                <Select value={packageFormData.categoryId} onValueChange={handlePackageCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pkg-subcategory" className="block mb-1">Subcategory</Label>
                <Select value={packageFormData.subcategoryId} onValueChange={handlePackageSubcategoryChange} disabled={!packageFormData.categoryId || filteredSubcategoriesForPackageForm.length === 0}>
                  <SelectTrigger>
                    <SelectValue placeholder={!packageFormData.categoryId ? "Select category first" : (filteredSubcategoriesForPackageForm.length === 0 ? "No subcategories available" : "Select a subcategory")} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredSubcategoriesForPackageForm.map(subcat => (
                      <SelectItem key={subcat.id} value={subcat.id}>{subcat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pkg-image" className="block mb-1">Image</Label>
                <Input id="pkg-image" type="file" accept="image/*" onChange={handleImageFileChange} className="w-full" />
                {imagePreview && (
                  <div className="flex justify-start pt-1">
                    <Image src={imagePreview} alt="Preview" width={80} height={80} className="object-cover rounded" />
                  </div>
                )}
                {!imagePreview && editingPackage?.image && (
                  <div className="text-xs text-gray-500 pt-1">
                    Current: {editingPackage.image.split('/').pop()}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Input type="checkbox" id="pkg-popular" name="popular" checked={packageFormData.popular} onChange={handlePackageFormChange} className="h-4 w-4" />
                <Label htmlFor="pkg-popular" className="text-sm">Popular</Label>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="pkg-bgColor" className="mr-2">BG Color</Label>
                <Input id="pkg-bgColor" name="bgColor" type="color" value={packageFormData.bgColor || '#FFFFFF'} onChange={handlePackageFormChange} className="h-8 w-14 p-1" />
                <Input id="pkg-bgColor-text" name="bgColor" type="text" value={packageFormData.bgColor || '#FFFFFF'} onChange={handlePackageFormChange} className="w-24" placeholder="#FFFFFF" />
              </div>
              {/* Features Section */}
              <div>
                <Label className="text-base font-medium">Features</Label>
                {packageFormData.features.map((feature, index) => (
                  <div key={feature.id || index} className="flex gap-2 items-center mt-2 p-2 border rounded-md">
                    <Input
                      type="text"
                      placeholder="Feature name"
                      value={feature.name}
                      onChange={(e) => handlePackageFeatureChange(index, 'name', e.target.value)}
                      className="text-sm flex-1"
                    />
                    <Input
                      type="checkbox"
                      checked={feature.included}
                      onChange={(e) => handlePackageFeatureChange(index, 'included', e.target.checked)}
                      className="h-4 w-4 mr-2"
                      id={`feature-included-${index}`}
                    />
                    <Label htmlFor={`feature-included-${index}`} className="text-sm">Included</Label>
                    <Button type="button" variant="ghost" size="sm" onClick={() => handleRemovePackageFeature(index)} className="text-red-500">✕</Button>
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
