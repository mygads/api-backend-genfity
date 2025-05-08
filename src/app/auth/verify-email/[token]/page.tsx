'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // useRouter untuk redirect
import Link from 'next/link';

export default function VerifyEmailPage() {
  const params = useParams();
  const router = useRouter();
  const token = params.token as string;

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState<string>('Memverifikasi email Anda...');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Token verifikasi tidak ditemukan di URL.');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await fetch(`/api/auth/verify-email/${token}`);
        const data = await response.json();

        if (!response.ok) {
          setStatus('error');
          setMessage(data.message || 'Gagal memverifikasi email.');
        } else {
          setStatus('success');
          setMessage(data.message || 'Email berhasil diverifikasi!');
          // Opsional: redirect otomatis ke halaman login setelah beberapa detik
          setTimeout(() => {
            router.push('/auth/signin');
          }, 3000); // Redirect setelah 3 detik
        }
      } catch (err) {
        console.error('Verification API error:', err);
        setStatus('error');
        setMessage('Terjadi kesalahan saat menghubungi server untuk verifikasi.');
      }
    };

    verifyToken();
  }, [token, router]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh', 
      padding: '20px', 
      textAlign: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <h1>Verifikasi Email</h1>
      {status === 'loading' && (
        <p style={{ fontSize: '1.2em' }}>{message}</p>
        // Anda bisa menambahkan spinner di sini
      )}
      {status === 'success' && (
        <div style={{ padding: '20px', border: '1px solid green', borderRadius: '5px', backgroundColor: '#e6ffed' }}>
          <p style={{ fontSize: '1.2em', color: 'green' }}>{message}</p>
          <p>Anda akan diarahkan ke halaman login secara otomatis.</p>
          <p>Jika tidak diarahkan, <Link href="/auth/signin" style={{ color: 'blue', textDecoration: 'underline' }}>klik di sini untuk login</Link>.</p>
        </div>
      )}
      {status === 'error' && (
        <div style={{ padding: '20px', border: '1px solid red', borderRadius: '5px', backgroundColor: '#ffe6e6' }}>
          <p style={{ fontSize: '1.2em', color: 'red' }}>{message}</p>
          <p>Silakan coba lagi atau <Link href="/auth/signup" style={{ color: 'blue', textDecoration: 'underline' }}>daftar ulang</Link> jika masalah berlanjut.</p>
          <p>Anda juga bisa <Link href="/auth/signin" style={{ color: 'blue', textDecoration: 'underline' }}>mencoba login</Link> jika Anda merasa email sudah terverifikasi.</p>
        </div>
      )}
    </div>
  );
}
