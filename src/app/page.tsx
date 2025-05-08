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

    if (status === 'authenticated') {
      // Fungsi untuk mengambil QR code
      const fetchQrCode = async () => {
        try {
          // Panggil API route GET yang kita buat
          const response = await fetch('/api/webhook'); // Menggunakan endpoint GET
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();

          // Hanya update jika QR code berubah
          if (data.qrCode !== qrCode) {
              setQrCode(data.qrCode);
              setLastUpdated(new Date().toLocaleTimeString());
          }
          setError(null); // Hapus error jika berhasil
        } catch (e) {
          console.error("Failed to fetch QR code:", e);
          setError("Gagal mengambil QR code. Coba lagi nanti.");
          // Jangan hapus QR lama jika fetch gagal
        } finally {
            setIsLoading(false); // Selesai loading setelah fetch pertama
        }
      };

      // Panggil pertama kali saat komponen dimuat
      fetchQrCode();

      // Set interval untuk polling setiap beberapa detik (misal, 5 detik)
      const intervalId = setInterval(fetchQrCode, 5000);

      // Cleanup interval saat komponen di-unmount
      return () => clearInterval(intervalId);
    }
  }, [status, router, qrCode]); // qrCode tetap di dependencies jika fetchQrCode bergantung padanya

  if (status === 'loading') {
    return <p>Loading session...</p>;
  }

  // Tidak perlu lagi blok unauthenticated di sini karena useEffect sudah menangani redirect
  // if (status === 'unauthenticated') {
  //   return <p>Redirecting to sign in...</p>; 
  // }

  // Hanya render konten jika authenticated, atau jika status masih loading (ditangani di atas)
  if (status === 'authenticated') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <span>Hi, {session.user?.name || session.user?.email || session.user?.phone}!</span>
          <button 
            onClick={handleLogout} 
            style={{ marginLeft: '10px', padding: '8px 12px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </div>
        <h1>WhatsApp QR Code</h1>
        {isLoading ? (
          <p>Memuat QR Code...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : qrCode ? (
          <div style={{ background: 'white', padding: '16px' }}>
            <QRCode value={qrCode} size={256} />
            <p>Scan kode ini dengan aplikasi WhatsApp Anda.</p>
            <p style={{ fontSize: 'small', color: 'gray' }}>Terakhir diperbarui: {lastUpdated}</p>
          </div>
        ) : (
          <p>Menunggu QR Code dari server... Pastikan sesi WhatsApp dimulai.</p>
        )}
      </div>
    );
  }
}