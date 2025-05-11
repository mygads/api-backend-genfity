'use client';

import React, { useState } from 'react';
import CategoriesSection from './components/CategoriesSection';
import SubcategoriesSection from './components/SubcategoriesSection';
import AddonsSection from './components/AddonsSection';
import PackagesSection from './components/PackagesSection';
import type { ProductEntityType } from '@/types/product-dashboard';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<ProductEntityType>('categories');

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
        {activeTab === 'categories' && <CategoriesSection />}
        {activeTab === 'subcategories' && <SubcategoriesSection />}
        {activeTab === 'addons' && <AddonsSection />}
        {activeTab === 'packages' && <PackagesSection />}
      </div>
    </div>
  );
}
