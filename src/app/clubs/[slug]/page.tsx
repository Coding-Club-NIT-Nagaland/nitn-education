// src/app/clubs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Plus,
  Settings,
  Users,
  BookOpen,
  TrendingUp,
  Star,
  Eye,
} from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";

// Mock data - in real app, this would come from API/database
const clubData = {
  id: "1",
  name: "Web Development Club",
  slug: "web-dev-club",
  about: "Learn modern web development with React, Next.js, and TypeScript. We focus on building real-world projects and sharing best practices in web development.",
  bannerUrl: null,
  supervisorId: "user1",
  supervisor: {
    id: "user1",
    name: "Alex Johnson",
    avatar: null,
  },
  createdAt: new Date("2023-09-01"),
  _count: {
    members: 150,
    roadmaps: 5,
    resources: 45,
    events: 12,
  },
};

const mockRoadmaps = [
  {
    id: "1",
    title: "Complete React Developer Roadmap",
    description: "From basics to advanced React concepts including hooks, context, and performance optimization.",
    visibility: "public",
    version: 2,
    createdAt: new Date("2024-01-10"),
    modules: [
      { id: "1", title: "React Fundamentals", type: "article", position: 1 },
      { id: "2", title: "Hooks Deep Dive", type: "video", position: 2 },
      { id: "3", title: "Build a Real Project", type: "project", position: 3 },
    ],
    _count: { modules: 12, followers: 89 },
  },
  {
    id: "2",
    title: "Next.js Full-Stack Development",
    description: "Learn full-stack development with Next.js, including API routes, database integration, and deployment.",
    visibility: "public",
    version: 1,
    createdAt: new Date("2024-01-05"),
    modules: [
      { id: "4", title: "Next.js Basics", type: "article", position: 1 },
      { id: "5", title: "API Routes", type: "video", position: 2 },
    ],
    _count: { modules: 8, followers: 67 },
  },
];

const mockResources = [
  {
    id: "1",
    title: "React Best Practices 2024",
    type: "article",
    status: "published",
    difficulty: "intermediate",
    tags: ["react", "best-practices", "performance"],
    createdAt: new Date("2024-01-15"),
    estimatedTime: 15,
    _count: { comments: 23, upvotes: 156 },
  },
  {
    id: "2",
    title: "TypeScript Handbook",
    type: "repo",
    status: "published",
    difficulty: "beginner",
    tags: ["typescript", "handbook", "reference"],
    createdAt: new Date("2024-01-12"),
    estimatedTime: 30,
    _count: { comments: 45, upvotes: 289 },
  },
];

const mockEvents = [
  {
    id: "1",
    title: "React Workshop: Building Modern UIs",
    description: "Hands-on workshop covering React hooks, context, and modern patterns.",
    startAt: new Date("2024-02-15T14:00:00"),
    endAt: new Date("2024-02-15T17:00:00"),
    isVirtual: true,
    location: "Online",
    _count: { attendees: 45 },
  },
  {
    id: "2",
    title: "Next.js Meetup & Networking",
    description: "Monthly meetup for Next.js developers to share projects and learn together.",
    startAt: new Date("2024-02-20T18:30:00"),
    endAt: new Date("2024-02-20T20:30:00"),
    isVirtual: false,
    location: "Tech Hub Downtown",
    _count: { attendees: 32 },
  },
];

interface ClubPageProps {
  params: {
    slug: string;
  };
}

export default function ClubPage({ params }: ClubPageProps) {
  // In real app, fetch club data based on slug
  if (params.slug !== clubData.slug) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Club Header */}
      <div className="mb-8">
        <div className="flex items-start space-x-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src={clubData.bannerUrl || ""} alt={clubData.name} />
            <AvatarFallback className="text-2xl font-bold">
              {clubData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold">{clubData.name}</h1>
              <Badge variant="secondary">Active</Badge>
            </div>

            <p className="text-muted-foreground mb-4 max-w-2xl">
              {clubData.about}
            </p>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{clubData._count.members} members</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{clubData._count.roadmaps} roadmaps</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>{clubData._count.resources} resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{clubData._count.events} events</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button>Join Club</Button>
              <Button variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Club Content Tabs */}
      <Tabs defaultValue="roadmaps" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmaps" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Learning Roadmaps</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Roadmap
            </Button>
          </div>

          <div className="grid gap-6">
            {mockRoadmaps.map((roadmap) => (
              <Card key={roadmap.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">
                        <Link
                          href={`/roadmaps/${roadmap.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {roadmap.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {roadmap.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">
                      {roadmap.visibility}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{roadmap._count.modules} modules</span>
                      <span>{roadmap._count.followers} followers</span>
                      <span>Updated {formatRelativeTime(roadmap.createdAt)}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/roadmaps/${roadmap.id}`}>
                        View Roadmap
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Resources</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Resource
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {resource.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-base leading-tight">
                    <Link
                      href={`/resources/${resource.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {resource.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{resource.estimatedTime}min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{resource._count.comments}</span>
                      </div>
                    </div>
                    <span>{formatRelativeTime(resource.createdAt)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>

          <div className="grid gap-4">
            {mockEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-3">{event.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.startAt.toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.startAt.toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-2">
                        {event._count.attendees} attending
                      </div>
                      <Button>RSVP</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Members</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Manage
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Mock member cards would go here */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{clubData.supervisor.name}</p>
                    <p className="text-sm text-muted-foreground">Supervisor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
