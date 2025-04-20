"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bell, Plus, Brain, Search } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/store/authStore";

export default function Navbar() {
  const pathname = usePathname();
  const { logout, token, user } = useAuthStore();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!token); // Set true if token exists
  }, [token]);

  const isActive = (path: string) =>
    pathname === path
      ? "border-b-2 border-[#fd8c73] text-white font-semibold"
      : "text-gray-300 hover:text-white hover:border-white border-b-2 border-transparent";

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-700">
      <div
        className={`${
          isLoggedIn ? "w-full" : "max-w-7xl"
        } mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              href={`${isLoggedIn ? "/dashboard" : "/"}`}
              className="flex items-center space-x-2 text-white hover:text-gray-300"
            >
              <Brain className="h-6 w-6" />
              <span className="font-semibold text-lg">SkillScape AI</span>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                className="pl-9 pr-3 py-1 h-8 w-48 bg-[#161b22] border border-gray-600 text-sm text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <ModeToggle />

            {isLoggedIn ? (
              <>
                {/* Notifications */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white"
                >
                  <Bell className="h-5 w-5" />
                </Button>

                <Link href="/create">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </Link>

                {/* Avatar */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 cursor-pointer">
                      <AvatarImage src="/avatar.png" alt="User Avatar" />
                      <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-[#161b22] text-white border border-gray-700"
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/devAlchamist">Your Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Button onClick={logout}>Sign Out</Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button asChild className="gh-button-primary text-sm">
                <Link href="/login">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
