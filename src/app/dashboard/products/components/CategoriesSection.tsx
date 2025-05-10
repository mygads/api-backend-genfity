import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CategoriesSectionProps {
  categories: any[];
  isLoading: boolean;
  error: string | null;
  openCreateCategoryModal: () => void;
  openEditCategoryModal: (category: any) => void;
  handleDeleteCategory: (categoryId: string) => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories, isLoading, error, openCreateCategoryModal, openEditCategoryModal, handleDeleteCategory }) => {
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
                        className="object-contain rounded-md bg-gray-100 dark:bg-gray-700"
                        onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        }}
                    />
                    ) : cat.icon && cat.icon.length < 30 && !cat.icon.includes('<svg') ? (
                    <span className="w-[40px] h-[40px] flex items-center justify-center text-gray-600 dark:text-gray-300 text-xl rounded-md bg-gray-200 dark:bg-gray-700">
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
};

export default CategoriesSection;
