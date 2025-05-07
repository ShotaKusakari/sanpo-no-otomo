import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: 'linear-gradient(to bottom, #ADD8E6 90%, #90EE90 10%)',
          backgroundAttachment: 'fixed',
          backgroundSize: '100% 100vh',
          minHeight: '100vh',
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
