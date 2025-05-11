"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image" // Import next/image
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes" // Added useTheme import
import { Box, Users, ShoppingCart, Webhook, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme() // Get the resolved theme

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [setOpen])

  // Close sidebar when navigating on mobile
  useEffect(() => {
    setOpen(false)
  }, [pathname, setOpen])

  const menuItems = [
    {
      title: "Webhook",
      href: "/dashboard/webhook",
      icon: Webhook,
    },
    {
      title: "Product",
      href: "/dashboard/products",
      icon: Box,
    },
    {
      title: "Transaction",
      href: "/dashboard/transaction",
      icon: ShoppingCart,
    },
    {
      title: "Pengguna",
      href: "/dashboard/users",
      icon: Users,
    },
  ]

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-56 bg-white dark:bg-gray-900 shadow-lg lg:static lg:z-auto", // Changed background
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "transition-transform duration-300 ease-in-out lg:transition-none",
        )}
      >
        {/* Mobile close button */}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </button>

        {/* Logo */}
        <div className="flex h-20 items-center justify-center mt-6 mb-2 px-6">
          <Link href="/dashboard" className="flex items-center">
            {resolvedTheme === "dark" ? (
              <Image src="/logo-dark.svg" alt="Genfity Logo Dark" width={150} height={80} />
            ) : (
              <Image src="/logo-light.svg" alt="Genfity Logo Light" width={150} height={80} />
            )}
          </Link>
        </div>

        {/* Menu items */}
        <nav className="space-y-1 px-3 py-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                pathname === item.href
                  ? cn("bg-blue-red-gradient shadow-md", resolvedTheme === 'light' ? "text-gray-900" : "text-white") // Active state with conditional text color
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white", // Inactive state
              )}
            >
              <item.icon className={cn("h-5 w-5", pathname === item.href ? (resolvedTheme === 'light' ? "text-gray-900" : "text-white") : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white")} />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-blue-red-gradient opacity-10 blur-xl"></div>
      </div>
    </>
  )
}
