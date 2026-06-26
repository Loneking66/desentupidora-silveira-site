import Image from "next/image";
import StatsCard from "./StatsCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[80vh]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl -top-32 -left-32" />
        <div className="absolute w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-500 font-semibold mb-4">
            PRESIDENTE PRUDENTE E REGIÃO
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl">
            {" "}
            Seu problema
            <span className="block text-orange-500">resolvido.</span>
            <span className="block">A qualquer hora.</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl">
            Desentupidora especializada com atendimento 24h. Equipe altamente
            qualificada para resolver qualquer tipo de entupimento, com rapidez
            e eficiência. Serviço garantido e preços justos.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 px-5 py-3 rounded-md font-semibold">
              Chamar Agora
            </button>

            <button className="bg-slate-800 px-5 py-3 rounded-md font-semibold">
              Ver Serviços
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-lg aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <Image
              src="/images/hero/hero.jpg"
              alt="Equipe da Desentupidora Silveira"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-[65%] absolute -bottom-35 left-1/2 -translate-x-1/2">'
            {" "}
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
