import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import StatsCard from "../ui/StatsCard";
import Button from "../ui/Button";
import Container from "../ui/Container";
import StatsOverlay from "../ui/StatsOverlay";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[80vh] overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <Container className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-orange-500">
            Presidente Prudente e região
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Seu problema
            <span className="block text-orange-500">resolvido.</span>
            <span className="block">A qualquer hora.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Atendimento 24 horas para desentupimentos residenciais e comerciais,
            com rapidez, transparência e visita sem custo.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="https://wa.me/5518997405172" external>
              <Phone size={18} />
              Chamar agora
            </Button>

            <a
              href="#services"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Ver serviços
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center pb-24 md:pb-20">
          <div className="relative aspect-[5/4] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
            <Image
              src="/images/hero/hero1.png"
              alt="Equipe da Desentupidora Silveira em atendimento"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
<div className="absolute inset-x-3 bottom-3 md:hidden">
  <StatsOverlay />
</div>
          <div className="absolute -bottom-8 left-1/2 hidden w-[70%] -translate-x-1/2 md:block">
  <StatsCard />
</div>
        </div>
      </Container>
    </section>
  );
}
