import React, { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import type { CategoryFormData, Category } from '@/types/product-dashboard';

interface CategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: CategoryFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error: string | null;
  editingCategory: Category | null;
  onSave: () => void;
  onImageUpload: (file: File) => Promise<void>;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  open,
  onOpenChange,
  formData,
  onFormChange,
  isLoading,
  error,
  editingCategory,
  onSave,
  onImageUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 4MB for server upload)
    if (file.size > 4 * 1024 * 1024) {
      alert('File size must be less than 4MB');
      return;
    }

    setUploading(true);
    try {
      await onImageUpload(file);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeImage = () => {
    onFormChange({ target: { name: 'icon', value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{editingCategory ? 'Edit Category' : 'Create New Category'}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Name (EN) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="categoryNameEn" className="text-left">Name (EN)</Label>
          <Input id="categoryNameEn" name="name_en" value={formData.name_en} onChange={onFormChange} className="col-span-3" placeholder="e.g., Food" />
        </div>
        {/* Name (ID) */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="categoryNameId" className="text-left">Name (ID)</Label>
          <Input id="categoryNameId" name="name_id" value={formData.name_id} onChange={onFormChange} className="col-span-3" placeholder="Contoh: Makanan" />
        </div>        {/* Icon Upload */}
        <div className="grid grid-cols-4 items-start gap-4">
          <Label className="text-left">Icon</Label>
          <div className="col-span-3 space-y-2">
            {formData.icon ? (
              <div className="relative inline-block">
                <Image 
                  src={formData.icon} 
                  alt="Category icon" 
                  width={64} 
                  height={64} 
                  className="rounded border object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                  onClick={removeImage}
                  disabled={uploading}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading || isLoading}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  {uploading ? 'Uploading...' : 'Upload Icon'}
                </Button>
                <span className="text-sm text-gray-500">Max 4MB, PNG/JPG/WEBP</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {error && <p className="text-sm text-red-500 px-4">Error: {error}</p>}
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>        <Button
          type="button"
          onClick={onSave}
          disabled={isLoading || uploading || !formData.name_en.trim() || !formData.name_id.trim() || !formData.icon}
        >
          {isLoading ? (editingCategory ? 'Saving...' : 'Creating...') : (editingCategory ? 'Save Changes' : 'Create Category')}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
};

export default CategoryModal;
