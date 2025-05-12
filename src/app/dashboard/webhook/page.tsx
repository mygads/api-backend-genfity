'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Button } from '@/components/ui/button';

export default function WebhookPage() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [message, setMessage] = useState('');

  // State for QR Code
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isLoadingQr, setIsLoadingQr] = useState(true);
  const [qrError, setQrError] = useState<string | null>(null);

  useEffect(() => {
    const currentHost = window.location.origin;
    setWebhookUrl(`${currentHost}/api/dashboard/webhook/USER_SPECIFIC_ID`);
  }, []);

  // useEffect for fetching QR Code
  useEffect(() => {
    const fetchQrCode = async () => {
      setIsLoadingQr(true); 
      try {
        const response = await fetch('/api/webhook'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.qrCode !== qrCode) {
            setQrCode(data.qrCode);
            setLastUpdated(new Date().toLocaleTimeString());
        }
        setQrError(null); 
      } catch (e: any) {
        console.error("Failed to fetch QR code:", e);
        setQrError(e.message || "Gagal mengambil QR code. Coba lagi nanti.");
      } finally {
        setIsLoadingQr(false); 
      }
    };

    fetchQrCode();
    const intervalId = setInterval(fetchQrCode, 5000);
    return () => clearInterval(intervalId);
  }, [qrCode]);

  const handleRegenerateUrl = async () => {
    setMessage('URL Webhook baru sedang dibuat...');
    setTimeout(() => {
      const newId = Math.random().toString(36).substring(7);
      setWebhookUrl(`${window.location.origin}/api/dashboard/webhook/${newId}`);
      setMessage('URL Webhook baru telah dibuat.');
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(webhookUrl)
      .then(() => setMessage('URL Webhook disalin ke clipboard!'))
      .catch(() => setMessage('Gagal menyalin URL.'));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pengaturan Webhook</h1>
      <p className="mb-2">Gunakan URL berikut untuk menerima pesan WhatsApp dari sistem Anda:</p>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={webhookUrl}
          readOnly
          className="input input-bordered w-full max-w-md"
        />
        <button className="btn btn-secondary" onClick={copyToClipboard}>
          Salin
        </button>
      </div>
      <button className="btn btn-primary mb-4" onClick={handleRegenerateUrl}>
        Buat Ulang URL (jika perlu)
      </button>
      {message && <p className="text-sm text-gray-600 mb-4">{message}</p>}
      
      <div className="mt-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Instruksi Penggunaan Webhook URL</h2>
        <p className="mb-1">1. Salin URL webhook di atas.</p>
        <p className="mb-1">2. Masukkan URL ini ke pengaturan webhook di platform/layanan pihak ketiga yang akan mengirim notifikasi.</p>
        <p className="mb-1">3. Pastikan server Anda berjalan dan dapat menerima permintaan POST ke URL ini.</p>
        <p>4. Setiap notifikasi dari layanan tersebut akan diteruskan ke URL ini.</p>
      </div>

      {/* WhatsApp QR Code Section */}
      <div className="mt-8 pt-6 border-t">
        <h1 className="text-2xl font-bold mb-4">Hubungkan WhatsApp Anda</h1>
        {isLoadingQr ? (
          <p>Memuat QR Code...</p>
        ) : qrError ? (
          <p style={{ color: 'red' }}>{qrError}</p>
        ) : qrCode ? (
          <div style={{ background: 'white', padding: '16px', display: 'inline-block', borderRadius: '8px' }}>
            <QRCode value={qrCode} size={256} />
            <p className="mt-2 text-center">Scan kode ini dengan aplikasi WhatsApp Anda.</p>
            {lastUpdated && <p style={{ fontSize: 'small', color: 'gray', textAlign: 'center', marginTop: '8px' }}>Terakhir diperbarui: {lastUpdated}</p>}
          </div>
        ) : (
          <p>Menunggu QR Code dari server... Pastikan sesi WhatsApp siap untuk dihubungkan.</p>
        )}
      </div>
    </div>
  );
}