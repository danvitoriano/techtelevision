import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portal de Notícias | Seu portal de informações",
  description: "Fique por dentro das últimas notícias e acontecimentos",
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
        <main className="min-h-screen bg-[#f6f6f6]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
