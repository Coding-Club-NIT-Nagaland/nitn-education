import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FeaturesSection } from "@/components/features-section";
import {
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Heart,
  Sparkles,
  Target,
  Award,
  ChevronRight,
} from "lucide-react";

// Mock data for demonstration
const featuredClubs = [
  {
    id: "1",
    name: "Web Development Club",
    slug: "web-dev-club",
    about: "Learn modern web development with React, Next.js, and TypeScript",
    bannerUrl: null,
    _count: {
      members: 150,
      roadmaps: 5,
      resources: 45,
      events: 12,
    },
  },
  {
    id: "2",
    name: "Data Science Society",
    slug: "data-science",
    about: "Explore machine learning, data analysis, and AI technologies",
    bannerUrl: null,
    _count: {
      members: 89,
      roadmaps: 3,
      resources: 32,
      events: 8,
    },
  },
  {
    id: "3",
    name: "Mobile App Developers",
    slug: "mobile-dev",
    about: "Build iOS and Android apps with React Native and Flutter",
    bannerUrl: null,
    _count: {
      members: 76,
      roadmaps: 4,
      resources: 28,
      events: 6,
    },
  },
];

const featuredResources = [
  {
    id: "1",
    title: "Complete React Guide for Beginners",
    type: "article",
    status: "published",
    difficulty: "beginner",
    tags: ["react", "javascript", "frontend"],
    createdAt: new Date("2024-01-15"),
    _count: { comments: 23, upvotes: 156 },
  },
  {
    id: "2",
    title: "Machine Learning Roadmap 2024",
    type: "repo",
    status: "published",
    difficulty: "intermediate",
    tags: ["machine-learning", "python", "roadmap"],
    createdAt: new Date("2024-01-20"),
    _count: { comments: 45, upvotes: 289 },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[bottom_1px_center] dark:border-slate-100/5 dark:bg-slate-900/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-purple-600" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:bg-yellow-600" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-600" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Trusted by 1000+ students worldwide
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-fade-in animation-delay-200">
              Education Reimagined
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                by Student Clubs
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
              Discover, learn, and grow with expertly curated educational content from passionate college clubs.
              <span className="block mt-2 font-medium text-gray-700 dark:text-gray-300">
                Roadmaps, resources, and events — all in one place.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animation-delay-600">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/clubs">
                  Explore Clubs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" asChild>
                <Link href="/roadmaps">
                  Browse Roadmaps
                </Link>
              </Button>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-lg mx-auto relative animate-fade-in animation-delay-800">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur opacity-75" />
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search courses, resources, clubs..."
                  className="pl-12 pr-6 py-4 text-base bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
                  suppressHydrationWarning={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        <FeaturesSection />

      {/* Featured Clubs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.02),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Clubs
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl">
                Discover amazing clubs creating exceptional educational content and building vibrant learning communities
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex group hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" asChild>
              <Link href="/clubs">
                View All Clubs
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs.map((club, index) => (
              <Card key={club.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-cyan-500' : index === 1 ? 'from-purple-500 to-pink-500' : 'from-green-500 to-emerald-500'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {club.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 leading-relaxed">
                        {club.about}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">{club._count.members} members</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
                      <BookOpen className="w-4 h-4 text-purple-500" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">{club._count.resources} resources</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile view all button */}
          <div className="flex justify-center mt-8 sm:hidden">
            <Button variant="outline" className="group" asChild>
              <Link href="/clubs">
                View All Clubs
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Join the Learning Revolution</span>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Learning Journey?
              </span>
            </h2>

            <p className="text-base md:text-lg text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students already learning with our club-created content.
              <span className="block mt-2 text-base text-blue-200">
                Start your journey today and unlock your potential.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                <Link href="/auth/signup">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Create Account
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 transition-all duration-300 group" asChild>
                <Link href="/roadmaps">
                  Browse Roadmaps
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
