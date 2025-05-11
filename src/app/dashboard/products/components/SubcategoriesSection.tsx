import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import type { Subcategory, Category, SubcategoryFormData } from '@/types/product-dashboard';
import SubcategoryModal from '../modals/SubcategoryModal';

const SubcategoriesSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubcategoryModalOpen, setIsSubcategoryModalOpen] = useState(false);
  const [subcategoryFormData, setSubcategoryFormData] = useState<SubcategoryFormData>({
    name_en: '',
    name_id: '',
    categoryId: '',
  });
  const [editingSubcategory, setEditingSubcategory] = useState<Subcategory | null>(null);

  // Fetch categories and subcategories together
  const fetchCategoriesAndSubcategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [catRes, subcatRes] = await Promise.all([
        fetch('/api/product/categories'),
        fetch('/api/product/subcategories'),
      ]);
      if (!catRes.ok) {
        const errorData = await catRes.json();
        throw new Error(errorData.message || 'Failed to fetch categories');
      }
      if (!subcatRes.ok) {
        const errorData = await subcatRes.json();
        throw new Error(errorData.message || 'Failed to fetch subcategories');
      }
      const catData: Category[] = await catRes.json();
      const subcatData: Subcategory[] = await subcatRes.json();
      setCategories(catData);
      setSubcategories(subcatData);
    } catch (err: any) {
      setError(err.message);
      setCategories([]);
      setSubcategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesAndSubcategories();
  }, []);

  const openCreateSubcategoryModal = () => {
    setEditingSubcategory(null);
    setSubcategoryFormData({ name_en: '', name_id: '', categoryId: categories[0]?.id || '' });
    setError(null);
    setIsSubcategoryModalOpen(true);
  };

  const openEditSubcategoryModal = (subcategory: Subcategory) => {
    setEditingSubcategory(subcategory);
    setSubcategoryFormData({ name_en: subcategory.name_en, name_id: subcategory.name_id, categoryId: subcategory.categoryId });
    setError(null);
    setIsSubcategoryModalOpen(true);
  };

  const handleSubcategoryFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubcategoryFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubcategoryCategoryChange = (categoryId: string) => {
    setSubcategoryFormData(prev => ({ ...prev, categoryId }));
  };

  const handleSaveSubcategory = async () => {
    setIsLoading(true);
    setError(null);
    if (!subcategoryFormData.categoryId || !subcategoryFormData.name_en.trim() || !subcategoryFormData.name_id.trim()) {
      setError('Both English and Indonesian names and category are required.');
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
      await fetchCategoriesAndSubcategories();
      setIsSubcategoryModalOpen(false);
      setEditingSubcategory(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSubcategory = async (subcategoryId: string) => {
    if (!confirm('Are you sure you want to delete this subcategory?')) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/product/subcategories/${subcategoryId}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete subcategory');
      }
      if (response.status === 204 || response.status === 200) {
        await fetchCategoriesAndSubcategories();
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

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Subcategories</h2>
        <Button onClick={openCreateSubcategoryModal} disabled={categories.length === 0}>
          <PlusCircle className="mr-2 h-4 w-4" />
          {categories.length === 0 ? "Create Category First" : "Create New Subcategory"}
        </Button>
      </div>
      {isLoading && <p>Loading subcategories...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!isLoading && categories.length === 0 && (
        <p>Please create a category first to add or view subcategories.</p>
      )}
      {!isLoading && subcategories.length === 0 && categories.length > 0 && !error && (
        <p>No subcategories found. Click &apos;Create New Subcategory&apos; to add one.</p>
      )}
      {!isLoading && !error && subcategories.length > 0 && (
        <ul className="space-y-2">
          {subcategories.map((subcat: Subcategory) => {
            const parentCategory = categories.find((c: Category) => c.id === subcat.categoryId);
            return (
              <li key={subcat.id} className="p-3 border rounded-md shadow-sm flex justify-between items-center">
                <div>
                  <span className="font-medium">{subcat.name_id}</span>
                  {parentCategory ? (
                    <span className="ml-2 text-sm text-gray-500">(Category: {parentCategory.name_id})</span>
                  ) : (
                    <span className="ml-2 text-sm text-red-500">(Category ID: {subcat.categoryId} - Not Found)</span>
                  )}
                  <span className="ml-2 text-xs text-gray-400">(EN: {subcat.name_en})</span>
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
      <SubcategoryModal
        open={isSubcategoryModalOpen}
        onOpenChange={setIsSubcategoryModalOpen}
        formData={subcategoryFormData}
        onFormChange={handleSubcategoryFormChange}
        onCategoryChange={handleSubcategoryCategoryChange}
        categories={categories}
        isLoading={isLoading}
        error={error}
        editingSubcategory={editingSubcategory}
        onSave={handleSaveSubcategory}
      />
    </div>
  );
};

export default SubcategoriesSection;
