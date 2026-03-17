import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--ff-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--ff-sans',
});

export const metadata = {
  title: "ALIVE - Women's Retreat",
  description: 'A unique transformational retreat for women in the pine forests and Atlantic coast of Les Landes.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
