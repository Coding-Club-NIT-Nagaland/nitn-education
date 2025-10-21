// src/app/roadmaps/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Circle,
  Clock,
  ExternalLink,
  FileText,
  Play,
  Star,
  Users,
  Video,
  Code,
  Database,
  Trophy,
} from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";

// Mock data - in real app, this would come from API/database
const roadmapData = {
  id: "1",
  title: "Complete React Developer Roadmap",
  description: "From basics to advanced React concepts including hooks, context, and performance optimization. Perfect for beginners and intermediate developers looking to master React development.",
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
    avatar: null,
  },
  createdAt: new Date("2024-01-10"),
  updatedAt: new Date("2024-01-20"),
  modules: [
    {
      id: "1",
      position: 1,
      type: "article",
      title: "React Fundamentals",
      content: "Learn the basics of React including components, JSX, props, and state management.",
      contentRef: "/resources/react-fundamentals",
      duration: 45,
      isRequired: true,
    },
    {
      id: "2",
      position: 2,
      type: "video",
      title: "Hooks Deep Dive",
      content: "Comprehensive guide to React hooks including useState, useEffect, useContext, and custom hooks.",
      contentRef: "https://youtube.com/watch?v=example",
      duration: 90,
      isRequired: true,
    },
    {
      id: "3",
      position: 3,
      type: "project",
      title: "Build a Todo App",
      content: "Hands-on project building a complete todo application with React hooks and local storage.",
      contentRef: "/projects/react-todo-app",
      duration: 120,
      isRequired: true,
    },
    {
      id: "4",
      position: 4,
      type: "article",
      title: "State Management with Redux",
      content: "Learn Redux for complex state management in React applications.",
      contentRef: "/resources/redux-guide",
      duration: 60,
      isRequired: false,
    },
    {
      id: "5",
      position: 5,
      type: "video",
      title: "Performance Optimization",
      content: "Techniques for optimizing React app performance including memoization and code splitting.",
      contentRef: "https://youtube.com/watch?v=performance",
      duration: 75,
      isRequired: true,
    },
  ],
  _count: {
    modules: 5,
    followers: 89
  },
};

const moduleTypeIcons = {
  article: FileText,
  video: Play,
  project: Code,
  task: CheckCircle,
  quiz: Trophy,
};

interface RoadmapPageProps {
  params: {
    id: string;
  };
}

export default function RoadmapPage({ params }: RoadmapPageProps) {
  // In real app, fetch roadmap data based on ID
  if (params.id !== roadmapData.id) {
    notFound();
  }

  const completedModules = 2; // Mock progress
  const progressPercentage = (completedModules / roadmapData.modules.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/roadmaps">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roadmaps
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant={roadmapData.visibility === 'public' ? 'default' : 'secondary'}>
                {roadmapData.visibility}
              </Badge>
              <Badge variant="outline">v{roadmapData.version}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-3">
              {roadmapData.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {roadmapData.description}
            </p>
          </div>
          <Button>
            <Star className="w-4 h-4 mr-2" />
            Follow
          </Button>
        </div>

        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>{roadmapData._count.modules} modules</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{roadmapData._count.followers} followers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Updated {formatRelativeTime(roadmapData.updatedAt)}</span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            href={`/clubs/${roadmapData.club.slug}`}
            className="text-primary hover:underline"
          >
            Created by {roadmapData.club.name}
          </Link>
        </div>
      </div>

      {/* Progress Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5" />
            <span>Your Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {completedModules} of {roadmapData.modules.length} modules completed
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Started {formatRelativeTime(new Date())}</span>
              <span>Estimated completion: 2 weeks</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modules */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Modules</h2>
          <Button variant="outline" size="sm">
            View as Timeline
          </Button>
        </div>

        <div className="space-y-4">
          {roadmapData.modules.map((module, index) => {
            const ModuleIcon = moduleTypeIcons[module.type as keyof typeof moduleTypeIcons] || Circle;
            const isCompleted = index < completedModules;
            const isCurrent = index === completedModules;

            return (
              <Card key={module.id} className={`transition-all duration-200 ${isCurrent ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-100 text-green-600' : isCurrent ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <ModuleIcon className="w-4 h-4" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {module.type}
                        </Badge>
                        <Badge variant={module.isRequired ? "default" : "secondary"} className="text-xs">
                          {module.isRequired ? "Required" : "Optional"}
                        </Badge>
                        {module.duration && (
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{module.duration}min</span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-semibold text-lg mb-2">
                        {isCompleted && "✓ "}
                        {module.title}
                      </h3>

                      <p className="text-muted-foreground mb-4">
                        {module.content}
                      </p>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant={isCompleted ? "outline" : "default"}>
                          {isCompleted ? "Review" : "Start"}
                        </Button>
                        {module.contentRef && (
                          <Button size="sm" variant="ghost" asChild>
                            <a
                              href={module.contentRef}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View Content
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            Share Roadmap
          </Button>
          <Button variant="outline">
            Report Issue
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Need help?</span>
          <Button variant="ghost" size="sm">
            Ask Community
          </Button>
        </div>
      </div>
    </div>
  );
}
