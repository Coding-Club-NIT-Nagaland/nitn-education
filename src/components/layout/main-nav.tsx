"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Calendar,
  Home,
  Search,
  Settings,
  Users,
  LogOut,
  User,
  Plus,
  Menu,
  X,
  Bell,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Clubs", href: "/clubs", icon: Users },
    { name: "Roadmaps", href: "/roadmaps", icon: BookOpen },
    { name: "Resources", href: "/resources", icon: Search },
    { name: "Events", href: "/events", icon: Calendar },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 shadow-lg"
          : "bg-gradient-to-r from-background via-background/95 to-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="mr-4 flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
        >
          <div className="relative p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
            <GraduationCap className="h-6 w-6 text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-300">
            Education Channel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex-1 hidden md:flex">
          <div className="flex items-center justify-center mx-auto">
            <nav className="flex items-center">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-white/60 via-white/80 to-white/60 dark:from-gray-800/60 dark:via-gray-800/80 dark:to-gray-800/60 backdrop-blur-md rounded-full px-6 py-2 border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg group",
                      "hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2"
                    )}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      {item.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {status === "loading" ? (
            <div className="flex space-x-2">
              <div className="h-10 w-10 animate-pulse rounded-full bg-muted/30" />
              <div className="h-10 w-20 animate-pulse rounded-lg bg-muted/30 hidden sm:block" />
            </div>
          ) : session?.user ? (
            <>
              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 relative group"
              >
                <Bell className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Create Button */}
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-green-200 text-green-700 hover:text-green-800 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800 dark:text-green-400 transition-all duration-300 group"
                asChild
              >
                <Link href="/create">
                  <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="font-medium">Create</span>
                </Link>
              </Button>

              {/* Mobile Create Button */}
              <Button
                variant="outline"
                size="icon"
                className="sm:hidden h-10 w-10 p-0 border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20"
                asChild
              >
                <Link href="/create">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Create</span>
                </Link>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="relative h-10 w-10 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300 p-0 group"
                  >
                    <Avatar className="h-8 w-8 group-hover:ring-2 group-hover:ring-blue-500/20 transition-all duration-300">
                      <AvatarImage
                        src={session.user.image || ""}
                        alt={session.user.name || ""}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 dark:from-blue-900/50 dark:to-purple-900/50 dark:text-blue-400 font-medium">
                        {session.user.name?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-72 p-3 border-border/40 shadow-xl backdrop-blur-sm bg-background/95"
                  align="end"
                  forceMount
                >
                  <div className="flex items-center justify-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={session.user.image || ""}
                        alt={session.user.name || ""}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 dark:from-blue-900/50 dark:to-purple-900/50 dark:text-blue-400 font-medium">
                        {session.user.name?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1 leading-none">
                      {session.user.name && (
                        <p className="font-semibold text-sm text-foreground">{session.user.name}</p>
                      )}
                      {session.user.email && (
                        <p className="w-full truncate text-xs text-muted-foreground">
                          {session.user.email}
                        </p>
                      )}
                      <Badge
                        variant="secondary"
                        className="w-fit px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/50 dark:to-purple-900/50 dark:text-blue-300"
                      >
                        {session.user.role || "Student"}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-border/40 my-2" />
                  <DropdownMenuItem asChild className="cursor-pointer group">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                    >
                      <User className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                      <span className="text-sm font-medium">Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer group">
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                    >
                      <Settings className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                      <span className="text-sm font-medium">Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/40 my-2" />
                  <DropdownMenuItem className="cursor-pointer flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200">
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm font-medium">Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hidden sm:inline-flex"
                asChild
              >
                <Link href="/auth/signin">Sign in</Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/auth/signup">
                  <span>Sign up</span>
                  <ChevronDown className="ml-1 h-3 w-3 group-hover:translate-y-0.5 transition-transform duration-200" />
                </Link>
              </Button>
            </>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm">
          <nav className="container px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}