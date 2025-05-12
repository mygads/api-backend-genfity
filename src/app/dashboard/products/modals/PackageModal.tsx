import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { PackageFormData, Category, Subcategory, PackageFeatureFormData, Package } from '@/types/product-dashboard';

interface PackageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: PackageFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCategoryChange: (categoryId: string) => void;
  onSubcategoryChange: (subcategoryId: string) => void;
  categories: Category[];
  subcategories: Subcategory[];
  filteredSubcategories: Subcategory[];
  imagePreview: string | null;
  editingPackage: Package | null;
  onImageFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddFeature: () => void;
  onFeatureChange: (index: number, field: keyof PackageFeatureFormData, value: string | boolean) => void;
  onRemoveFeature: (index: number) => void;
  isLoading: boolean;
  error: string | null;
  onSave: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({
  open,
  onOpenChange,
  formData,
  onFormChange,
  onCategoryChange,
  onSubcategoryChange,
  categories,
  subcategories,
  filteredSubcategories,
  imagePreview,
  editingPackage,
  onImageFileChange,
  onAddFeature,
  onFeatureChange,
  onRemoveFeature,
  isLoading,
  error,
  onSave,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>{editingPackage ? 'Edit Package' : 'Create New Package'}</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2">
        {/* Name (EN) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageNameEn" className="text-left">Name (EN)</Label>
          <Input id="packageNameEn" name="name_en" value={formData.name_en} onChange={onFormChange} className="col-span-3" placeholder="e.g., Basic" />
        </div>
        {/* Name (ID) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageNameId" className="text-left">Name (ID)</Label>
          <Input id="packageNameId" name="name_id" value={formData.name_id} onChange={onFormChange} className="col-span-3" placeholder="Contoh: Paket Dasar" />
        </div>
        {/* Description (EN) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageDescriptionEn" className="text-left">Description (EN)</Label>
          <Input id="packageDescriptionEn" name="description_en" value={formData.description_en} onChange={onFormChange} className="col-span-3" placeholder="e.g., Basic package" />
        </div>
        {/* Description (ID) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageDescriptionId" className="text-left">Description (ID)</Label>
          <Input id="packageDescriptionId" name="description_id" value={formData.description_id} onChange={onFormChange} className="col-span-3" placeholder="Contoh: Paket Dasar" />
        </div>
        {/* Price IDR */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packagePriceIdr" className="text-left">Price (IDR)</Label>
          <Input id="packagePriceIdr" name="price_idr" type="number" value={formData.price_idr} onChange={onFormChange} className="col-span-3" placeholder="e.g., 100000" />
        </div>
        {/* Price USD */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packagePriceUsd" className="text-left">Price (USD)</Label>
          <Input id="packagePriceUsd" name="price_usd" type="number" value={formData.price_usd} onChange={onFormChange} className="col-span-3" placeholder="e.g., 10" />
        </div>
        {/* Duration (days) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageDuration" className="text-left">Duration (days, optional)</Label>
          <Input id="packageDuration" name="duration" type="number" min="1" value={formData.duration || ''} onChange={onFormChange} className="col-span-3" placeholder="e.g., 30" />
        </div>
        {/* Category */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageCategoryId" className="text-left">Category</Label>
          <Select value={formData.categoryId} onValueChange={onCategoryChange} disabled={categories.length === 0}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder={categories.length === 0 ? "No categories available" : "Select a category"} />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (<SelectItem key={category.id} value={category.id}>{category.name_id}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
        {/* Subcategory */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="packageSubcategoryId" className="text-right">Subcategory</Label>
          <Select value={formData.subcategoryId} onValueChange={onSubcategoryChange} disabled={filteredSubcategories.length === 0}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder={filteredSubcategories.length === 0 ? "No subcategories available" : "Select a subcategory"} />
            </SelectTrigger>
            <SelectContent>
              {filteredSubcategories.map(subcat => (<SelectItem key={subcat.id} value={subcat.id}>{subcat.name_id}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
        {/* Image */}
        <div>
          <Label htmlFor="pkg-image" className="block mb-1">Image</Label>
          <Input id="pkg-image" type="file" accept="image/*" onChange={onImageFileChange} className="w-full" />
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
          <Input type="checkbox" id="pkg-popular" name="popular" checked={formData.popular} onChange={onFormChange} className="h-4 w-4" />
          <Label htmlFor="pkg-popular" className="text-sm">Popular</Label>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="pkg-bgColor" className="mr-2">BG Color</Label>
          <Input id="pkg-bgColor" name="bgColor" type="color" value={formData.bgColor || '#FFFFFF'} onChange={onFormChange} className="h-8 w-14 p-1" />
          <Input id="pkg-bgColor-text" name="bgColor" type="text" value={formData.bgColor || '#FFFFFF'} onChange={onFormChange} className="w-24" placeholder="#FFFFFF" />
        </div>
        {/* Features Section */}
        <div className="grid gap-2">
          <Label>Features</Label>
          {formData.features.map((feature, idx) => (
            <div key={feature.id || idx} className="flex gap-2 items-center">
              <Input
                name="name_en"
                value={feature.name_en}
                onChange={e => onFeatureChange(idx, 'name_en', e.target.value)}
                className="w-1/4"
                placeholder="Feature (EN)"
              />
              <Input
                name="name_id"
                value={feature.name_id}
                onChange={e => onFeatureChange(idx, 'name_id', e.target.value)}
                className="w-1/4"
                placeholder="Feature (ID)"
              />
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={feature.included}
                  onChange={e => onFeatureChange(idx, 'included', e.target.checked)}
                />
                Included
              </label>
              <Button type="button" variant="destructive" size="sm" onClick={() => onRemoveFeature(idx)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={onAddFeature} className="mt-2">Add Feature</Button>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm px-4 pb-2">{error}</p>}
      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button type="button" variant="outline" onClick={() => {}}>Cancel</Button>
        </DialogClose>
        <Button
          type="button"
          onClick={onSave}
          disabled={isLoading || !formData.name_en.trim() || !formData.name_id.trim() || !formData.categoryId || !formData.subcategoryId || isNaN(parseFloat(formData.price_idr)) || parseFloat(formData.price_idr) <= 0 || isNaN(parseFloat(formData.price_usd)) || parseFloat(formData.price_usd) <= 0}
        >
          {isLoading ? (editingPackage ? 'Saving...' : 'Creating...') : (editingPackage ? 'Save Changes' : 'Create Package')}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default PackageModal;
