import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SubcategoryFormData, Category, Subcategory } from '@/types/product-dashboard';

interface SubcategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: SubcategoryFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (categoryId: string) => void;
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  editingSubcategory: Subcategory | null;
  onSave: () => void;
}

const SubcategoryModal: React.FC<SubcategoryModalProps> = ({
  open,
  onOpenChange,
  formData,
  onFormChange,
  onCategoryChange,
  categories,
  isLoading,
  error,
  editingSubcategory,
  onSave,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{editingSubcategory ? 'Edit Subcategory' : 'Create New Subcategory'}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="subcategoryName" className="text-right">Name</Label>
          <Input id="subcategoryName" name="name" value={formData.name} onChange={onFormChange} className="col-span-3" placeholder="e.g., Menswear, Electronics" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="categoryId" className="text-right">Category</Label>
          <Select value={formData.categoryId} onValueChange={onCategoryChange}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {error && <p className="text-sm text-red-500 px-1 py-2">{error}</p>}
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline" onClick={() => {}}>Cancel</Button>
        </DialogClose>
        <Button 
          type="button" 
          onClick={onSave} 
          disabled={isLoading || !formData.name.trim() || !formData.categoryId}
        >
          {isLoading ? (editingSubcategory ? 'Saving...' : 'Creating...') : (editingSubcategory ? 'Save Changes' : 'Create Subcategory')}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default SubcategoryModal;
