"use client";
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code'; // Import the new library

export default function HomePage() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, [qrCode]); // Tambahkan qrCode sebagai dependensi agar tidak memicu fetch jika tidak berubah

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>WhatsApp QR Code</h1>
      {isLoading ? (
        <p>Memuat QR Code...</p>
      ) : error ? (
         <p style={{ color: 'red' }}>{error}</p>
      ) : qrCode ? (
        <div style={{ background: 'white', padding: '16px' }}> {/* Added white background for QR code visibility */}
          <QRCode value={qrCode} size={256} /> {/* Removed level prop as it might not be standard */}
          <p>Scan kode ini dengan aplikasi WhatsApp Anda.</p>
          <p style={{ fontSize: 'small', color: 'gray' }}>Terakhir diperbarui: {lastUpdated}</p>
        </div>
      ) : (
        <p>Menunggu QR Code dari server... Pastikan sesi WhatsApp dimulai.</p>
      )}
    </div>
  );
}