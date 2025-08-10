/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'
import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    refreshToken?: string
    role?: string
    user: {
      id: string
      email: string
      role?: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    accessToken?: string
    refreshToken?: string
    role?: string
    firstName?: string
    lastName?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string
    refreshToken?: string
    role?: string
    user?: any
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Call your existing backend API
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          })

          const responseData = await response.json()

          if (response.ok && responseData.success) {
            // Your backend returns the token as a string in responseData.data
            const token = responseData.data;

            // Decode the JWT token to get user info
            const { jwtDecode } = await import('jwt-decode')
            interface DecodedToken {
              id?: string;
              email?: string;
              firstName?: string;
              lastName?: string;
              role?: string;
              [key: string]: any;
            }

            let tokenData: DecodedToken | null = null;

            try {
              tokenData = jwtDecode<DecodedToken>(token);
            } catch (decodeError) {
              console.error('JWT decode error:', decodeError);
              return null;
            }

            if (!tokenData) {
              return null;
            }

            // Return user object with all necessary data
            return {
              id: tokenData.id || 'user-id',
              email: tokenData.email || credentials.email,
              firstName: tokenData.firstName,
              lastName: tokenData.lastName,
              accessToken: token, // The token string from backend
              refreshToken: token, // Using same token as refresh for now
              role: tokenData.role,
              name: `${tokenData.firstName || ''} ${tokenData.lastName || ''}`.trim(),
              ...tokenData
            }
          }
          return null
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and refresh_token to the token right after signin
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.role = user.role
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.userId = user.id
        // Store user data directly in the token
        token.user = {
          id: user.id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          name: user.name
        }
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.role = token.role
      session.user = {
        ...session.user,
        id: token.userId || token.user?.id,
        role: token.role,
        firstName: token.firstName,
        lastName: token.lastName,
        ...token.user
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after successful login
      if (url === baseUrl || url === `${baseUrl}/login`) {
        return `${baseUrl}/dashboard`
      }
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
