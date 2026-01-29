import type { Metadata } from "next";
import "./globals.css";

// Import fonts directly from the installed packages
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/500.css";
import "@fontsource/jetbrains-mono/400.css";

export const metadata: Metadata = {
  title: "Spaceion | The Universal Runtime for AI Agents",
  description: "Deploy once. Run anywhere. Zero friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen grid-bg">{children}</body>
    </html>
  );
}
