import type { ReactNode } from 'react';

export const metadata = {
  title: 'Vocabara™',
  description: 'The Operating System for Language Learners.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
