import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-white text-lg font-bold">
          Dashboard
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard/webhook" className="text-gray-300 hover:text-white">
            Webhook
          </Link>
          <Link href="/dashboard/settings" className="text-gray-300 hover:text-white">
            Settings
          </Link>
          {/* Add other navigation links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;