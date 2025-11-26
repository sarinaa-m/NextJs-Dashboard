import type { Metadata } from 'next';
import './globals.css';
import Providers from './Provider';

export const metadata: Metadata = {
  title: 'Dashboard App | Next.js 14',
  description: 'Modern dashboard with form validation, API integration, and theme toggle',
  keywords: ['dashboard', 'nextjs', 'react', 'tailwind', 'typescript', 'form validation'],
  authors: [{ name: 'Sarina Moayedi' }],
  openGraph: {
    title: 'Dashboard App',
    description: 'Modern dashboard application built with Next.js 14 and TypeScript',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}