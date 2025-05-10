import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const featureSchema = z.object({
  id: z.string().cuid().optional(), // Optional for new features during update
  name: z.string().min(1, "Feature name is required"),
  included: z.boolean(),
});

// Schema for updating a package, all fields are optional
const packageUpdateSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
  price: z.number().positive("Price must be a positive number").optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  categoryId: z.string().cuid("Invalid Category ID").optional(),
  subcategoryId: z.string().cuid("Invalid Subcategory ID").optional(),
  popular: z.boolean().optional(),
  bgColor: z.string().optional().nullable(), // Allow null to remove bgColor
  features: z.array(featureSchema).optional(), // Features can be entirely replaced or omitted
});

export async function GET(
  request: Request,
  { params }: { params: { packageId: string } }
) {
  try {
    const { packageId } = params;
    if (!packageId) {
      return new NextResponse(JSON.stringify({ message: "Package ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const pkg = await prisma.package.findUnique({
      where: { id: packageId },
      include: {
        category: true,
        subcategory: true,
        features: true,
      },
    });

    if (!pkg) {
      return new NextResponse(JSON.stringify({ message: "Package not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error("[PACKAGE_GET_BY_ID]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { packageId: string } }
) {
  try {
    const { packageId } = params;
    if (!packageId) {
      return new NextResponse(JSON.stringify({ message: "Package ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    const validation = packageUpdateSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { features, ...packageUpdateData } = validation.data;

    if (Object.keys(packageUpdateData).length === 0 && !features) {
        return new NextResponse(JSON.stringify({ message: "No fields to update" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const currentPackage = await prisma.package.findUnique({
        where: { id: packageId }
    });

    if (!currentPackage) {
        return new NextResponse(JSON.stringify({ message: "Package not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    // Validate category and subcategory if they are being changed
    if (packageUpdateData.categoryId || packageUpdateData.subcategoryId) {
        const targetCategoryId = packageUpdateData.categoryId || currentPackage.categoryId;
        const targetSubcategoryId = packageUpdateData.subcategoryId || currentPackage.subcategoryId;

        const subcategory = await prisma.subcategory.findUnique({
            where: { id: targetSubcategoryId },
        });

        if (!subcategory || subcategory.categoryId !== targetCategoryId) {
            return new NextResponse(
                JSON.stringify({ message: "Subcategory does not belong to the specified category or does not exist" }),
                {
                status: 400,
                headers: { "Content-Type": "application/json" },
                }
            );
        }
    }

    if (packageUpdateData.name && packageUpdateData.name !== currentPackage.name) {
        const existingPackageWithName = await prisma.package.findFirst({
            where: {
                name: packageUpdateData.name,
                id: { not: packageId },
            },
        });
        if (existingPackageWithName) {
            return new NextResponse(
                JSON.stringify({ message: "Another package with this name already exists" }),
                {
                status: 409,
                headers: { "Content-Type": "application/json" },
                }
            );
        }
    }

    const updatedPackage = await prisma.$transaction(async (tx) => {
      const result = await tx.package.update({
        where: { id: packageId },
        data: packageUpdateData,
      });

      if (features !== undefined) {
        // Delete existing features and create new ones
        await tx.feature.deleteMany({
          where: { packageId: packageId },
        });
        if (features.length > 0) {
            await tx.feature.createMany({
                data: features.map((feature) => ({
                    name: feature.name,
                    included: feature.included,
                    packageId: packageId, // Ensure packageId is linked
                })),
            });
        }
      }
      return result;
    });

    const resultWithIncludes = await prisma.package.findUnique({
        where: { id: updatedPackage.id },
        include: { features: true, category: true, subcategory: true }
    });

    return NextResponse.json(resultWithIncludes);
  } catch (error) {
    console.error("[PACKAGE_PUT]", error);
    if ((error as any).code === 'P2025') { 
        return new NextResponse(JSON.stringify({ message: "Package not found" }), {
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
  { params }: { params: { packageId: string } }
) {
  try {
    const { packageId } = params;
    if (!packageId) {
      return new NextResponse(JSON.stringify({ message: "Package ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Features are deleted by cascade due to schema definition (onDelete: Cascade)
    await prisma.package.delete({
      where: { id: packageId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[PACKAGE_DELETE]", error);
    if ((error as any).code === 'P2025') { 
        return new NextResponse(JSON.stringify({ message: "Package not found" }), {
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
