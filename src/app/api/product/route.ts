import { NextResponse } from "next/server";
import { categories, addons, packages } from "@/lib/products";
import type { ProductData } from "@/types/product";

export async function GET() {
  try {
    const productData: ProductData = {
      categories,
      addons,
      packages,
    };
    return NextResponse.json(productData);
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}