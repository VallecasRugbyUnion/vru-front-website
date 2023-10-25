
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { auth } from "@/Firebase";

const authOptions: AuthOptions = {
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {                
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(userCredential => {                           
                        if (userCredential.user) {
                            if (!userCredential.user.emailVerified) {
                                throw new Error('Please verify your email before signing in.');
                            }
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch(error => (console.log(error)))
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;                        
                    });
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }