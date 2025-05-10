import Navbar from '../components/dashboard/Navbar';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Placeholder - You can build this out as a separate component */}
        <aside className="w-64 bg-gray-100 p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          {/* Add sidebar navigation links here if needed */}
          <ul>
            {/* Example:
            <li><Link href="/dashboard/profile">Profile</Link></li>
            */}
          </ul>
        </aside>
        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </section>
  );
}
