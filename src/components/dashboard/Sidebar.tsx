"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image" // Import next/image
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes" // Added useTheme import
import { 
  ChevronDown, 
  Users, 
  Box, 
  ShoppingCart, 
  Webhook, 
  X, 
  Layers, 
  FileText, 
  Settings,
  MessageSquare,
  Package,
  CreditCard,
  UserCheck,
  Activity,
  BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme() // Get the resolved theme
  const [waDropdown, setWaDropdown] = useState(false);

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
      description: "Manage webhook endpoints"
    },
    {
      title: "Product",
      href: "/dashboard/products",
      icon: Box,
      description: "Product catalog management"
    },
    {
      title: "Transaction",
      href: "/dashboard/transaction",
      icon: ShoppingCart,
      description: "View transaction history"
    },
    {
      title: "Pengguna",
      href: "/dashboard/users",
      icon: Users,
      description: "User management"
    },
  ]

  const whatsappMenuItems = [
    {
      title: "WhatsApp Sessions",
      href: "/dashboard/whatsapp-management",
      icon: MessageSquare,
      description: "Manage active WhatsApp sessions",
      color: "text-green-600 dark:text-green-400"
    },
    {
      title: "Service Management",
      href: "/dashboard/whatsapp-admin",
      icon: UserCheck,
      description: "Manage subscriptions & services",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Transaction History",
      href: "/dashboard/whatsapp-admin?tab=transaction",
      icon: CreditCard,
      description: "WhatsApp API transactions",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Package Management",
      href: "/dashboard/whatsapp-packages",
      icon: Package,
      description: "Manage WhatsApp packages",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Analytics",
      href: "/dashboard/whatsapp-analytics",
      icon: BarChart3,
      description: "Service usage analytics",
      color: "text-indigo-600 dark:text-indigo-400"
    }
  ]

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl lg:static lg:z-auto border-r border-gray-200/50 dark:border-gray-700/50", // Increased width and improved styling
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "transition-all duration-300 ease-in-out lg:transition-none",
        )}
      >        {/* Mobile close button */}
        <button
          className="absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </button>

        {/* Logo */}
        <div className="flex h-20 items-center justify-center mt-6 mb-8 px-6">
          <Link href="/dashboard" className="flex items-center transition-transform hover:scale-105">
            {resolvedTheme === "dark" ? (
              <Image src="/logo-dark.svg" alt="Genfity Logo Dark" width={160} height={85} />
            ) : (
              <Image src="/logo-light.svg" alt="Genfity Logo Light" width={160} height={85} />
            )}
          </Link>
        </div>        {/* Menu items */}
        <nav className="space-y-2 px-4 py-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02]",
                pathname === item.href
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white",
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-colors", 
                pathname === item.href 
                  ? "text-white" 
                  : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
              )} />
              <div className="flex flex-col">
                <span className="font-medium">{item.title}</span>
                {item.description && (
                  <span className={cn(
                    "text-xs opacity-70",
                    pathname === item.href ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  )}>
                    {item.description}
                  </span>
                )}
              </div>
            </Link>
          ))}

          {/* WhatsApp Service Dropdown */}
          <div className="mt-6">
            <div className="mb-3 px-4">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                WhatsApp Services
              </h3>
            </div>
            <button
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium w-full transition-all duration-200 hover:scale-[1.02]",
                waDropdown 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
              )}
              onClick={() => setWaDropdown((v) => !v)}
              type="button"
            >
              <Layers className={cn(
                "h-5 w-5 transition-colors",
                waDropdown ? "text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
              )} />
              <div className="flex flex-col items-start flex-1">
                <span className="font-medium">WhatsApp API</span>
                <span className={cn(
                  "text-xs opacity-70",
                  waDropdown ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                )}>
                  Manage API services
                </span>
              </div>
              <ChevronDown className={cn(
                "h-4 w-4 transition-transform duration-200", 
                waDropdown ? "rotate-180 text-white" : "rotate-0 text-gray-400"
              )}/>
            </button>
            
            {/* Dropdown Menu */}
            <div className={cn(
              "mt-2 space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
              waDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
              {whatsappMenuItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href.includes('?tab=transaction') && pathname === "/dashboard/whatsapp-admin" && 
                   typeof window !== 'undefined' && window.location.search.includes('tab=transaction'));
                
                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-4 py-2.5 ml-4 text-sm font-medium transition-all duration-200 hover:scale-[1.02] border-l-2",
                      isActive 
                        ? "bg-white/10 dark:bg-white/5 border-l-blue-500 text-blue-600 dark:text-blue-400 shadow-sm" 
                        : "border-l-transparent hover:bg-gray-50/80 dark:hover:bg-gray-800/30 hover:border-l-gray-300 dark:hover:border-l-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4 transition-colors",
                      isActive ? item.color : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400"
                    )} />
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs opacity-70">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-400/20 dark:via-indigo-400/10 dark:to-transparent"></div>
        
        {/* Version info */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Genfity Dashboard v2.0
          </p>
        </div>
      </div>
    </>
  )
}
