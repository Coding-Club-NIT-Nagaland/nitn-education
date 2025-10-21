// src/app/resources/page.tsx
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
  Clock,
  MessageCircle,
  ThumbsUp,
  ExternalLink,
  FileText,
  Video,
  Github,
  Database,
  FileCode,
  BookOpen,
} from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";

// Mock resources data
const resources = [
  {
    id: "1",
    title: "Complete React Guide for Beginners",
    type: "article",
    content: "A comprehensive guide covering React fundamentals, components, hooks, and best practices. Perfect for developers new to React.",
    url: "https://example.com/react-guide",
    tags: ["react", "javascript", "frontend", "beginner"],
    status: "published",
    difficulty: "beginner",
    estimatedTime: 30,
    club: {
      id: "1",
      name: "Web Development Club",
      slug: "web-dev-club",
    },
    creator: {
      name: "Alex Johnson",
    },
    createdAt: new Date("2024-01-15"),
    _count: {
      comments: 23,
      upvotes: 156,
    },
  },
  {
    id: "2",
    title: "Machine Learning Roadmap 2024",
    type: "repo",
    content: "Curated collection of machine learning resources, tutorials, and project ideas organized by difficulty level.",
    url: "https://github.com/example/ml-roadmap",
    tags: ["machine-learning", "python", "roadmap", "data-science"],
    status: "published",
    difficulty: "intermediate",
    estimatedTime: 45,
    club: {
      id: "2",
      name: "Data Science Society",
      slug: "data-science",
    },
    creator: {
      name: "Sarah Chen",
    },
    createdAt: new Date("2024-01-20"),
    _count: {
      comments: 45,
      upvotes: 289,
    },
  },
  {
    id: "3",
    title: "React Native Animation Guide",
    type: "video",
    content: "Learn how to create smooth animations in React Native apps with practical examples and performance tips.",
    url: "https://youtube.com/watch?v=animation-guide",
    tags: ["react-native", "animation", "mobile", "ui"],
    status: "published",
    difficulty: "intermediate",
    estimatedTime: 60,
    club: {
      id: "3",
      name: "Mobile App Developers",
      slug: "mobile-dev",
    },
    creator: {
      name: "Mike Rodriguez",
    },
    createdAt: new Date("2024-01-18"),
    _count: {
      comments: 18,
      upvotes: 94,
    },
  },
  {
    id: "4",
    title: "TypeScript Handbook",
    type: "repo",
    content: "Official TypeScript handbook with examples, best practices, and advanced patterns for type-safe JavaScript development.",
    url: "https://github.com/microsoft/TypeScript-Handbook",
    tags: ["typescript", "handbook", "reference", "types"],
    status: "published",
    difficulty: "beginner",
    estimatedTime: 90,
    club: {
      id: "1",
      name: "Web Development Club",
      slug: "web-dev-club",
    },
    creator: {
      name: "Emma Wilson",
    },
    createdAt: new Date("2024-01-12"),
    _count: {
      comments: 67,
      upvotes: 342,
    },
  },
  {
    id: "5",
    title: "Docker for Developers",
    type: "slides",
    content: "Comprehensive presentation on Docker fundamentals, containerization concepts, and practical development workflows.",
    url: "/slides/docker-fundamentals",
    tags: ["docker", "devops", "containers", "deployment"],
    status: "published",
    difficulty: "intermediate",
    estimatedTime: 40,
    club: {
      id: "6",
      name: "DevOps & Cloud Computing",
      slug: "devops-cloud",
    },
    creator: {
      name: "David Kim",
    },
    createdAt: new Date("2024-01-10"),
    _count: {
      comments: 31,
      upvotes: 178,
    },
  },
  {
    id: "6",
    title: "Cybersecurity Best Practices",
    type: "article",
    content: "Essential security practices for web developers including input validation, authentication, and common vulnerabilities.",
    url: "/articles/security-practices",
    tags: ["security", "web-development", "best-practices", "owasp"],
    status: "published",
    difficulty: "intermediate",
    estimatedTime: 35,
    club: {
      id: "4",
      name: "Cybersecurity Club",
      slug: "cybersecurity",
    },
    creator: {
      name: "Lisa Thompson",
    },
    createdAt: new Date("2024-01-08"),
    _count: {
      comments: 52,
      upvotes: 203,
    },
  },
];

const resourceTypeIcons = {
  article: FileText,
  video: Video,
  repo: Github,
  slides: FileText,
  dataset: Database,
  notebook: FileCode,
};

const resourceTypeColors = {
  article: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  video: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  repo: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  slides: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  dataset: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  notebook: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

const difficultyColors = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

function ResourcesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => {
        const TypeIcon = resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons] || FileText;
        const typeColor = resourceTypeColors[resource.type as keyof typeof resourceTypeColors] || "bg-gray-100 text-gray-800";
        const difficultyColor = resource.difficulty ? difficultyColors[resource.difficulty as keyof typeof difficultyColors] : "";

        return (
          <Card key={resource.id} className="hover:shadow-lg transition-all duration-200 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`p-1.5 rounded-md ${typeColor}`}>
                    <TypeIcon className="h-4 w-4" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
                {resource.status !== 'published' && (
                  <Badge variant="secondary" className="text-xs">
                    {resource.status}
                  </Badge>
                )}
              </div>

              <CardTitle className="text-lg leading-tight">
                <Link
                  href={`/resources/${resource.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {resource.title}
                </Link>
              </CardTitle>

              <CardDescription className="line-clamp-2">
                {resource.content}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-4">
              {resource.difficulty && (
                <div className="mb-3">
                  <Badge variant="outline" className={`text-xs ${difficultyColor}`}>
                    {resource.difficulty}
                  </Badge>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center space-x-3">
                  {resource.estimatedTime && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{resource.estimatedTime}min</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{resource._count.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{resource._count.upvotes}</span>
                  </div>
                </div>
                <span>{formatRelativeTime(resource.createdAt)}</span>
              </div>

              {resource.tags && resource.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {resource.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{resource.tags.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <Link
                  href={`/clubs/${resource.club.slug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {resource.club.name}
                </Link>
                <div className="flex items-center space-x-1">
                  {resource.url && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 p-0"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="sr-only">View resource</span>
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/resources/${resource.id}`}>
                      <BookOpen className="h-3 w-3 mr-1" />
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-2">
            Curated learning materials, tutorials, and references from clubs
          </p>
        </div>
        <Button asChild>
          <Link href="/resources/create">
            <Plus className="w-4 h-4 mr-2" />
            Add Resource
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Resources Grid */}
      <Suspense fallback={<div>Loading resources...</div>}>
        <ResourcesGrid />
      </Suspense>

      {/* Load More / Pagination could go here */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Showing {resources.length} resources
        </p>
        <Button variant="outline">
          Load More Resources
        </Button>
      </div>
    </div>
  );
}
