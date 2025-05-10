"use client"

import { useState } from "react"
import { Bell, LogOut, Menu, Settings, User, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
    onMenuButtonClick: () => void
}

export default function Navbar({ onMenuButtonClick }: NavbarProps) {
    const [showNotifications, setShowNotifications] = useState(false)

    // TODO - in a real app, this would come from your auth system
    const user = {
        name: "Admin User",
        role: "Administrator",
        image: "/placeholder.svg?height=32&width=32", // Placeholder image
        initials: "AU",
    }

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/10 bg-background/50 backdrop-blur-md px-4 md:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuButtonClick}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>

            <div className="flex-1" /> {/* Spacer */}
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    onClick={() => setShowNotifications(!showNotifications)}
                >
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-brand-red animate-pulse" />
                    <span className="sr-only">Notifications</span>
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 px-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5"
                        >
                            <Avatar className="h-8 w-8 ring-2 ring-brand-blue/50">
                                <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name || ""} />
                                <AvatarFallback className="bg-blue-red-gradient text-white">{user.initials}</AvatarFallback>
                            </Avatar>
                            <div className="hidden flex-col items-start md:flex">
                                <span className="text-sm font-medium">{user.name}</span>
                                <span className="text-xs text-muted-foreground">{user.role}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 glass-card backdrop-blur-md">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/10" />
                            <DropdownMenuItem className="hover:bg-white/10 dark:hover:bg-white/5 focus:bg-white/10 dark:focus:bg-white/5">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/10 dark:hover:bg-white/5 focus:bg-white/10 dark:focus:bg-white/5">
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem className="hover:bg-brand-red/10 focus:bg-brand-red/10 text-brand-red">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}