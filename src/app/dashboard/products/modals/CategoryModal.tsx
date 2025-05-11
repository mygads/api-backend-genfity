import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{editingCategory ? 'Edit Category' : 'Create New Category'}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={onFormChange} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="icon" className="text-left">Icon (Optional)</Label>
          <Input id="icon" name="icon" value={formData.icon || ''} onChange={onFormChange} className="col-span-3" placeholder="e.g., svg, font-awesome class, or URL" />
        </div>
      </div>
      {error && <p className="text-sm text-red-500 px-4">Error: {error}</p>}
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="button" onClick={onSave} disabled={isLoading || !formData.name.trim()}>
          {isLoading ? (editingCategory ? 'Saving...' : 'Creating...') : (editingCategory ? 'Save Changes' : 'Create Category')}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default CategoryModal;
