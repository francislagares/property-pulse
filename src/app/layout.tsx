import { Inter } from 'next/font/google';

import { NavBar } from '@/components';

import '@/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rentals, find rentals, find properties',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
