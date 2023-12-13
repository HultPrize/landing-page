import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout/";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Hult Prize at EPN",
  description:
    "The greateast competition for social entrepreneurship in the world is at EPN.",
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
