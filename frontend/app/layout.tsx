import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tech Television | Notícias de Tecnologia",
  description: "Seu portal de notícias sobre tecnologia, inovação e tendências digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white">
        <Header />
        <main className="min-h-screen bg-[#fafafa]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
