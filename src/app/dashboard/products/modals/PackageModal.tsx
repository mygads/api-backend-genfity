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
        <div>
          <Label htmlFor="pkg-name" className="block mb-1">Name</Label>
          <Input id="pkg-name" name="name" value={formData.name} onChange={onFormChange} placeholder="e.g., Starter Pack" />
        </div>
        <div>
          <Label htmlFor="pkg-description" className="block mb-1">Description</Label>
          <textarea id="pkg-description" name="description" value={formData.description || ''} onChange={onFormChange} className="border rounded-md p-2 text-sm min-h-[60px] w-full" placeholder="Optional package description" />
        </div>
        <div>
          <Label htmlFor="pkg-price" className="block mb-1">Price ($)</Label>
          <Input id="pkg-price" name="price" type="number" value={formData.price} onChange={onFormChange} placeholder="e.g., 49.99" />
        </div>
        <div>
          <Label htmlFor="pkg-category" className="block mb-1">Category</Label>
          <Select value={formData.categoryId} onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="pkg-subcategory" className="block mb-1">Subcategory</Label>
          <Select value={formData.subcategoryId} onValueChange={onSubcategoryChange} disabled={!formData.categoryId || filteredSubcategories.length === 0}>
            <SelectTrigger>
              <SelectValue placeholder={!formData.categoryId ? "Select category first" : (filteredSubcategories.length === 0 ? "No subcategories available" : "Select a subcategory")} />
            </SelectTrigger>
            <SelectContent>
              {filteredSubcategories.map(subcat => (
                <SelectItem key={subcat.id} value={subcat.id}>{subcat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
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
        <div>
          <Label className="text-base font-medium">Features</Label>
          {formData.features.map((feature, index) => (
            <div key={feature.id || index} className="flex gap-2 items-center mt-2 p-2 border rounded-md">
              <Input
                type="text"
                placeholder="Feature name"
                value={feature.name}
                onChange={(e) => onFeatureChange(index, 'name', e.target.value)}
                className="text-sm flex-1"
              />
              <Input
                type="checkbox"
                checked={feature.included}
                onChange={(e) => onFeatureChange(index, 'included', e.target.checked)}
                className="h-4 w-4 mr-2"
                id={`feature-included-${index}`}
              />
              <Label htmlFor={`feature-included-${index}`} className="text-sm">Included</Label>
              <Button type="button" variant="ghost" size="sm" onClick={() => onRemoveFeature(index)} className="text-red-500">✕</Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={onAddFeature} className="mt-3">
            Add Feature
          </Button>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm px-4 pb-2">{error}</p>}
      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button type="button" variant="outline" onClick={() => {}}>Cancel</Button>
        </DialogClose>
        <Button type="button" onClick={onSave} disabled={isLoading || !formData.categoryId || !formData.subcategoryId}>
          {isLoading ? (editingPackage ? 'Saving...' : 'Creating...') : (editingPackage ? 'Save Changes' : 'Create Package')}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default PackageModal;
