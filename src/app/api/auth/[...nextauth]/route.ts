import NextAuth from 'next-auth/next';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import {OpenAPI, TokenObtainPair, TokenService} from '@/app/lib/client';

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
      async authorize(credentials: TokenObtainPair): Promise<TokenObtainPair> {
        try {
          const user: TokenObtainPair = await TokenService.tokenLoginCreate({
            email: credentials.email,
            password: credentials.password,
          });
          if (user && user.access) {
            OpenAPI.TOKEN = user.access;
            return user;
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
    async signIn({ account }) {
      if (account?.id_token) {
        // In this case, we are login through Google,
        // so we have to set up the api token here
        const tokenData: TokenObtainPair = await TokenService.tokenGoogleCreate({
          auth_token: account?.id_token,
        });
        OpenAPI.TOKEN = tokenData.access;
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
