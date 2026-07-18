import { Phone } from "lucide-react";
import NavLink from "../ui/NavLink";
import Button from "../ui/Button";
import { navigation } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="#top"
          className="flex items-center gap-3 whitespace-nowrap -mt-1"
          aria-label="Ir para o início da página"
        >
          <Image
            src="/images/logo/logo-icon.png"
            alt="Logo da Desentupidora Silveira"
            width={52}
            height={52}
            className="h-20 w-20 object-contain shrink-0 -mt-2"
            priority
          />

          <div className="flex flex-col justify-center leading-none">
            <p className="text-sm font-bold tracking-wide text-white md:text-base">
              Desentupidora
            </p>

            <p className="text-xl font-black tracking-wide text-orange-500 md:text-2xl">
              Silveira
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 font-medium md:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button
          href="https://wa.me/5518997405172"
          external
          className="h-11 w-11 shrink-0 p-0 sm:h-auto sm:w-auto sm:px-6 sm:py-3"
          aria-label="Falar com a Desentupidora Silveira pelo WhatsApp"
        >
          <Phone size={20} className="shrink-0 text-white" aria-hidden="true" />

          <span className="hidden sm:inline">Falar agora</span>
        </Button>
      </div>
    </header>
  );
}
