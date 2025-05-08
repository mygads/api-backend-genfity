'use client';

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const [identifier, setIdentifier] = useState(''); // Diubah dari email ke identifier
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Ditambahkan
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true); // Ditambahkan
    try {
      const result = await signIn('credentials', {
        redirect: false,
        identifier, // Diubah dari email ke identifier
        password,
      });

      if (result?.error) {
        // Pesan error dari NextAuth (misal, dari throw new Error di authorize)
        if (result.error === 'CredentialsSignin') {
            setError('Kombinasi email/telepon dan kata sandi tidak cocok.');
        } else {
            setError(result.error); 
        }
      } else if (result?.ok) {
        router.push('/'); // Arahkan ke halaman utama setelah login berhasil
        router.refresh(); // Untuk memastikan sesi terupdate di client
      } else {
        setError('Terjadi kesalahan saat login.');
      }
    } catch (err) {
      setError('Terjadi kesalahan tak terduga.');
      console.error("Sign in error:", err);
    } finally {
      setIsLoading(false); // Ditambahkan
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="identifier">Email atau Nomor WhatsApp:</label> {/* Diubah labelnya */}
          <input
            id="identifier"
            type="text" // Diubah dari email ke text untuk menerima nomor telepon juga
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
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
        <button type="submit" disabled={isLoading} style={{ padding: '10px 15px', backgroundColor: isLoading ? 'gray' : 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {isLoading ? 'Memproses...' : 'Sign In'} {/* Ditambahkan isLoading state */}
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Don&apos;t have an account? <Link href="/auth/signup" style={{ color: 'blue' }}>Sign up</Link>
      </p>
    </div>
  );
}
