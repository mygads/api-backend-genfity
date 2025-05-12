import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const subcategorySchema = z.object({
  name: z.string().min(1, "Name is required"), // This will be used for name_en and name_id
  categoryId: z.string().cuid("Invalid Category ID"),
});

export async function GET(
  request: Request,
  context: { params: Promise<{ subcategoryId: string }> }
) {
  try {
    const { subcategoryId } = await context.params;
    if (!subcategoryId) {
      return new NextResponse(JSON.stringify({ message: "Subcategory ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const subcategory = await prisma.subcategory.findUnique({
      where: { id: subcategoryId },
      include: {
        category: true,
        packages: true,
      },
    });

    if (!subcategory) {
      return new NextResponse(JSON.stringify({ message: "Subcategory not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return NextResponse.json(subcategory);
  } catch (error) {
    console.error("[SUBCATEGORY_GET_BY_ID]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ subcategoryId: string }> }
) {
  try {
    const { subcategoryId } = await context.params;
    if (!subcategoryId) {
      return new NextResponse(JSON.stringify({ message: "Subcategory ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    // Allow categoryId to be optional during update, only name is required for update
    const updateSchema = subcategorySchema.partial().extend({
        name: z.string().min(1, "Name is required").optional(),
        categoryId: z.string().cuid("Invalid Category ID").optional(),
    });
    const validation = updateSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, categoryId } = validation.data;

    // Fetch current subcategory to check its current categoryId if not provided
    const currentSubcategory = await prisma.subcategory.findUnique({
        where: { id: subcategoryId },
    });

    if (!currentSubcategory) {
        return new NextResponse(JSON.stringify({ message: "Subcategory not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    const targetCategoryId = categoryId || currentSubcategory.categoryId;

    if (name) {
        const existingSubcategoryWithName = await prisma.subcategory.findFirst({
            where: {
                name_en: name, // Check against name_en
                categoryId: targetCategoryId,
                id: { not: subcategoryId },
            },
        });

        if (existingSubcategoryWithName) {
            return new NextResponse(
                JSON.stringify({ message: "Another subcategory with this name already exists in this category" }),
                {
                status: 409,
                headers: { "Content-Type": "application/json" },
                }
            );
        }
    }
    
    if (categoryId) {
        const categoryExists = await prisma.category.findUnique({ where: { id: categoryId } });
        if (!categoryExists) {
            return new NextResponse(JSON.stringify({ message: "Target category not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
    }

    const updatedSubcategory = await prisma.subcategory.update({
      where: { id: subcategoryId },
      data: {
        name_en: name || undefined, // Update name_en if provided
        name_id: name || undefined, // Update name_id if provided
        categoryId: categoryId || undefined, // only update if provided
      },
    });

    return NextResponse.json(updatedSubcategory);
  } catch (error) {
    console.error("[SUBCATEGORY_PUT]", error);
    if ((error as any).code === 'P2025') { 
        return new NextResponse(JSON.stringify({ message: "Subcategory not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ subcategoryId: string }> }
) {
  try {
    const { subcategoryId } = await context.params;
    if (!subcategoryId) {
      return new NextResponse(JSON.stringify({ message: "Subcategory ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const relatedPackages = await prisma.package.findFirst({
        where: { subcategoryId: subcategoryId }
    });

    if (relatedPackages) {
        return new NextResponse(JSON.stringify({ message: "Cannot delete subcategory. It is currently associated with packages. Please remove associations before deleting." }), {
            status: 409, // Conflict
            headers: { "Content-Type": "application/json" },
        });
    }

    await prisma.subcategory.delete({
      where: { id: subcategoryId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[SUBCATEGORY_DELETE]", error);
    if ((error as any).code === 'P2025') { 
        return new NextResponse(JSON.stringify({ message: "Subcategory not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
