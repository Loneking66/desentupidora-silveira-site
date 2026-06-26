import { Phone } from "lucide-react";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-black tracking-wide">
          <span>DESENTUPIDORA</span>{" "}
          <span className="text-orange-500">SILVEIRA</span>
        </h1>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            href="#services"
            className="hover:text-orange-500 transition-colors"
          >
            Serviços
          </NavLink>

          <NavLink
            href="#about"
            className="hover:text-orange-500 transition-colors"
          >
            Sobre
          </NavLink>

          <NavLink
            href="#testimonials"
            className="hover:text-orange-500 transition-colors"
          >
            Avaliações
          </NavLink>

          <NavLink
            href="#contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contato
          </NavLink>
        </nav>

        <a
          href="https://wa.me/5518997405172"
          target="_blank"
          className="hidden sm:flex items-center gap-2 btn-primary"
        >
          <Phone size={18} />
          Falar Agora
        </a>
      </div>
    </header>
  );
}
