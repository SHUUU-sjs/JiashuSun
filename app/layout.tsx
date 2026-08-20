import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Jiashu Sun — Designer",
    description: "Jiashu Sun is an interdisciplinary designer making useful things feel human.",
    openGraph: {
      title: "Jiashu Sun — Designer",
      description: "Making useful things feel human.",
      images: [{ url: imageUrl, width: 1731, height: 909, alt: "Jiashu Sun — Designer" }],
    },
    twitter: { card: "summary_large_image", title: "Jiashu Sun — Designer", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
