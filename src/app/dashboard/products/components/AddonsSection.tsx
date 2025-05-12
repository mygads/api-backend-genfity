import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Addon, Category, AddonFormData } from '@/types/product-dashboard';
import AddonModal from '../modals/AddonModal';

const AddonsSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [addons, setAddons] = useState<Addon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAddonModalOpen, setIsAddonModalOpen] = useState(false);
  const [addonFormData, setAddonFormData] = useState<AddonFormData>({
    name_en: '',
    name_id: '',
    description_en: '',
    description_id: '',
    price_idr: '',
    price_usd: '',
    categoryId: categories[0]?.id || '',
    image: undefined,
  });
  const [editingAddon, setEditingAddon] = useState<Addon | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Fetch categories and addons together
  const fetchCategoriesAndAddons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [catRes, addonRes] = await Promise.all([
        fetch('/api/product/categories'),
        fetch('/api/product/addons'),
      ]);
      if (!catRes.ok) {
        const errorData = await catRes.json();
        throw new Error(errorData.message || 'Failed to fetch categories');
      }
      if (!addonRes.ok) {
        const errorData = await addonRes.json();
        throw new Error(errorData.message || 'Failed to fetch addons');
      }
      const catData: Category[] = await catRes.json();
      const addonData: Addon[] = await addonRes.json();
      setCategories(catData);
      setAddons(addonData);
    } catch (err: any) {
      setError(err.message);
      setCategories([]);
      setAddons([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesAndAddons();
  }, []);

  const openCreateAddonModal = () => {
    setEditingAddon(null);
    setAddonFormData({ name_en: '', name_id: '', description_en: '', description_id: '', price_idr: '', price_usd: '', categoryId: categories[0]?.id || '', image: undefined });
    setSelectedImageFile(null);
    setImagePreview(null);
    setError(null);
    setIsAddonModalOpen(true);
  };

  const openEditAddonModal = (addon: Addon) => {
    setEditingAddon(addon);
    setAddonFormData({
      name_en: addon.name_en,
      name_id: addon.name_id,
      description_en: addon.description_en || '',
      description_id: addon.description_id || '',
      price_idr: addon.price_idr.toString(),
      price_usd: addon.price_usd.toString(),
      categoryId: addon.categoryId,
      image: addon.image || undefined,
      duration: (addon.duration !== undefined && addon.duration !== null) ? addon.duration.toString() : '',
    });
    setSelectedImageFile(null);
    setImagePreview(addon.image || null);
    setError(null);
    setIsAddonModalOpen(true);
  };

  const handleAddonFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddonFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddonCategoryChange = (categoryId: string) => {
    setAddonFormData(prev => ({ ...prev, categoryId }));
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImageFile(null);
      setImagePreview(editingAddon?.image || null);
    }
  };

  const handleSaveAddon = async () => {
    setIsLoading(true);
    setError(null);
    if (!addonFormData.categoryId) {
      setError('Category is required for an addon.');
      setIsLoading(false);
      return;
    }
    if (
      isNaN(parseFloat(addonFormData.price_idr)) || parseFloat(addonFormData.price_idr) < 0 ||
      isNaN(parseFloat(addonFormData.price_usd)) || parseFloat(addonFormData.price_usd) < 0
    ) {
      setError('Valid price (IDR & USD) is required for an addon.');
      setIsLoading(false);
      return;
    }
    let imageUrl = editingAddon?.image;
    if (selectedImageFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedImageFile);
        const res = await fetch('/api/product/images/upload', {
          method: 'POST',
          body: formData,
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Image upload failed');
        }
        const imageData = await res.json();
        const absoluteUrl = `${window.location.origin}${imageData.filePath}`;
        imageUrl = absoluteUrl;
      } catch (uploadError: any) {
        setError(`Image upload failed: ${uploadError.message}`);
        setIsLoading(false);
        return;
      }
    }
    const dataToSave: any = {
      name_en: addonFormData.name_en,
      name_id: addonFormData.name_id,
      description_en: addonFormData.description_en,
      description_id: addonFormData.description_id,
      price_idr: parseFloat(addonFormData.price_idr),
      price_usd: parseFloat(addonFormData.price_usd),
      categoryId: addonFormData.categoryId,
      duration: addonFormData.duration ? parseInt(addonFormData.duration) : "",
      durationUnit: 'day',
    };
    if (imageUrl) dataToSave.image = imageUrl;
    const apiUrl = editingAddon ? `/api/product/addons/${editingAddon.id}` : '/api/product/addons';
    try {
      const response = await fetch(apiUrl, {
        method: editingAddon ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save addon');
        return;
      }
      fetchCategoriesAndAddons();
      setIsAddonModalOpen(false);
      setEditingAddon(null);
      setAddonFormData({ name_en: '', name_id: '', description_en: '', description_id: '', price_idr: '', price_usd: '', categoryId: categories[0]?.id || '', image: undefined });
      setSelectedImageFile(null);
      setImagePreview(null);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAddon = async (addonId: string) => {
    if (!confirm('Are you sure you want to delete this addon?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/addons/${addonId}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete addon');
      }
      if (response.status === 204 || response.status === 200) {
        await fetchCategoriesAndAddons();
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

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Addons</h2>
        <Button onClick={openCreateAddonModal} disabled={categories.length === 0}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Addon
        </Button>
      </div>
      {isLoading && <p className="text-center py-4">Loading addons...</p>}
      {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
      {!isLoading && categories.length === 0 && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">Please create a category first before adding addons.</p>
      )}
      {!isLoading && addons.length === 0 && categories.length > 0 && !error && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">No addons found. Click &apos;Create New Addon&apos; to add one.</p>
      )}
      {!isLoading && !error && addons.length > 0 && (
        <ul className="space-y-3">
          {addons.map(addon => {
            const categoryName = categories.find((c: Category) => c.id === addon.categoryId)?.name_id || 'N/A';
            let imageSrc = addon.image || '';
            if (
              imageSrc &&
              !imageSrc.startsWith('http') &&
              !imageSrc.startsWith('/') &&
              !imageSrc.startsWith('data:image')
            ) {
              imageSrc = `/api/product/images/${imageSrc}`;
            }
            const isValidImage =
              imageSrc &&
              (imageSrc.startsWith('http') ||
                imageSrc.startsWith('/') ||
                imageSrc.startsWith('data:image'));
            return (
              <li key={addon.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800/80 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  {isValidImage ? (
                    <Image
                      src={imageSrc as string}
                      alt={addon.name_id}
                      width={40}
                      height={40}
                      className="object-cover rounded bg-gray-100 dark:bg-gray-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-[40px] h-[40px] bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400 dark:text-gray-500" title="No image">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-200">{addon.name_en}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{categoryName}</div>
                    {addon.description_id && <div className="text-xs text-gray-400 dark:text-gray-500">{addon.description_en}</div>}
                  </div>
                  <div>
                    {addon.duration && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Duration: {addon.duration} {addon.durationUnit}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    {typeof addon.price_idr === 'number' ? `Rp${addon.price_idr.toLocaleString('id-ID')}` : `Rp${parseFloat(addon.price_idr as any).toLocaleString('id-ID')}`}
                  </span>
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                    {typeof addon.price_usd === 'number' ? `$${addon.price_usd.toLocaleString('en-US')}` : `$${parseFloat(addon.price_usd as any).toLocaleString('en-US')}`}
                  </span>
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
      <AddonModal
        open={isAddonModalOpen}
        onOpenChange={(isOpen) => {
          setIsAddonModalOpen(isOpen);
          if (!isOpen) {
            setError(null);
            setSelectedImageFile(null);
            setImagePreview(null);
          }
        }}
        formData={addonFormData}
        onFormChange={handleAddonFormChange}
        onCategoryChange={handleAddonCategoryChange}
        categories={categories}
        imagePreview={imagePreview}
        editingAddon={editingAddon}
        onImageFileChange={handleImageFileChange}
        onSave={handleSaveAddon}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default AddonsSection;
