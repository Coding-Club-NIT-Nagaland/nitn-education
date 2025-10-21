// src/components/club-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  ExternalLink,
  MapPin,
  Users,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Club } from "@/lib/types";
import { formatRelativeTime } from "@/lib/utils";

interface ClubCardProps {
  club: Club & {
    _count?: {
      members: number;
      roadmaps: number;
      resources: number;
      events: number;
    };
  };
  className?: string;
}

export function ClubCard({ club, className }: ClubCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-200 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={club.bannerUrl || ""} alt={club.name} />
            <AvatarFallback className="text-lg font-semibold">
              {club.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg leading-tight">
              <Link
                href={`/clubs/${club.slug}`}
                className="hover:text-primary transition-colors"
              >
                {club.name}
              </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {club.about || "No description available"}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{club._count?.members || 0} members</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>{club._count?.roadmaps || 0} roadmaps</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>{club._count?.resources || 0} resources</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{club._count?.events || 0} events</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted-foreground">
            Created {formatRelativeTime(club.createdAt)}
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/clubs/${club.slug}`}>
              View Club
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
