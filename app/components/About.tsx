import Image from "next/image";

export default function About() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/about/team.jpg"
            alt="Equipe da Desentupidora Silveira trabalhando"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-orange-500 font-semibold mb-4">QUEM SOMOS</p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            ATENDIMENTO RÁPIDO, HONESTO E PROFISSIONAL
          </h2>

          <p className="text-gray-300 mb-6">
            A Desentupidora Silveira atende Presidente Prudente e região com
            soluções rápidas para desentupimentos residenciais e comerciais.
          </p>

          <p className="text-gray-300 mb-8">
            Nosso foco é oferecer um serviço claro, eficiente e com visita sem
            custo, ajudando o cliente a resolver o problema sem complicação.
          </p>

          <button className="bg-orange-500 px-6 py-4 rounded-md font-semibold">
            Falar com a Silveira
          </button>
        </div>
      </div>
    </section>
  );
}
