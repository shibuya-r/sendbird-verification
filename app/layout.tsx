import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sendbird multi tenant verification",
  description: "Sendbird multi tenant verification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body >{children}</body>
    </html>
  );
}
