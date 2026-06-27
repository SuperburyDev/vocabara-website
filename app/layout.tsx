export const metadata = {
  title: 'Vocabara™',
  description: 'The Operating System for Language Learners.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
