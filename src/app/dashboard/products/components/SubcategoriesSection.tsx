import React from 'react';
import { Button } from '@/components/ui/button';
import { Subcategory, Category } from '@/types/product-dashboard';
import { PlusCircle } from 'lucide-react';

interface SubcategoriesSectionProps {
  subcategories: any[];
  categories: any[];
  isLoading: boolean;
  error: string | null;
  openCreateSubcategoryModal: () => void;
  openEditSubcategoryModal: (subcategory: any) => void;
  handleDeleteSubcategory: (subcategoryId: string) => void;
}

const SubcategoriesSection: React.FC<SubcategoriesSectionProps> = ({ subcategories, categories, isLoading, error, openCreateSubcategoryModal, openEditSubcategoryModal, handleDeleteSubcategory }) => {
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
            {subcategories.map((subcat: any) => {
                const parentCategory = categories.find((c: any) => c.id === subcat.categoryId);
                return (
                <li key={subcat.id} className="p-3 border rounded-md shadow-sm flex justify-between items-center">
                    <div>
                    <span className="font-medium">{subcat.name}</span>
                    {parentCategory ? (
                        <span className="ml-2 text-sm text-gray-500">(Category: {parentCategory.name})</span>
                    ) : (
                        <span className="ml-2 text-sm text-red-500">(Category ID: {subcat.categoryId} - Not Found)</span>
                    )}
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

export default SubcategoriesSection;
