"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/dashboard/Navbar" // Corrected import path
import Sidebar from "@/components/dashboard/Sidebar" // Corrected import path

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Or a loading spinner
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onMenuButtonClick={() => setSidebarOpen(true)} />
        {/* The main content area itself doesn't need a separate bg if the parent `div` has it and children are transparent by default */}
        {/* However, if children have their own backgrounds, this main tag might need padding or specific styling */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
