// src/lib/auth.ts
import { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// Extended types for our custom properties
interface ExtendedUser extends User {
  role: string;
}

interface ExtendedSession extends Session {
  user: ExtendedUser;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // For demo purposes, accept any email/password combination
        // In production, this would connect to a database
        if (credentials?.email && credentials?.password) {
          return {
            id: "demo-user-id",
            email: credentials.email,
            name: "Demo User",
            role: "member",
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && 'role' in user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }): Promise<ExtendedSession> {
      if (token && session.user) {
        // Extend the session user object with our custom properties
        session.user.id = token.sub || "demo-user-id";
        session.user.role = token.role || "member";
      }
      return session as ExtendedSession;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-key",
};
