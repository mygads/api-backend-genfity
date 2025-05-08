import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth'; // Updated import path
import { prisma } from '@/lib/prisma';

export async function DELETE() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Tidak terautentikasi' }, { status: 401 });
  }

  try {
    const userId = session.user.id;

    // Opsional: Tambahkan logika tambahan di sini jika diperlukan sebelum menghapus
    // Misalnya, menghapus data terkait di tabel lain yang tidak otomatis terhapus oleh onDelete: Cascade

    await prisma.user.delete({
      where: { id: userId },
    });
    
    // Tidak perlu signOut di sini karena akan dilakukan di client-side setelah response sukses

    return NextResponse.json({ message: 'Akun berhasil dihapus secara permanen' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Delete account error:', error);
    // Periksa apakah error disebabkan oleh record tidak ditemukan (misalnya, jika pengguna sudah terhapus)
    if (typeof error === 'object' && error !== null && 'code' in error && (error as { code?: string }).code === 'P2025') { // Kode error Prisma untuk record not found
        return NextResponse.json({ message: 'Pengguna tidak ditemukan atau sudah dihapus' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Terjadi kesalahan internal saat menghapus akun' }, { status: 500 });
  }
}
