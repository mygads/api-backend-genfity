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
                {/* Name (EN) */}
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonNameEn" className="text-left">Name (EN)</Label>
                <Input id="addonNameEn" name="name_en" value={formData.name_en} onChange={onFormChange} className="col-span-3" placeholder="e.g., Extra Cheese" />
                </div>
                {/* Name (ID) */}
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonNameId" className="text-left">Name (ID)</Label>
                <Input id="addonNameId" name="name_id" value={formData.name_id} onChange={onFormChange} className="col-span-3" placeholder="Contoh: Keju Tambahan" />
                </div>
                {/* Description (EN) */}
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonDescriptionEn" className="text-left">Description (EN)</Label>
                <Input id="addonDescriptionEn" name="description_en" value={formData.description_en || ''} onChange={onFormChange} className="col-span-3" placeholder="(Optional)" />
                </div>
                {/* Description (ID) */}
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonDescriptionId" className="text-left">Description (ID)</Label>
                <Input id="addonDescriptionId" name="description_id" value={formData.description_id || ''} onChange={onFormChange} className="col-span-3" placeholder="(Opsional)" />
                </div>
                {/* Price IDR */}
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonPriceIdr" className="text-left">Price (IDR)</Label>
                <Input id="addonPriceIdr" name="price_idr" type="number" value={formData.price_idr} onChange={onFormChange} className="col-span-3" placeholder="e.g., 10000" />
                </div>
                {/* Price USD */}                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonPriceUsd" className="text-left">Price (USD)</Label>
                <Input id="addonPriceUsd" name="price_usd" type="number" value={formData.price_usd} onChange={onFormChange} className="col-span-3" placeholder="e.g., 2.50" />
                </div>
                {/* Category */}
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="addonCategoryId" className="text-left">Category</Label>
                <Select value={formData.categoryId} onValueChange={onCategoryChange} disabled={categories.length === 0}>
                    <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={categories.length === 0 ? "No categories available" : "Select a category"} />
                    </SelectTrigger>
                    <SelectContent>
                    {categories.map(category => (<SelectItem key={category.id} value={category.id}>{category.name_id}</SelectItem>))}
                    </SelectContent>
                </Select>
                </div>
                {/* Image Input and Preview */}
                <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="addonImage" className="text-left pt-2">Image</Label>
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
                disabled={isLoading || !formData.name_en.trim() || !formData.name_id.trim() || !formData.categoryId || isNaN(parseFloat(formData.price_idr)) || parseFloat(formData.price_idr) <= 0 || isNaN(parseFloat(formData.price_usd)) || parseFloat(formData.price_usd) <= 0}
                >
                {isLoading ? (editingAddon ? 'Saving...' : 'Creating...') : (editingAddon ? 'Save Changes' : 'Create Addon')}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);

export default AddonModal;
