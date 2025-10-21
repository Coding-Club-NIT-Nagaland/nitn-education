// src/lib/types/index.ts
export type UserRole = 'guest' | 'member' | 'club_admin' | 'supervisor' | 'platform_admin';

export type ResourceType = 'article' | 'video' | 'repo' | 'slides' | 'dataset' | 'notebook';
export type ResourceStatus = 'draft' | 'pending' | 'published' | 'rejected';

export type RoadmapVisibility = 'private' | 'club' | 'public';
export type ModuleType = 'article' | 'video' | 'task' | 'project' | 'quiz';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Club {
  id: string;
  slug: string;
  name: string;
  about?: string;
  bannerUrl?: string;
  supervisorId: string;
  supervisor?: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface Membership {
  id: string;
  userId: string;
  clubId: string;
  role: 'member' | 'admin';
  user?: User;
  club?: Club;
  joinedAt: Date;
}

export interface Roadmap {
  id: string;
  clubId: string;
  title: string;
  description?: string;
  visibility: RoadmapVisibility;
  version: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  club?: Club;
  creator?: User;
  modules?: Module[];
  _count?: {
    modules: number;
    followers: number;
  };
}

export interface Module {
  id: string;
  roadmapId: string;
  position: number;
  type: ModuleType;
  title: string;
  content?: string;
  contentRef?: string; // URL or reference to external content
  duration?: number; // in minutes
  isRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
  roadmap?: Roadmap;
}

export interface Resource {
  id: string;
  clubId: string;
  title: string;
  type: ResourceType;
  content?: string;
  url?: string;
  tags: string[];
  status: ResourceStatus;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: number; // in minutes
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  club?: Club;
  creator?: User;
  comments?: Comment[];
  _count?: {
    comments: number;
    upvotes: number;
  };
}

export interface Event {
  id: string;
  clubId: string;
  title: string;
  description?: string;
  startAt: Date;
  endAt: Date;
  location?: string;
  externalLink?: string;
  maxAttendees?: number;
  isVirtual: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  club?: Club;
  creator?: User;
  attendees?: EventAttendee[];
  _count?: {
    attendees: number;
  };
}

export interface EventAttendee {
  id: string;
  eventId: string;
  userId: string;
  status: 'registered' | 'attended' | 'cancelled';
  registeredAt: Date;
  event?: Event;
  user?: User;
}

export interface Comment {
  id: string;
  resourceId: string;
  userId: string;
  body: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
  resource?: Resource;
  user?: User;
  parent?: Comment;
  replies?: Comment[];
  _count?: {
    replies: number;
    upvotes: number;
  };
}

export interface Notification {
  id: string;
  userId: string;
  type: 'approval' | 'comment' | 'event_reminder' | 'mention';
  title: string;
  message: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: Date;
  user?: User;
}

export interface Analytics {
  id: string;
  resourceId?: string;
  userId?: string;
  clubId?: string;
  action: 'view' | 'like' | 'share' | 'complete' | 'enroll';
  metadata?: Record<string, any>;
  timestamp: Date;
}

export interface SearchFilters {
  query?: string;
  tags?: string[];
  difficulty?: string[];
  type?: ResourceType[];
  clubId?: string;
  status?: ResourceStatus[];
}

export interface SearchResult {
  resources: Resource[];
  roadmaps: Roadmap[];
  total: number;
  facets: {
    tags: Array<{ value: string; count: number }>;
    difficulty: Array<{ value: string; count: number }>;
    type: Array<{ value: string; count: number }>;
  };
}
