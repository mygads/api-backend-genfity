import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface PackagesSectionProps {
  packages: any[];
  categories: any[];
  subcategories: any[];
  isLoading: boolean;
  error: string | null;
  openCreatePackageModal: () => void;
  openEditPackageModal: (pkg: any) => void;
  handleDeletePackage: (packageId: string) => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ packages, categories, subcategories, isLoading, error, openCreatePackageModal, openEditPackageModal, handleDeletePackage }) => {
    return (
        <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Manage Packages</h2>
            <Button 
            onClick={openCreatePackageModal} 
            disabled={categories.length === 0 || subcategories.length === 0}
            >
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
            {packages.map((pkg: any) => {
                const categoryName = categories.find((c: any) => c.id === pkg.categoryId)?.name || 'N/A';
                const subcategoryName = subcategories.find((sc: any) => sc.id === pkg.subcategoryId)?.name || 'N/A';
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

export default PackagesSection;
