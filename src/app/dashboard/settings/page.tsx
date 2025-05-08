'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (newPassword !== confirmNewPassword) {
      setMessage({ type: 'error', text: 'Kata sandi baru dan konfirmasi tidak cocok.' });
      return;
    }
    if (!currentPassword || !newPassword) {
        setMessage({ type: 'error', text: 'Semua field kata sandi harus diisi.' });
        return;
    }

    try {
      const res = await fetch('/api/account/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: 'error', text: data.message || 'Gagal mengubah kata sandi.' });
      } else {
        setMessage({ type: 'success', text: data.message || 'Kata sandi berhasil diubah.' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan pada server.' });
      console.error('Change password error:', error);
    }
  };

  const handleResendVerificationEmail = async () => {
    setMessage(null);
    try {
      const res = await fetch('/api/account/resend-verification-email', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: 'error', text: data.message || 'Gagal mengirim ulang email verifikasi.' });
      } else {
        setMessage({ type: 'success', text: data.message || 'Email verifikasi telah dikirim ulang.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan pada server.' });
      console.error('Resend verification email error:', error);
    }
  };

  const handleDeleteAccount = async () => {
    setMessage(null);
    if (!window.confirm('Apakah Anda yakin ingin menghapus akun Anda secara permanen? Tindakan ini tidak dapat diurungkan.')) {
      return;
    }
    try {
      const res = await fetch('/api/account/delete-account', {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: 'error', text: data.message || 'Gagal menghapus akun.' });
      } else {
        setMessage({ type: 'success', text: data.message || 'Akun berhasil dihapus.' });
        await signOut({ redirect: false });
        router.push('/'); // Redirect ke homepage atau halaman login
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan pada server.' });
      console.error('Delete account error:', error);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Pengaturan Akun</h1>

      {message && (
        <div style={{
          padding: '10px',
          marginBottom: '15px',
          border: message.type === 'success' ? '1px solid green' : '1px solid red',
          color: message.type === 'success' ? 'green' : 'red',
          backgroundColor: message.type === 'success' ? '#e6ffed' : '#ffe6e6'
        }}>
          {message.text}
        </div>
      )}

      <section style={{ marginBottom: '30px' }}>
        <h2>Ubah Kata Sandi</h2>
        <form onSubmit={handleChangePassword}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="currentPassword">Kata Sandi Saat Ini:</label><br />
            <input 
              type="password" 
              id="currentPassword" 
              value={currentPassword} 
              onChange={(e) => setCurrentPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="newPassword">Kata Sandi Baru:</label><br />
            <input 
              type="password" 
              id="newPassword" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="confirmNewPassword">Konfirmasi Kata Sandi Baru:</label><br />
            <input 
              type="password" 
              id="confirmNewPassword" 
              value={confirmNewPassword} 
              onChange={(e) => setConfirmNewPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 15px' }}>Ubah Kata Sandi</button>
        </form>
      </section>

      {session?.user?.email && !(session.user as typeof session.user & { emailVerified?: boolean }).emailVerified && (
        <section style={{ marginBottom: '30px' }}>
          <h2>Verifikasi Email</h2>
          <p>Email Anda ({session.user.email}) belum diverifikasi.</p>
          <button onClick={handleResendVerificationEmail} style={{ padding: '10px 15px' }}>
            Kirim Ulang Email Verifikasi
          </button>
        </section>
      )}

      <section>
        <h2>Hapus Akun</h2>
        <p style={{ color: 'red' }}>PERINGATAN: Tindakan ini akan menghapus akun Anda secara permanen dan tidak dapat diurungkan.</p>
        <button onClick={handleDeleteAccount} style={{ padding: '10px 15px', backgroundColor: 'red', color: 'white', border: 'none' }}>
          Hapus Akun Saya
        </button>
      </section>
    </div>
  );
}
