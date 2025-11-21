import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptBase - Marketplace for AI Prompts",
  description: "Find and sell quality prompts for DALL·E, Midjourney, ChatGPT, Stable Diffusion and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
