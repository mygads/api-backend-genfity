import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import PackageModal from '../modals/PackageModal';
import type { Package, Category, Subcategory, PackageFormData, PackageFeatureFormData } from '@/types/product-dashboard';

const PackagesSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);  const [packageFormData, setPackageFormData] = useState<PackageFormData>({
    name_en: '',
    name_id: '',
    description_en: '',
    description_id: '',
    price_idr: '',
    price_usd: '',
    categoryId: '',
    subcategoryId: '',
    popular: false,
    bgColor: '#FFFFFF',
    features: [],
    image: undefined,
    addonIds: [],
  });
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [filteredSubcategoriesForPackageForm, setFilteredSubcategoriesForPackageForm] = useState<Subcategory[]>([]);

  // Fetch categories, subcategories, and packages together
  const fetchAll = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [catRes, subcatRes, pkgRes] = await Promise.all([
        fetch('/api/product/categories'),
        fetch('/api/product/subcategories'),
        fetch('/api/product/packages'),
      ]);
      if (!catRes.ok) throw new Error((await catRes.json()).message || 'Failed to fetch categories');
      if (!subcatRes.ok) throw new Error((await subcatRes.json()).message || 'Failed to fetch subcategories');
      if (!pkgRes.ok) throw new Error((await pkgRes.json()).message || 'Failed to fetch packages');
      setCategories(await catRes.json());
      setSubcategories(await subcatRes.json());
      setPackages(await pkgRes.json());
    } catch (err: any) {
      setError(err.message);
      setCategories([]);
      setSubcategories([]);
      setPackages([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);
  const openCreatePackageModal = () => {
    setPackageFormData({
      name_en: '',
      name_id: '',
      description_en: '',
      description_id: '',
      price_idr: '',
      price_usd: '',
      categoryId: categories[0]?.id || '',
      subcategoryId: '',
      popular: false,
      bgColor: '#FFFFFF',
      features: [],
      image: undefined,
      addonIds: [],
    });
    setSelectedImageFile(null);
    setImagePreview(null);
    setError(null);
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
      name_en: pkg.name_en,
      name_id: pkg.name_id,
      description_en: pkg.description_en,
      description_id: pkg.description_id,
      price_idr: pkg.price_idr.toString(),
      price_usd: pkg.price_usd.toString(),
      categoryId: pkg.categoryId,
      subcategoryId: pkg.subcategoryId,
      image: pkg.image || undefined,
      popular: pkg.popular || false,
      bgColor: pkg.bgColor || '#FFFFFF',      features: pkg.features.map(f => ({ id: f.id, name_en: f.name_en, name_id: f.name_id, included: f.included })),
      addonIds: pkg.addons ? pkg.addons.map(a => a.id) : [],
    });
    setSelectedImageFile(null);
    setImagePreview(pkg.image || null);
    setError(null);
    handlePackageCategoryChange(pkg.categoryId);
    setIsPackageModalOpen(true);
  };

  const handlePackageFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setPackageFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePackageCategoryChange = async (categoryId: string) => {
    setPackageFormData(prev => ({ ...prev, categoryId, subcategoryId: '' }));
    if (categoryId) {
      setIsLoading(true);
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
      setFilteredSubcategoriesForPackageForm([]);
    }
  };

  const handlePackageSubcategoryChange = (subcategoryId: string) => {
    setPackageFormData(prev => ({ ...prev, subcategoryId }));
  };

  const handleAddPackageFeature = () => {
    setPackageFormData(prev => ({
      ...prev,
      features: [...prev.features, { name_en: '', name_id: '', included: true, id: `temp-${Date.now()}` }],
    }));
  };

  const handlePackageFeatureChange = (index: number, field: keyof PackageFeatureFormData, value: string | boolean) => {
    setPackageFormData(prev => {
      const newFeatures = [...prev.features];
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

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImageFile(null);
      setImagePreview(editingPackage?.image || null);
    }
  };

  const handleSavePackage = async () => {
    setIsLoading(true);
    setError(null);
    if (!packageFormData.categoryId || !packageFormData.subcategoryId) {
      setError('Category and Subcategory are required for a package.');
      setIsLoading(false);
      return;
    }
    if (
      isNaN(parseFloat(packageFormData.price_idr)) || parseFloat(packageFormData.price_idr) < 0 ||
      isNaN(parseFloat(packageFormData.price_usd)) || parseFloat(packageFormData.price_usd) < 0
    ) {
      setError('Valid price (IDR & USD) is required for a package.');
      setIsLoading(false);
      return;
    }
    if (!packageFormData.features || packageFormData.features.length === 0) {
      setError('At least one feature is required for a package.');
      setIsLoading(false);
      return;
    }    if (packageFormData.features.some(f => !f.name_en.trim() || !f.name_id.trim())) {
      setError('All features must have a name in both languages.');
      setIsLoading(false);
      return;
    }
    
    // Enforce mandatory image for new packages
    if (!editingPackage && !selectedImageFile) {
      setError('Image is required for new packages.');
      setIsLoading(false);
      return;
    }
    
    // For existing packages, require image if not already present
    if (editingPackage && !editingPackage.image && !selectedImageFile) {
      setError('Image is required for this package.');
      setIsLoading(false);
      return;
    }

    let imageUrl = editingPackage?.image || undefined;
    if (selectedImageFile) {
      try {
        const response = await fetch(`/api/product/packages/upload?filename=${selectedImageFile.name}`, {
          method: 'POST',
          body: selectedImageFile,
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to upload image');
        }
        const result = await response.json();
        imageUrl = result.url;
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
      price_idr: parseFloat(packageFormData.price_idr),
      price_usd: parseFloat(packageFormData.price_usd),
      image: imageUrl,
      features: packageFormData.features.map(f => ({
        id: f.id?.startsWith('temp-') ? undefined : f.id,        name_en: f.name_en,
        name_id: f.name_id,
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
      await fetchAll();
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

  const handleDeletePackage = async (packageId: string) => {
    if (!confirm('Are you sure you want to delete this package?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/packages/${packageId}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete package');
      }
      if (response.status === 204 || response.status === 200) {
        await fetchAll();
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

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Packages</h2>
        <Button onClick={openCreatePackageModal} disabled={categories.length === 0 || subcategories.length === 0}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Package
        </Button>
      </div>
      {isLoading && <p className="text-center py-4">Loading packages...</p>}
      {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
      {!isLoading && (categories.length === 0 || subcategories.length === 0) && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">Please ensure you have at least one category and one subcategory before creating packages.</p>
      )}
      {!isLoading && packages.length === 0 && categories.length > 0 && subcategories.length > 0 && !error && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">No packages found. Click &apos;Create New Package&apos; to add one.</p>
      )}
      {!isLoading && !error && packages.length > 0 && (
        <ul className="space-y-3">
          {packages.map((pkg: Package) => {
            // Pilih bahasa dan harga, misal: pakai bahasa Indonesia dan harga IDR
            const categoryName = categories.find((c: Category) => c.id === pkg.categoryId)?.name_id || 'N/A';
            const subcategoryName = subcategories.find((sc: Subcategory) => sc.id === pkg.subcategoryId)?.name_id || 'N/A';
            return (
              <li key={pkg.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800/80 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.name_id}
                      width={40}
                      height={40}
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400 dark:text-gray-500" title="No image">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-200">{pkg.name_en}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{categoryName} / {subcategoryName}</div>
                    {pkg.description_en && <div className="text-xs text-gray-400 dark:text-gray-500">{pkg.description_en}</div>}                  </div>
                  {pkg.popular && <div className="px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">Popular</div>}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    {typeof pkg.price_idr === 'number' ? `Rp${pkg.price_idr.toLocaleString('id-ID')}` : `Rp${parseFloat(pkg.price_idr as any).toLocaleString('id-ID')}`}
                  </span>
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                    {typeof pkg.price_usd === 'number' ? `$${pkg.price_usd.toLocaleString('en-US')}` : `$${parseFloat(pkg.price_usd as any).toLocaleString('en-US')}`}
                  </span>
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
      <PackageModal
        open={isPackageModalOpen}
        onOpenChange={(isOpen) => {
          setIsPackageModalOpen(isOpen);
          if (!isOpen) {
            setError(null);
            setImagePreview(null);
            setSelectedImageFile(null);
            setFilteredSubcategoriesForPackageForm([]);
          }
        }}
        formData={packageFormData}
        onFormChange={handlePackageFormChange}
        onCategoryChange={handlePackageCategoryChange}
        onSubcategoryChange={handlePackageSubcategoryChange}
        categories={categories}
        subcategories={subcategories}
        filteredSubcategories={filteredSubcategoriesForPackageForm}
        imagePreview={imagePreview}
        editingPackage={editingPackage}
        onImageFileChange={handleImageFileChange}
        onAddFeature={handleAddPackageFeature}
        onFeatureChange={handlePackageFeatureChange}
        onRemoveFeature={handleRemovePackageFeature}
        isLoading={isLoading}
        error={error}
        onSave={handleSavePackage}
      />
    </div>
  );
};

export default PackagesSection;
