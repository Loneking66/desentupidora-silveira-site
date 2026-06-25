const testimonials = [
  {
    name: "Cliente residencial",
    text: "Atendimento rápido, explicou tudo antes de começar e resolveu o problema no mesmo dia.",
  },
  {
    name: "Comércio local",
    text: "Serviço profissional e preço justo. A equipe chegou rápido e deixou tudo funcionando.",
  },
  {
    name: "Cliente em Presidente Prudente",
    text: "Gostei da transparência no orçamento e da visita sem custo. Recomendo.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 font-semibold mb-4">
          DEPOIMENTOS
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 border border-gray-200 rounded-lg"
            >
              <p className="text-orange-500 text-xl mb-4">★★★★★</p>

              <p className="text-gray-600 mb-6">
                {testimonial.text}
              </p>

              <h3 className="text-slate-900 font-bold">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}