import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import apiClient from '../../../lib/apiClient';  // Updated path to the apiClient.tsx file

const authOptions: AuthOptions = {
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials:any): Promise<any> {
                try {
                    console.log("Credentials:", credentials);
                    const user = await apiClient.login(credentials?.email, credentials?.password);
                    console.log("User:", user);
                    if (user && user.access) {
                        return { ...user, email: credentials?.email };
                    }

                    throw new Error('Invalid credentials');
                } catch (error) {
                    console.error("Error during authentication:", error);
                    throw new Error(String(error));
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };