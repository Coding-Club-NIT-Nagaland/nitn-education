'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  ArrowLeft,
  Search,
  BookOpen,
  Users,
  Sparkles,
  Compass,
  Lightbulb,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[bottom_1px_center] opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* 404 Animation */}
          <div className="mb-12 relative">
            <div className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-pulse">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Oops! Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              The page you're looking for seems to have taken a different learning path.
              Don't worry, even the best explorers sometimes lose their way!
            </p>

            {/* Fun Suggestion */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200/20 dark:border-amber-800/20 mb-8">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                Pro tip: Every mistake is a learning opportunity!
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group hover:bg-gray-50 dark:hover:bg-gray-800" asChild>
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Popular Learning Paths
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Clubs",
                  description: "Join learning communities",
                  href: "/clubs",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: BookOpen,
                  title: "Roadmaps",
                  description: "Structured learning paths",
                  href: "/roadmaps",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Search,
                  title: "Resources",
                  description: "Educational materials",
                  href: "/resources",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Compass,
                  title: "Explore",
                  description: "Discover new topics",
                  href: "/explore",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <Button size="sm" variant="ghost" className="w-full group/btn" asChild>
                      <Link href={item.href}>
                        <span className="group-hover/btn:translate-x-1 transition-transform">Visit</span>
                        <Sparkles className="ml-1 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-4 text-sm">
              Or search for what you're looking for:
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses, clubs, resources..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500/50 focus:ring-blue-500/20 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    // In a real app, this would trigger search
                    console.log('Search for:', e.currentTarget.value);
                  }
                }}
                suppressHydrationWarning={true}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
