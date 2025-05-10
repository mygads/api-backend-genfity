'use client';

import React, { useState, useEffect } from 'react';

export default function WebhookPage() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Anda mungkin ingin mengambil URL webhook yang ada jika sudah dikonfigurasi
    // Untuk saat ini, kita akan mengasumsikan itu dibuat di sisi server
    // atau diambil dari pengaturan pengguna.
    const currentHost = window.location.origin;
    // Asumsi nama user atau ID unik akan ditambahkan di backend
    // Ini adalah contoh placeholder
    setWebhookUrl(`${currentHost}/api/dashboard/webhook/USER_SPECIFIC_ID`);
  }, []);

  const handleRegenerateUrl = async () => {
    // Logika untuk membuat ulang URL webhook jika diperlukan
    // Ini mungkin melibatkan panggilan API untuk mendapatkan token baru atau ID unik
    setMessage('URL Webhook baru sedang dibuat...');
    // Simulasi panggilan API
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
      <p className="mb-2">Gunakan URL berikut untuk menerima pesan WhatsApp:</p>
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
      {message && <p className="text-sm text-gray-600">{message}</p>}
      <div className="mt-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Instruksi Penggunaan</h2>
        <p className="mb-1">1. Salin URL webhook di atas.</p>
        <p className="mb-1">2. Masukkan URL ini ke pengaturan webhook di platform WhatsApp Anda (misalnya, Meta for Developers).</p>
        <p className="mb-1">3. Pastikan server Anda berjalan dan dapat menerima permintaan POST ke URL ini.</p>
        <p>4. Setiap pesan yang dikirim ke nomor WhatsApp Anda akan diteruskan ke URL ini.</p>
      </div>
    </div>
  );
}
