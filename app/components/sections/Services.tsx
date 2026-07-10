import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Desentupimento de Pias",
    description: "Restauramos o fluxo da sua pia com rapidez e eficiência.",
  },
  {
    title: "Desentupimento de Ralos",
    description: "Eliminamos obstruções em ralos residenciais e comerciais.",
  },
  {
    title: "Desentupimentos de Vasos Sanitários",
    description: "Solução rápida e eficaz para vasos sanitários entupidos.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-5xl font-black text-slate-900 mb-12">
          O QUE FAZEMOS
        </p>

        <h2 className="text-5xl font-black text-slate-900 mb-12">
          SERVIÇOS QUE RESOLVEM
          <span className="text-orange-500"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-0">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
