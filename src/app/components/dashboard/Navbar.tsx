'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Ringkasan' },
    { href: '/dashboard/webhook', label: 'Webhook' },
    { href: '/dashboard/settings', label: 'Pengaturan' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          Dashboard Saya
        </Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-gray-300 ${pathname === item.href ? 'text-blue-400 font-semibold' : ''
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => signOut({ callbackUrl: '/auth/signin' })}
          className="btn btn-outline btn-error btn-sm"
        >
          Keluar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
