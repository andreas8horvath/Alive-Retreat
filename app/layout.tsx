import './globals.css'; // Global styles

export const metadata = {
  title: 'ALIVE Retreat | Les Landes, France',
  description: 'A unique transformational retreat for women in the pine forests and Atlantic coast of Les Landes.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
