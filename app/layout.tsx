import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://kapiara.com'),
  title: 'Kapiara™',
  description: 'The Operating System for Language Learners.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kapiara™',
    description: 'The Operating System for Language Learners.',
    url: 'https://kapiara.com',
    siteName: 'Kapiara',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kapiara™',
    description: 'The Operating System for Language Learners.',
    creator: '@kapiaraapp',
    site: '@kapiaraapp',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
