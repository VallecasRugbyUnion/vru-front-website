import NextAuth from 'next-auth/next';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import apiClient from '../../../lib/apiClient';
import { tokenData } from '@/app/lib/types';

const authOptions: AuthOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        try {
          const user = await apiClient.login(credentials?.email, credentials?.password);
          if (user && user.access) {
            return { ...user, email: credentials?.email };
          }

          throw new Error('Invalid credentials');
        } catch (error) {
          console.error('Error during authentication:', error);
          throw new Error(String(error));
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.id_token) {
        const tokenData: tokenData = await apiClient.googleLogin(account?.id_token);
        account.access_token = tokenData.access;
        account.refresh_token = tokenData.refresh;
      }
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token = Object.assign({}, token, {
          access_token: account.access_token,
          refresh_token: account.refresh_token,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user = token;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
