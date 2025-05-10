"use client";
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useSession, signOut } from 'next-auth/react'; // signOut ditambahkan
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/auth/signin' }); // Arahkan ke signin setelah logout
  };

  useEffect(() => {
    if (status === 'loading') {
      // Jangan lakukan apa-apa saat sesi masih loading
      // Biarkan UI menampilkan "Loading session..."
      return;
    }
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }

  }, [status, router, qrCode]); // qrCode tetap di dependencies jika fetchQrCode bergantung padanya

  if (status === 'loading') {
    return <p>Loading session...</p>;
  }
}