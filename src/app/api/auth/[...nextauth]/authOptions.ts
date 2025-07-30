import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

// Extend the User type to include 'token'
declare module "next-auth" {
  interface User {
    token?: string;
    role?: string;
  }
  interface Session {
    accessToken?: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Call your Express server login endpoint
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await response.json();

          if (response.ok && data.success) {
            // Decode the JWT token to get user info
            interface DecodedUser {
              id?: string;
              userId?: string;
              email: string;
              name?: string;
              fullName?: string;
              role: string;
            }

            const decodedUser = jwtDecode<DecodedUser>(data.data);

            const userId = decodedUser.id || decodedUser.userId;
            if (!userId) {
              // If no userId, return null to indicate failed authentication
              return null;
            }

            return {
              id: userId,
              email: decodedUser.email,
              name: decodedUser.name || decodedUser.fullName || "",
              role: decodedUser.role,
              token: data.data, // Store the JWT token
            };
          }
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the JWT token from your Express server
      if (user) {
        token.accessToken = user.token;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken =
        typeof token.accessToken === "string" ? token.accessToken : undefined;
      session.user.role =
        typeof token.role === "string" ? token.role : undefined;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
