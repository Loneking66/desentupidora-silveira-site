import StatsCard from "./StatsCard";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-[80]">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <p className="text-orange-500 font-semibold mb-4">
          PRESIDENTE PRUDENTE E REGIÃO
        </p>

        <h1 className="text-6xl font-black max-2-3xl">
          SEU PROBLEMA
          <span className="text-orange-500"> RESOLVIDO </span>A QUALQUER HORA
        </h1>

        <p className="text-gray-300 mt-6 max-w-1xl">
          Desentupidora especializada com atendimento 24h. Equipe altamente
          qualificada para resolver qualquer tipo de entupimento, com rapidez e
          eficiência. Serviço garantido e preços justos.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 px-5 py-3 rounded-md font-semibold">
            Chamar Agora
          </button>

          <button className="bg-slate-800 px-5 py-3 rounded-md font-semibold">
            Ver Serviços
          </button>

          <StatsCard />
        </div>
      </div>
    </section>
  );
}
