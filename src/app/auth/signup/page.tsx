'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Added for logo
import { signIn } from 'next-auth/react';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [identifierForOtp, setIdentifierForOtp] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const resendTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (resendCooldown > 0) {
      resendTimerRef.current = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => {
      if (resendTimerRef.current) clearTimeout(resendTimerRef.current);
    };
  }, [resendCooldown]);

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
          'API-KEY': process.env.INTERNAL_CLIENT_API_KEY || '',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Gagal mendaftar');
      } else {
        setSuccess(data.message || 'Pendaftaran berhasil! Silakan cek OTP.');
        if (data.nextStep === 'VERIFY_OTP') {
          setIdentifierForOtp(phone);
          setShowOtpForm(true);
        } else if (email && !phone) {
          // Auto-login if only email is provided and OTP is not the next step (e.g., email verification link sent)
          // This case might need adjustment based on your exact flow for email-only signups
          const signInResult = await signIn('credentials', { redirect: false, email: email, password: password });
          if (signInResult?.ok) {
            router.push('/');
            router.refresh();
          } else {
            setError(signInResult?.error || 'Gagal login setelah pendaftaran.');
          }
        } else if (data.nextStep === 'LOGIN' || data.nextStep === 'LOGIN_THEN_VERIFY_EMAIL') {
          // Directly login if API indicates so (e.g. phone only signup with auto-verification or existing but unverified email)
          const signInIdentifier = email || phone;
          const signInResult = await signIn('credentials', { redirect: false, identifier: signInIdentifier, password: password });
          if (signInResult?.ok) {
            router.push('/');
            router.refresh();
          } else {
            setError(signInResult?.error || 'Gagal login setelah pendaftaran.');
          }
        } else {
          // Fallback or other cases, perhaps just show success and let user sign in manually
          // Or redirect to sign-in page
          // router.push('/auth/signin');
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
        // Attempt to sign in the user after successful OTP verification
        const signInResult = await signIn('credentials', { 
          redirect: false, 
          identifier: identifierForOtp, // Use the identifier (email/phone) that was used for OTP
          password: password // Use the password from the initial sign-up form
        });

        if (signInResult?.ok) {
          router.push('/');
          router.refresh();
        } else {
          // If sign-in fails, it could be due to various reasons (e.g., account state not yet active)
          // Redirect to sign-in page with a message, or show error directly
          setError(signInResult?.error || 'Login gagal setelah verifikasi OTP. Silakan coba masuk secara manual.');
          // Optionally, redirect to sign-in after a delay or let user click
          // setTimeout(() => router.push('/auth/signin'), 3000);
        }
      }
    } catch (err) {
      setError('Terjadi kesalahan tak terduga saat verifikasi OTP.');
      console.error("OTP verification error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError(null);
    setSuccess(null);
    setResendCooldown(60);
    try {
      const res = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: identifierForOtp }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Gagal mengirim ulang OTP.');
        setResendCooldown(0);
      } else {
        setSuccess('OTP berhasil dikirim ulang.');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengirim ulang OTP.');
      setResendCooldown(0);
    }
  };

  if (showOtpForm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#2563eb] to-[#ef4444] px-4 py-8 relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#2563eb]/60 via-white/10 to-[#ef4444]/60 rounded-full blur-3xl opacity-70 animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#ef4444]/60 via-white/10 to-[#2563eb]/60 rounded-full blur-2xl opacity-60 animate-[pulse_10s_ease-in-out_infinite]" />
        </div>
        <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-[#101828]/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/30 dark:border-black/30 animate-in fade-in zoom-in-75 duration-700">
          <div className="flex flex-col items-center mb-8 gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-light.svg"
                alt="Genfity Logo"
                width={500}
                height={200}
                className="object-contain block dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                alt="Genfity Logo"
                width={500}
                height={200}
                className="object-contain hidden dark:block"
              />
            </Link>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Verifikasi OTP</h2>
          </div>
          <p className="mb-6 text-sm text-center text-gray-600 dark:text-gray-300">
            Masukkan kode OTP yang dikirim ke <span className="font-semibold">{identifierForOtp}</span>.
          </p>
          <form onSubmit={handleOtpSubmit} className="w-full space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Kode OTP
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 tracking-[0.5em] text-center"
                placeholder="_ _ _ _ _"
                maxLength={4}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-center">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-center">
                {success}
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
                  Memverifikasi...
                </>
              ) : (
                'Verifikasi & Lanjutkan'
              )}
            </button>
          </form>
           <p className="mt-8 text-sm text-center text-gray-600 dark:text-gray-400">
            Belum menerima kode?{' '}
            <button
              onClick={handleResendOtp}
              className="font-medium text-[#2563eb] hover:text-[#1d4ed8] dark:hover:text-blue-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={resendCooldown > 0}
            >
              {resendCooldown > 0 ? `Kirim Ulang OTP (${resendCooldown}s)` : 'Kirim Ulang OTP'}
            </button>
          </p>
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Sudah punya akun?{' '}
            <Link href="/auth/signin" className="font-medium text-[#2563eb] hover:text-[#1d4ed8] dark:hover:text-blue-400 focus:outline-none">
              Masuk
            </Link>
          </p>
        </div>
        <footer className="mt-8 text-xs text-white/80 dark:text-white/70 z-10">
          &copy; {new Date().getFullYear()} Genfity. All rights reserved.
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#2563eb] to-[#ef4444] px-4 py-8 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#2563eb]/60 via-white/10 to-[#ef4444]/60 rounded-full blur-3xl opacity-70 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#ef4444]/60 via-white/10 to-[#2563eb]/60 rounded-full blur-2xl opacity-60 animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-[#101828]/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/30 dark:border-black/30 animate-in fade-in zoom-in-75 duration-700">
        <div className="flex flex-col items-center mb-8 gap-4">
          <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-light.svg"
                alt="Genfity Logo"
                width={500}
                height={200}
                className="object-contain block dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                alt="Genfity Logo"
                width={500}
                height={200}
                className="object-contain hidden dark:block"
              />
            </Link>
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Create Your Account
          </h1>
        </div>

        <form onSubmit={handleSignUpSubmit} className="w-full space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nama Lengkap
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Nama Anda"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email (Opsional jika mengisi No. WhatsApp)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nomor WhatsApp (Opsional jika mengisi Email)
            </label>
            <input
              id="phone"
              type="tel" // Changed to tel for better mobile UX
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="08123xxxxxxx"
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
          {success && !showOtpForm && (
            <p className="text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-center">
              {success}
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
              'Sign Up'
            )}
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/auth/signin" className="font-medium text-[#2563eb] hover:text-[#1d4ed8] dark:hover:text-blue-400">
            Sign in
          </Link>
        </p>
      </div>

      <footer className="mt-8 text-xs text-white/80 dark:text-white/70 z-10">
        &copy; {new Date().getFullYear()} Genfity. All rights reserved.
      </footer>
    </div>
  );
}
