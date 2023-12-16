import {MainNavbar} from '@/components/Header/MainNavbar';
import './globals.css';
import {Inter} from 'next/font/google';
import {Footer} from '@/components/Footer/Footer';
import {Analytics} from '@vercel/analytics/react';
import SessionProvider from '@/SessionProvider';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Vallecas Rugby Union',
  description: 'VRU webpage',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="es">
    <body className={inter.className}>
      <SessionProvider>
        <MainNavbar></MainNavbar>
        {children}
        <Analytics/>
        <Footer></Footer>
      </SessionProvider>
    </body>
    </html>
  );
}
