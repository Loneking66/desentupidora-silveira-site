import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Desentupidora Silveira | Atendimento 24h em Presidente Prudente",
   description: "Desentupidora em Presidente Prudente e região. Atendimento 24 horas para desentupimentos residenciais e comerciais, com rapidez, transparência e visita sem custo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
