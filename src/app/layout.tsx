import type { Metadata } from "next";
// [핵심] 아래 라인이 있는지 확인하고 없다면 추가하십시오.
import "./globals.css";

export const metadata: Metadata = {
  title: "썸 스타일 테스트",
  description: "나는 과연 어떤 스타일일까?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}