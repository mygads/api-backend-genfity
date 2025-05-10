import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Addon, Category } from '@/types/product-dashboard';

interface AddonsSectionProps {
  addons: any[];
  categories: any[];
  isLoading: boolean;
  error: string | null;
  openCreateAddonModal: () => void;
  openEditAddonModal: (addon: any) => void;
  handleDeleteAddon: (addonId: string) => void;
}

const AddonsSection: React.FC<AddonsSectionProps> = ({ addons, categories, isLoading, error, openCreateAddonModal, openEditAddonModal, handleDeleteAddon }) => {
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
                const categoryName = categories.find((c: any) => c.id === addon.categoryId)?.name || 'N/A';
                return (
                <li key={addon.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800/80 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                    {addon.image && (
                        <Image src={addon.image} alt={addon.name} width={40} height={40} className="object-cover rounded bg-gray-100 dark:bg-gray-700" />
                    )}
                    <div>
                        <div className="font-medium text-gray-700 dark:text-gray-200">{addon.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{categoryName}</div>
                        {addon.description && <div className="text-xs text-gray-400 dark:text-gray-500">{addon.description}</div>}
                    </div>
                    </div>
                    <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                        {typeof addon.price === 'number' ? `$${addon.price.toFixed(2)}` : `$${parseFloat(addon.price).toFixed(2)}`}
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
        </div>
    );
};

export default AddonsSection;
