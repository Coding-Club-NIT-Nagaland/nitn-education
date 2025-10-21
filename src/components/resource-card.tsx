// src/components/resource-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Github,
  MessageCircle,
  Play,
  ThumbsUp,
  User,
  Video,
  FileText,
  Database,
  FileCode,
} from "lucide-react";
import { Resource } from "@/lib/types";
import { formatRelativeTime, truncateText } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
  showClub?: boolean;
  className?: string;
}

const resourceTypeIcons = {
  article: FileText,
  video: Video,
  repo: Github,
  slides: FileText,
  dataset: Database,
  notebook: FileCode,
};

const resourceTypeColors = {
  article: "bg-blue-100 text-blue-800",
  video: "bg-red-100 text-red-800",
  repo: "bg-gray-100 text-gray-800",
  slides: "bg-purple-100 text-purple-800",
  dataset: "bg-green-100 text-green-800",
  notebook: "bg-orange-100 text-orange-800",
};

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

export function ResourceCard({ resource, showClub = true, className }: ResourceCardProps) {
  const TypeIcon = resourceTypeIcons[resource.type] || FileText;
  const typeColor = resourceTypeColors[resource.type] || "bg-gray-100 text-gray-800";
  const difficultyColor = resource.difficulty ? difficultyColors[resource.difficulty] : "";

  return (
    <Card className={`group hover:shadow-md transition-shadow ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className={`p-1.5 rounded-md ${typeColor}`}>
              <TypeIcon className="h-4 w-4" />
            </div>
            <Badge variant="outline" className="text-xs">
              {resource.type}
            </Badge>
            {resource.difficulty && (
              <Badge variant="outline" className={`text-xs ${difficultyColor}`}>
                {resource.difficulty}
              </Badge>
            )}
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
            {truncateText(resource.title, 60)}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-3">
        {resource.content && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {truncateText(resource.content, 120)}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            {resource.estimatedTime && (
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{resource.estimatedTime}min</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-3 w-3" />
              <span>{resource._count?.comments || 0}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp className="h-3 w-3" />
              <span>{resource._count?.upvotes || 0}</span>
            </div>
          </div>
          <span>{formatRelativeTime(resource.createdAt)}</span>
        </div>

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
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
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            {showClub && resource.club && (
              <Link
                href={`/clubs/${resource.club.slug}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Avatar className="h-5 w-5">
                  <AvatarImage src={resource.club.bannerUrl} />
                  <AvatarFallback className="text-xs">
                    {resource.club.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{resource.club.name}</span>
              </Link>
            )}
          </div>

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
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/resources/${resource.id}`}>
                <BookOpen className="h-3 w-3 mr-1" />
                View
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
