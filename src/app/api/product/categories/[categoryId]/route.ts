import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const categorySchema = z.object({
  name_en: z.string().min(1, "English name is required"),
  name_id: z.string().min(1, "Indonesian name is required"),
  icon: z.string().url("Icon must be a valid URL"),
});

export async function GET(
  request: Request,
  { params: paramsPromise }: { params: Promise<{ categoryId: string }> }
) {
  try {
    const params = await paramsPromise;
    const { categoryId } = params;
    if (!categoryId) {
      return new NextResponse(JSON.stringify({ message: "Category ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const category = await prisma.category.findUnique({
      where: { id: categoryId },
      include: {
        subcategories: true,
        addons: true,
        packages: true,
      },
    });

    if (!category) {
      return new NextResponse(JSON.stringify({ message: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("[CATEGORY_GET_BY_ID]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(
  request: Request,
  { params: paramsPromise }: { params: Promise<{ categoryId: string }> }
) {
  try {
    const params = await paramsPromise;
    const { categoryId } = params;
    if (!categoryId) {
      return new NextResponse(JSON.stringify({ message: "Category ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    const validation = categorySchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }    const { name_en, name_id, icon } = validation.data;

    const existingCategoryWithName = await prisma.category.findFirst({
      where: {
        name_en: name_en,
        id: { not: categoryId },
      },
    });

    if (existingCategoryWithName) {
      return new NextResponse(JSON.stringify({ message: "Category name already exists" }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }    const updatedCategory = await prisma.category.update({
      where: { id: categoryId },
      data: {
        name_en: name_en,
        name_id: name_id,
        icon,
      },
    });

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error("[CATEGORY_PUT]", error);
    if ((error as any).code === 'P2025') { // Prisma error code for record not found
        return new NextResponse(JSON.stringify({ message: "Category not found" }), {
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
  { params: paramsPromise }: { params: Promise<{ categoryId: string }> }
) {
  try {
    const params = await paramsPromise;
    const { categoryId } = params;
    if (!categoryId) {
      return new NextResponse(JSON.stringify({ message: "Category ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if category is being used by subcategories, packages, or addons
    const relatedItems = await prisma.category.findUnique({
        where: { id: categoryId },
        include: {
            subcategories: { take: 1 },
            packages: { take: 1 },
            addons: { take: 1 },
        }
    });

    if (relatedItems?.subcategories?.length || relatedItems?.packages?.length || relatedItems?.addons?.length) {
        let message = "Cannot delete category. It is currently associated with:";
        if (relatedItems.subcategories.length) message += " subcategories";
        if (relatedItems.packages.length) message += (relatedItems.subcategories.length ? "," : "") + " packages";
        if (relatedItems.addons.length) message += (relatedItems.subcategories.length || relatedItems.packages.length ? "," : "") + " addons";
        message += ". Please remove associations before deleting.";
        return new NextResponse(JSON.stringify({ message }), {
            status: 409, // Conflict
            headers: { "Content-Type": "application/json" },
        });
    }

    await prisma.category.delete({
      where: { id: categoryId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[CATEGORY_DELETE]", error);
    if ((error as any).code === 'P2025') { // Prisma error code for record not found
        return new NextResponse(JSON.stringify({ message: "Category not found" }), {
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
