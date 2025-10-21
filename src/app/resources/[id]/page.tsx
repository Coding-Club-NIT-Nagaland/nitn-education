// src/app/resources/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  MessageCircle,
  ThumbsUp,
  Share,
  Bookmark,
  Flag,
  FileText,
  Video,
  Github,
  Database,
  FileCode,
  Calendar,
  User,
} from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";

// Mock data - in real app, this would come from API/database
const resourceData = {
  id: "1",
  title: "Complete React Guide for Beginners",
  type: "article",
  content: `# Complete React Guide for Beginners

React is a powerful JavaScript library for building user interfaces, particularly web applications. This comprehensive guide will take you from React basics to advanced concepts.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components."

## Why Learn React?

- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Large Ecosystem**: Rich ecosystem of tools and libraries
- **Job Market**: High demand in the industry

## Getting Started

### 1. Setup

First, let's create a new React application using Create React App:

\`\`\`bash
npx create-react-app my-react-app
cd my-react-app
npm start
\`\`\`

### 2. Your First Component

Here's a simple React component:

\`\`\`jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
\`\`\`

## Core Concepts

### Components

Components are the building blocks of React applications. There are two types:

1. **Function Components** (recommended)
2. **Class Components** (legacy)

### JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like code in React:

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

### Props

Props are how we pass data from parent to child components:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="John" />
\`\`\`

## Conclusion

React is a powerful library that makes it easy to build interactive user interfaces. Start with the basics and gradually work your way up to more advanced concepts.

Happy coding! 🚀`,
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
    avatar: null,
  },
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date("2024-01-15"),
  _count: {
    comments: 23,
    upvotes: 156,
  },
};

const mockComments = [
  {
    id: "1",
    body: "This is an excellent guide! The explanations are clear and the examples are very helpful. Thank you for putting this together.",
    user: {
      name: "Sarah Chen",
      avatar: null,
    },
    createdAt: new Date("2024-01-16"),
    _count: {
      replies: 2,
      upvotes: 8,
    },
  },
  {
    id: "2",
    body: "Great introduction to React! I especially liked the section about JSX and components.",
    user: {
      name: "Mike Rodriguez",
      avatar: null,
    },
    createdAt: new Date("2024-01-17"),
    _count: {
      replies: 0,
      upvotes: 5,
    },
  },
  {
    id: "3",
    body: "Could you add more examples about hooks? That would make this guide even better!",
    user: {
      name: "Emma Wilson",
      avatar: null,
    },
    createdAt: new Date("2024-01-18"),
    _count: {
      replies: 1,
      upvotes: 3,
    },
  },
];

const mockRelatedResources = [
  {
    id: "2",
    title: "React Hooks Explained",
    type: "video",
    difficulty: "intermediate",
    tags: ["react", "hooks", "useState"],
  },
  {
    id: "3",
    title: "Building React Apps with TypeScript",
    type: "repo",
    difficulty: "intermediate",
    tags: ["react", "typescript", "frontend"],
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

interface ResourcePageProps {
  params: {
    id: string;
  };
}

export default function ResourcePage({ params }: ResourcePageProps) {
  // In real app, fetch resource data based on ID
  if (params.id !== resourceData.id) {
    notFound();
  }

  const TypeIcon = resourceTypeIcons[resourceData.type as keyof typeof resourceTypeIcons] || FileText;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/resources">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <Badge variant="outline" className="flex items-center space-x-1">
                <TypeIcon className="w-3 h-3" />
                <span>{resourceData.type}</span>
              </Badge>
              <Badge variant="outline">
                {resourceData.difficulty}
              </Badge>
              {resourceData.estimatedTime && (
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{resourceData.estimatedTime}min</span>
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold tracking-tight mb-3">
              {resourceData.title}
            </h1>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>by {resourceData.creator.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatRelativeTime(resourceData.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{resourceData._count.comments} comments</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-4 h-4" />
                <span>{resourceData._count.upvotes} likes</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {resourceData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link
              href={`/clubs/${resourceData.club.slug}`}
              className="text-primary hover:underline"
            >
              From {resourceData.club.name}
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Flag className="w-4 h-4 mr-2" />
              Report
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Resource Content */}
          <Card className="mb-8">
            <CardContent className="p-6">
              {resourceData.url && (
                <div className="mb-6">
                  <Button asChild>
                    <a
                      href={resourceData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Original Resource
                    </a>
                  </Button>
                </div>
              )}

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                  {resourceData.content}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Comments ({mockComments.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockComments.map((comment) => (
                <div key={comment.id} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {comment.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm">
                          {comment.user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatRelativeTime(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">
                        {comment.body}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {comment._count.upvotes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                  {comment._count.replies > 0 && (
                    <div className="ml-11">
                      <Button variant="ghost" size="sm" className="text-xs">
                        View {comment._count.replies} replies
                      </Button>
                    </div>
                  )}
                </div>
              ))}

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Add a comment</h4>
                <textarea
                  className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Share your thoughts..."
                />
                <div className="flex justify-end">
                  <Button>Post Comment</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resource Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like Resource
              </Button>
              <Button variant="outline" className="w-full">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="w-full">
                <Bookmark className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </CardContent>
          </Card>

          {/* Related Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockRelatedResources.map((resource) => (
                <div key={resource.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons] && (
                      <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center">
                        {React.createElement(
                          resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons],
                          { className: "w-4 h-4" }
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/resources/${resource.id}`}
                      className="font-medium text-sm hover:text-primary transition-colors line-clamp-2"
                    >
                      {resource.title}
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {resource.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Club Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">From Club</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>
                    {resourceData.club.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Link
                    href={`/clubs/${resourceData.club.slug}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {resourceData.club.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Educational content creator
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/clubs/${resourceData.club.slug}`}>
                  View Club
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
  title: "Complete React Guide for Beginners",
  type: "article",
  content: `# Complete React Guide for Beginners

React is a powerful JavaScript library for building user interfaces, particularly web applications. This comprehensive guide will take you from React basics to advanced concepts.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components."

## Why Learn React?

- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Large Ecosystem**: Rich ecosystem of tools and libraries
- **Job Market**: High demand in the industry

## Getting Started

### 1. Setup

First, let's create a new React application using Create React App:

\`\`\`bash
npx create-react-app my-react-app
cd my-react-app
npm start
\`\`\`

### 2. Your First Component

Here's a simple React component:

\`\`\`jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
\`\`\`

## Core Concepts

### Components

Components are the building blocks of React applications. There are two types:

1. **Function Components** (recommended)
2. **Class Components** (legacy)

### JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like code in React:

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

### Props

Props are how we pass data from parent to child components:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="John" />
\`\`\`

## Conclusion

React is a powerful library that makes it easy to build interactive user interfaces. Start with the basics and gradually work your way up to more advanced concepts.

Happy coding! 🚀`,
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
    avatar: null,
  },
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date("2024-01-15"),
  _count: {
    comments: 23,
    upvotes: 156,
  },
};

const mockComments = [
  {
    id: "1",
    body: "This is an excellent guide! The explanations are clear and the examples are very helpful. Thank you for putting this together.",
    user: {
      name: "Sarah Chen",
      avatar: null,
    },
    createdAt: new Date("2024-01-16"),
    _count: {
      replies: 2,
      upvotes: 8,
    },
  },
  {
    id: "2",
    body: "Great introduction to React! I especially liked the section about JSX and components.",
    user: {
      name: "Mike Rodriguez",
      avatar: null,
    },
    createdAt: new Date("2024-01-17"),
    _count: {
      replies: 0,
      upvotes: 5,
    },
  },
  {
    id: "3",
    body: "Could you add more examples about hooks? That would make this guide even better!",
    user: {
      name: "Emma Wilson",
      avatar: null,
    },
    createdAt: new Date("2024-01-18"),
    _count: {
      replies: 1,
      upvotes: 3,
    },
  },
];

const mockRelatedResources = [
  {
    id: "2",
    title: "React Hooks Explained",
    type: "video",
    difficulty: "intermediate",
    tags: ["react", "hooks", "useState"],
  },
  {
    id: "3",
    title: "Building React Apps with TypeScript",
    type: "repo",
    difficulty: "intermediate",
    tags: ["react", "typescript", "frontend"],
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

interface ResourcePageProps {
  params: {
    id: string;
  };
}

export default function ResourcePage({ params }: ResourcePageProps) {
  // In real app, fetch resource data based on ID
  if (params.id !== resourceData.id) {
    notFound();
  }

  const TypeIcon = resourceTypeIcons[resourceData.type as keyof typeof resourceTypeIcons] || FileText;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/resources">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <Badge variant="outline" className="flex items-center space-x-1">
                <TypeIcon className="w-3 h-3" />
                <span>{resourceData.type}</span>
              </Badge>
              <Badge variant="outline">
                {resourceData.difficulty}
              </Badge>
              {resourceData.estimatedTime && (
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{resourceData.estimatedTime}min</span>
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold tracking-tight mb-3">
              {resourceData.title}
            </h1>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>by {resourceData.creator.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatRelativeTime(resourceData.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{resourceData._count.comments} comments</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-4 h-4" />
                <span>{resourceData._count.upvotes} likes</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {resourceData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link
              href={`/clubs/${resourceData.club.slug}`}
              className="text-primary hover:underline"
            >
              From {resourceData.club.name}
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Flag className="w-4 h-4 mr-2" />
              Report
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Resource Content */}
          <Card className="mb-8">
            <CardContent className="p-6">
              {resourceData.url && (
                <div className="mb-6">
                  <Button asChild>
                    <a
                      href={resourceData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Original Resource
                    </a>
                  </Button>
                </div>
              )}

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                  {resourceData.content}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Comments ({mockComments.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockComments.map((comment) => (
                <div key={comment.id} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {comment.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm">
                          {comment.user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatRelativeTime(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">
                        {comment.body}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {comment._count.upvotes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                  {comment._count.replies > 0 && (
                    <div className="ml-11">
                      <Button variant="ghost" size="sm" className="text-xs">
                        View {comment._count.replies} replies
                      </Button>
                    </div>
                  )}
                </div>
              ))}

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Add a comment</h4>
                <textarea
                  className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Share your thoughts..."
                />
                <div className="flex justify-end">
                  <Button>Post Comment</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resource Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like Resource
              </Button>
              <Button variant="outline" className="w-full">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="w-full">
                <Bookmark className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </CardContent>
          </Card>

          {/* Related Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockRelatedResources.map((resource) => (
                <div key={resource.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons] && (
                      <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center">
                        {React.createElement(
                          resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons],
                          { className: "w-4 h-4" }
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/resources/${resource.id}`}
                      className="font-medium text-sm hover:text-primary transition-colors line-clamp-2"
                    >
                      {resource.title}
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {resource.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Club Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">From Club</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>
                    {resourceData.club.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Link
                    href={`/clubs/${resourceData.club.slug}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {resourceData.club.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Educational content creator
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/clubs/${resourceData.club.slug}`}>
                  View Club
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
