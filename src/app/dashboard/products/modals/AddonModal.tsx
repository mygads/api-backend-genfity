import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import type { AddonFormData, Category, Addon } from '@/types/product-dashboard';

interface AddonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: AddonFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCategoryChange: (categoryId: string) => void;
  categories: Category[];
  imagePreview: string | null;
  editingAddon: Addon | null;
  onImageFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  isLoading: boolean;
  error: string | null;
}

const AddonModal: React.FC<AddonModalProps> = ({
  open,
  onOpenChange,
  formData,
  onFormChange,
  onCategoryChange,
  categories,
  imagePreview,
  editingAddon,
  onImageFileChange,
  onSave,
  isLoading,
  error,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>{editingAddon ? 'Edit Addon' : 'Create New Addon'}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Name */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="addonName" className="text-right">Name</Label>
          <Input id="addonName" name="name" value={formData.name} onChange={onFormChange} className="col-span-3" placeholder="e.g., Extra Cheese" />
        </div>
        {/* Description */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="addonDescription" className="text-right">Description</Label>
          <Input id="addonDescription" name="description" value={formData.description || ''} onChange={onFormChange} className="col-span-3" placeholder="(Optional)" />
        </div>
        {/* Price */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="addonPrice" className="text-right">Price</Label>
          <Input id="addonPrice" name="price" type="number" value={formData.price} onChange={onFormChange} className="col-span-3" placeholder="e.g., 2.50" />
        </div>
        {/* Category */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="addonCategoryId" className="text-right">Category</Label>
          <Select value={formData.categoryId} onValueChange={onCategoryChange} disabled={categories.length === 0}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder={categories.length === 0 ? "No categories available" : "Select a category"} />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (<SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
        {/* Image Input and Preview */}
        <div className="grid grid-cols-4 items-start gap-4">
          <Label htmlFor="addonImage" className="text-right pt-2">Image</Label>
          <div className="col-span-3 space-y-2">
            <Input id="addonImage" name="imageFile" type="file" onChange={onImageFileChange} className="w-full" accept="image/jpeg, image/png, image/gif, image/webp" />
            {imagePreview && (
              <div className="mt-2">
                <Image src={imagePreview} alt="Preview" width={100} height={100} className="object-cover rounded" />
              </div>
            )}
            {!imagePreview && editingAddon?.image && (
              <div className="mt-2">
                <Image src={editingAddon.image} alt="Current image" width={100} height={100} className="object-cover rounded" />
                <p className="text-xs text-gray-500 mt-1">Current image</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {error && <p className="text-sm text-red-500 px-1 py-2">Error: {error}</p>}
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>
        <Button 
          type="button" 
          onClick={onSave} 
          disabled={isLoading || !formData.name.trim() || !formData.categoryId || isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0}
        >
          {isLoading ? (editingAddon ? 'Saving...' : 'Creating...') : (editingAddon ? 'Save Changes' : 'Create Addon')}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default AddonModal;
