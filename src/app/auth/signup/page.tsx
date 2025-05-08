'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react'; // Ditambahkan untuk auto-login setelah OTP

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Ditambahkan
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [identifierForOtp, setIdentifierForOtp] = useState(''); // Untuk menyimpan email/telepon untuk verifikasi OTP

  const handleSignUpSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Gagal mendaftar');
      } else {
        setSuccess(data.message || 'Pendaftaran berhasil! Silakan cek OTP.');
        // Mengubah kondisi untuk menampilkan form OTP berdasarkan data.nextStep dari API
        if (data.nextStep === 'VERIFY_OTP') {
          setIdentifierForOtp(phone || email); // Prioritaskan telepon jika ada untuk OTP
          setShowOtpForm(true);
        } else if (email && !phone) {
          // Jika hanya email dan tidak ada OTP (misal OTP gagal kirim atau tidak ada nomor telepon)
          // Anda bisa arahkan ke login atau beri pesan spesifik
          setSuccess(data.message || 'Pendaftaran berhasil. Silakan login.');
          setTimeout(() => router.push('/auth/signin'), 2000);
        } else if (data.nextStep === 'LOGIN' || data.nextStep === 'LOGIN_THEN_VERIFY_EMAIL') {
          // Kasus di mana OTP tidak diharapkan atau tidak dikirim, arahkan ke login
          setSuccess(data.message || 'Pendaftaran berhasil. Silakan login.');
          setTimeout(() => router.push('/auth/signin'), 2000);
        } else {
          // Kasus lain, misal OTP tidak terkirim dan ada nomor telepon (seharusnya ditangani oleh nextStep)
          setError(data.message || "Pendaftaran berhasil, tapi OTP gagal dikirim atau langkah selanjutnya tidak jelas. Coba lagi nanti.");
        }
      }
    } catch (err) {
      setError('Terjadi kesalahan tak terduga.');
      console.error("Sign up error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: identifierForOtp, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Verifikasi OTP gagal');
      } else {
        setSuccess(data.message || 'Verifikasi OTP berhasil! Anda akan diarahkan.');
        // Karena API verify-otp sudah set cookie, kita bisa langsung refresh atau redirect
        // Untuk memastikan sesi NextAuth di client terupdate, kita bisa panggil signIn() tanpa kredensial
        // atau cukup redirect dan biarkan AuthProvider menangani.
        // Cara paling sederhana adalah redirect.
        await signIn('credentials', { redirect: false, email: identifierForOtp, password: password }); // coba login ulang untuk set session
        router.push('/'); // Arahkan ke halaman utama
        router.refresh(); // Refresh halaman untuk memastikan sesi terupdate
      }
    } catch (err) {
      setError('Terjadi kesalahan tak terduga saat verifikasi OTP.');
      console.error("OTP verification error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (showOtpForm) {
    return (
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Verifikasi OTP</h2>
        <p>Masukkan kode OTP yang dikirim ke {identifierForOtp}.</p>
        <form onSubmit={handleOtpSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="otp">Kode OTP:</label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '10px 15px',
              backgroundColor: isLoading ? 'gray' : 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {isLoading ? 'Memverifikasi...' : 'Verifikasi OTP'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUpSubmit}>
        {/* ... field nama ... */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email (Opsional jika mengisi No. WhatsApp):</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">No. WhatsApp (Contoh: 08123... atau 628123...):</label>
          <input
            id="phone"
            type="tel" // Menggunakan type tel untuk nomor telepon
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required // Jadikan wajib jika email opsional dan sebaliknya
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit" disabled={isLoading} style={{ padding: '10px 15px', backgroundColor: isLoading ? 'gray' : 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {isLoading ? 'Mendaftar...' : 'Sign Up'}
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Already have an account? <Link href="/auth/signin" style={{ color: 'blue' }}>Sign in</Link>
      </p>
    </div>
  );
}
