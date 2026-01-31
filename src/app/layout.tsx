import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "노래하는 놀이터 : 노놀 NONOL",
  description: "NONOL : 꿈꾸는 뮤지션들의 노래하는 놀이터 노놀은 꿈을 키워가는 인디뮤지션들을 위한 무대입니다.",
  keywords: "노래하는 놀이터, 노놀, NONOL, 인디뮤지션, 뮤지션, 무대",
  authors: [{ name: "NONOL" }],
  openGraph: {
    title: "노래하는 놀이터 : 노놀 NONOL",
    description: "NONOL : 꿈꾸는 뮤지션들의 노래하는 놀이터 노놀은 꿈을 키워가는 인디뮤지션들을 위한 무대입니다.",
    url: "https://nonol.kr",
    siteName: "노놀 NONOL",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
