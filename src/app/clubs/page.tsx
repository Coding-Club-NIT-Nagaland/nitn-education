// src/app/clubs/page.tsx
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
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
} from "lucide-react";

// Mock data for clubs
const clubs = [
  {
    id: "1",
    name: "Web Development Club",
    slug: "web-dev-club",
    about: "Learn modern web development with React, Next.js, and TypeScript. We focus on building real-world projects and sharing best practices.",
    bannerUrl: null,
    supervisorId: "user1",
    createdAt: new Date("2023-09-01"),
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
    about: "Explore machine learning, data analysis, and AI technologies. From beginner-friendly introductions to advanced deep learning concepts.",
    bannerUrl: null,
    supervisorId: "user2",
    createdAt: new Date("2023-08-15"),
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
    about: "Build iOS and Android apps with React Native and Flutter. Cross-platform development made easy.",
    bannerUrl: null,
    supervisorId: "user3",
    createdAt: new Date("2023-10-01"),
    _count: {
      members: 76,
      roadmaps: 4,
      resources: 28,
      events: 6,
    },
  },
  {
    id: "4",
    name: "Cybersecurity Club",
    slug: "cybersecurity",
    about: "Learn ethical hacking, network security, and cybersecurity best practices. Protect systems and data.",
    bannerUrl: null,
    supervisorId: "user4",
    createdAt: new Date("2023-07-20"),
    _count: {
      members: 45,
      roadmaps: 2,
      resources: 18,
      events: 4,
    },
  },
  {
    id: "5",
    name: "Game Development Guild",
    slug: "game-dev",
    about: "Create games with Unity, Godot, and web technologies. From 2D platformers to 3D worlds.",
    bannerUrl: null,
    supervisorId: "user5",
    createdAt: new Date("2023-09-10"),
    _count: {
      members: 92,
      roadmaps: 3,
      resources: 24,
      events: 7,
    },
  },
  {
    id: "6",
    name: "DevOps & Cloud Computing",
    slug: "devops-cloud",
    about: "Master Docker, Kubernetes, AWS, and modern deployment strategies. Infrastructure as code and CI/CD.",
    bannerUrl: null,
    supervisorId: "user6",
    createdAt: new Date("2023-08-05"),
    _count: {
      members: 67,
      roadmaps: 4,
      resources: 31,
      events: 9,
    },
  },
];

function ClubsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {clubs.map((club) => (
        <Card key={club.id} className="hover:shadow-lg transition-all duration-200 group">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg leading-tight">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {club.name}
                    </Link>
                  </CardTitle>
                </div>
              </div>
            </div>
            <CardDescription className="line-clamp-2 mt-2">
              {club.about}
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{club._count.members} members</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{club._count.roadmaps} roadmaps</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>{club._count.resources} resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{club._count.events} events</span>
              </div>
            </div>
          </CardContent>

          <div className="px-6 pb-4">
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
              <Link href={`/clubs/${club.slug}`}>
                View Club
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function ClubsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clubs</h1>
          <p className="text-muted-foreground mt-2">
            Discover and join clubs creating amazing educational content
          </p>
        </div>
        <Button asChild>
          <Link href="/clubs/create">
            <Plus className="w-4 h-4 mr-2" />
            Create Club
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search clubs..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Clubs Grid */}
      <Suspense fallback={<div>Loading clubs...</div>}>
        <ClubsGrid />
      </Suspense>

      {/* Load More / Pagination could go here */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Showing {clubs.length} clubs
        </p>
        <Button variant="outline">
          Load More Clubs
        </Button>
      </div>
    </div>
  );
}
