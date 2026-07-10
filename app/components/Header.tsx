import { Phone } from "lucide-react";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="whitespace-nowrap text-lg font-black tracking-wide md:text-2xl"
          aria-label="Ir para o início da página"
        >
          <span>DESENTUPIDORA</span>{" "}
          <span className="text-orange-500">SILVEIRA</span>
        </a>

        <nav
          className="hidden items-center gap-8 font-medium md:flex"
          aria-label="Navegação principal"
        >
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#testimonials">Avaliações</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </nav>

        <a
          href="https://wa.me/5518997405172"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden items-center gap-2 sm:flex"
          aria-label="Falar com a Desentupidora Silveira pelo WhatsApp"
        >
          <Phone size={18} aria-hidden="true" />
          Falar Agora
        </a>
      </div>
    </header>
  );
}