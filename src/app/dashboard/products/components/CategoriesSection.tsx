import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import CategoryModal from '../modals/CategoryModal';
import type { Category, CategoryFormData } from '@/types/product-dashboard';

const CategoriesSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState<CategoryFormData>({
    name_en: '',
    name_id: '',
    icon: '',
  });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const fetchCategories = async () => {
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
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openCreateCategoryModal = () => {
    setEditingCategory(null);
    setCategoryFormData({ name_en: '', name_id: '', icon: '' });
    setError(null);
    setIsCategoryModalOpen(true);
  };

  const openEditCategoryModal = (category: Category) => {
    setEditingCategory(category);
    setCategoryFormData({
      name_en: category.name_en,
      name_id: category.name_id,
      icon: category.icon || '',
    });
    setError(null);
    setIsCategoryModalOpen(true);
  };

  const handleCategoryFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveCategory = async () => {
    setIsLoading(true);
    setError(null);
    if (!categoryFormData.name_en.trim() || !categoryFormData.name_id.trim()) {
      setError('Both English and Indonesian names are required.');
      setIsLoading(false);
      return;
    }
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
      await fetchCategories();
      setIsCategoryModalOpen(false);
      setEditingCategory(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/categories/${categoryId}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete category');
      }
      if (response.status === 204) {
        await fetchCategories();
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

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Categories</h2>
        <Button onClick={openCreateCategoryModal}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Category
        </Button>
      </div>
      {isLoading && <p className="text-center py-4">Loading categories...</p>}
      {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
      {!isLoading && !error && categories.length === 0 && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">No categories found. Click &apos;Create New Category&apos; to add one.</p>
      )}
      {!isLoading && categories.length > 0 && (
        <ul className="space-y-2">
          {categories.map((category: Category) => (
            <li key={category.id} className="p-3 border rounded-md shadow-sm flex justify-between items-center">
              <div className="flex items-center space-x-3">
                {category.icon && (
                  <Image src={category.icon} alt={category.name_id} width={32} height={32} className="rounded" />
                )}
                <span className="font-medium">{category.name_id}</span>
                <span className="ml-2 text-xs text-gray-400">(EN: {category.name_en})</span>
              </div>
              <div>
                <Button variant="outline" size="sm" onClick={() => openEditCategoryModal(category)} className="mr-2">
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteCategory(category.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <CategoryModal
        open={isCategoryModalOpen}
        onOpenChange={setIsCategoryModalOpen}
        formData={categoryFormData}
        onFormChange={handleCategoryFormChange}
        isLoading={isLoading}
        error={error}
        editingCategory={editingCategory}
        onSave={handleSaveCategory}
      />
    </div>
  );
};

export default CategoriesSection;
