import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Plus,
  BookOpen,
  Clock,
  Users,
  Eye,
  Star,
  TrendingUp,
} from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";

// Mock roadmaps data
const roadmaps = [
  {
    id: "1",
    title: "Complete React Developer Roadmap",
    description: "From basics to advanced React concepts including hooks, context, and performance optimization. Perfect for beginners and intermediate developers.",
    visibility: "public",
    version: 2,
    club: {
      id: "1",
      name: "Web Development Club",
      slug: "web-dev-club",
    },
    createdBy: "user1",
    creator: {
      name: "Alex Johnson",
    },
    createdAt: new Date("2024-01-10"),
    modules: [
      { id: "1", title: "React Fundamentals", type: "article", position: 1 },
      { id: "2", title: "Hooks Deep Dive", type: "video", position: 2 },
      { id: "3", title: "Build a Real Project", type: "project", position: 3 },
    ],
    _count: {
      modules: 12,
      followers: 89
    },
  },
  {
    id: "2",
    title: "Machine Learning Fundamentals",
    description: "A comprehensive guide to machine learning from linear regression to neural networks. Includes hands-on projects and real datasets.",
    visibility: "public",
    version: 1,
    club: {
      id: "2",
      name: "Data Science Society",
      slug: "data-science",
    },
    createdBy: "user2",
    creator: {
      name: "Sarah Chen",
    },
    createdAt: new Date("2024-01-05"),
    modules: [
      { id: "4", title: "Python for ML", type: "article", position: 1 },
      { id: "5", title: "Linear Regression", type: "video", position: 2 },
    ],
    _count: {
      modules: 15,
      followers: 134
    },
  },
  {
    id: "3",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps with React Native. From setup to publishing on App Store and Google Play.",
    visibility: "public",
    version: 1,
    club: {
      id: "3",
      name: "Mobile App Developers",
      slug: "mobile-dev",
    },
    createdBy: "user3",
    creator: {
      name: "Mike Rodriguez",
    },
    createdAt: new Date("2024-01-08"),
    modules: [
      { id: "6", title: "React Native Setup", type: "article", position: 1 },
      { id: "7", title: "Navigation & Routing", type: "video", position: 2 },
    ],
    _count: {
      modules: 10,
      followers: 67
    },
  },
  {
    id: "4",
    title: "Cybersecurity Basics for Developers",
    description: "Essential cybersecurity concepts every developer should know. From secure coding to threat modeling.",
    visibility: "club",
    version: 1,
    club: {
      id: "4",
      name: "Cybersecurity Club",
      slug: "cybersecurity",
    },
    createdBy: "user4",
    creator: {
      name: "Emma Wilson",
    },
    createdAt: new Date("2024-01-03"),
    modules: [
      { id: "8", title: "Security Fundamentals", type: "article", position: 1 },
      { id: "9", title: "OWASP Top 10", type: "video", position: 2 },
    ],
    _count: {
      modules: 8,
      followers: 45
    },
  },
];

function RoadmapsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {roadmaps.map((roadmap) => (
        <Card key={roadmap.id} className="hover:shadow-lg transition-all duration-200 group">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between mb-2">
              <Badge variant={roadmap.visibility === 'public' ? 'default' : 'secondary'}>
                {roadmap.visibility}
              </Badge>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Star className="w-3 h-3" />
                <span>{roadmap._count.followers}</span>
              </div>
            </div>

            <CardTitle className="text-lg leading-tight">
              <Link
                href={`/roadmaps/${roadmap.id}`}
                className="hover:text-primary transition-colors"
              >
                {roadmap.title}
              </Link>
            </CardTitle>

            <CardDescription className="line-clamp-2">
              {roadmap.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{roadmap._count.modules} modules</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{roadmap._count.followers} followers</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground mb-3">
              by {roadmap.creator.name} • {formatRelativeTime(roadmap.createdAt)}
            </div>

            <div className="flex items-center justify-between">
              <Link
                href={`/clubs/${roadmap.club.slug}`}
                className="text-sm text-primary hover:underline"
              >
                {roadmap.club.name}
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/roadmaps/${roadmap.id}`}>
                  View Roadmap
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function RoadmapsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Roadmaps</h1>
          <p className="text-muted-foreground mt-2">
            Structured learning paths created by experienced club members
          </p>
        </div>
        <Button asChild>
          <Link href="/roadmaps/create">
            <Plus className="w-4 h-4 mr-2" />
            Create Roadmap
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search roadmaps..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Roadmaps Grid */}
      <Suspense fallback={<div>Loading roadmaps...</div>}>
        <RoadmapsGrid />
      </Suspense>

      {/* Load More / Pagination could go here */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Showing {roadmaps.length} roadmaps
        </p>
        <Button variant="outline">
          Load More Roadmaps
        </Button>
      </div>
    </div>
  );
}
