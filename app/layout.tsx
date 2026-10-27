import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "OHI Xplore",
  description: "Online Health Information Exploration Challenges",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
