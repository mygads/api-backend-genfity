import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Corrected import

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subcategories: true,
        addons: true,
        packages: true,
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    // It's good practice to not expose raw error messages to the client in production
    return NextResponse.json({ message: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, icon } = body;

    if (!name) {
      return NextResponse.json({ message: 'Category name is required' }, { status: 400 });
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        icon,
      },
    });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    // It's good practice to not expose raw error messages to the client in production
    return NextResponse.json({ message: 'Failed to create category' }, { status: 500 });
  }
}
