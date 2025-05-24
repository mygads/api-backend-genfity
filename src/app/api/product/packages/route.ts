import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const featureSchema = z.object({
  name_en: z.string().min(1, "Feature name (EN) is required"),
  name_id: z.string().min(1, "Feature name (ID) is required"),
  included: z.boolean(),
});

const packageSchema = z.object({
  name_en: z.string().min(1, "Name (EN) is required"),
  name_id: z.string().min(1, "Name (ID) is required"),
  description_en: z.string().min(1, "Description (EN) is required"),
  description_id: z.string().min(1, "Description (ID) is required"),
  price_idr: z.number().positive("Price IDR must be a positive number"),
  price_usd: z.number().positive("Price USD must be a positive number"),
  image: z.string().url("Image must be a valid URL"),
  categoryId: z.string().cuid("Invalid Category ID"),
  subcategoryId: z.string().cuid("Invalid Subcategory ID"),
  popular: z.boolean().optional(),
  bgColor: z.string().optional(),
  features: z.array(featureSchema).min(1, "At least one feature is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = packageSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { features, ...packageData } = validation.data;

    // Check if category and subcategory exist and are related
    const subcategory = await prisma.subcategory.findUnique({
      where: { id: packageData.subcategoryId },
      include: { category: true },
    });
    if (!subcategory) {
      return new NextResponse(JSON.stringify({ message: "Subcategory not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (subcategory.categoryId !== packageData.categoryId) {
      return new NextResponse(
        JSON.stringify({ message: "Subcategory does not belong to the specified category" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if package name is unique (EN/ID)
    const existingPackage = await prisma.package.findFirst({
      where: {
        OR: [
          { name_en: packageData.name_en },
          { name_id: packageData.name_id },
        ],
      },
    });
    if (existingPackage) {
      return new NextResponse(
        JSON.stringify({ message: "Package with this name already exists" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }    const newPackage = await prisma.$transaction(async (tx) => {
      const createdPackage = await tx.package.create({
        data: packageData,
      });
      if (features && features.length > 0) {
        await tx.feature.createMany({
          data: features.map((feature) => ({
            ...feature,
            packageId: createdPackage.id,
          })),
        });
      }
      return createdPackage;
    });

    // Refetch the package with its features to return in the response
    const result = await prisma.package.findUnique({
      where: { id: newPackage.id },
      include: { features: true, category: true, subcategory: true },
    });
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("[PACKAGES_POST]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");
    const subcategoryId = searchParams.get("subcategoryId");

    const whereClause: any = {};
    if (categoryId) whereClause.categoryId = categoryId;
    if (subcategoryId) whereClause.subcategoryId = subcategoryId;

    const packages = await prisma.package.findMany({
      where: whereClause,
      include: {
        category: true,
        subcategory: true,
        features: true,
      },
      orderBy: {
        name_id: 'asc',
      },
    });
    return NextResponse.json(packages);
  } catch (error) {
    console.error("[PACKAGES_GET]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
