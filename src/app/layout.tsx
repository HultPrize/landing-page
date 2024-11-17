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
  metadataBase: new URL("https://hultprize.epn.edu.ec/"),
  openGraph:{
    title: "Hult Prize at EPN",
    description:
      "The greateast competition for social entrepreneurship in the world is at EPN.",
  }
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
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
