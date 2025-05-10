'use client';

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Added for logo

export default function SignInPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        identifier,
        password,
      });

      if (result?.error) {
        if (result.error === 'CredentialsSignin') {
          setError('Kombinasi email/telepon dan kata sandi tidak cocok.');
        } else {
          setError(result.error);
        }
      } else if (result?.ok) {
        router.push('/');
        router.refresh();
      } else {
        setError('Terjadi kesalahan saat login.');
      }
    } catch (err) {
      setError('Terjadi kesalahan tak terduga.');
      console.error("Sign in error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#2563eb] to-[#ef4444] px-4 py-8 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#2563eb]/60 via-white/10 to-[#ef4444]/60 rounded-full blur-3xl opacity-70 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#ef4444]/60 via-white/10 to-[#2563eb]/60 rounded-full blur-2xl opacity-60 animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-[#101828]/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/30 dark:border-black/30 animate-in fade-in zoom-in-75 duration-700">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-8 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-dark.svg" // Assuming you have a dark logo in public folder
              alt="Genfity Logo"
              width={500}
              height={200}
              className="object-contain"
            />
          </Link>
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Sign In to Your Account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email atau Nomor WhatsApp
            </label>
            <input
              id="identifier"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="you@example.com atau 08123xxx"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="font-medium text-[#2563eb] hover:text-[#1d4ed8] dark:hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
      {/* Footer */}
      <footer className="mt-8 text-xs text-white/80 dark:text-white/70 z-10">
        &copy; {new Date().getFullYear()} Genfity. All rights reserved.
      </footer>
    </div>
  );
}
