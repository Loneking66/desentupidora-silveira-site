const testimonials = [
  {
    name: "Cliente Google",
    text: "Atendimento rápido, serviço bem feito e preço justo. Recomendo!",
  },
  {
    name: "Cliente Google",
    text: "Chegaram rápido e resolveram o problema no mesmo dia.",
  },
  {
    name: "Cliente Google",
    text: "Profissionais educados, explicaram tudo e fizeram um ótimo serviço.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 font-semibold mb-4">AVALIAÇÕES</p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              CLIENTES QUE CONFIAM
              <span className="text-orange-500"> NA SILVEIRA</span>
            </h2>

            <p className="text-gray-600 mt-4">
              ★★★★★ 5.0 no Google com 16 avaliações reais.
            </p>
          </div>

          <a
            href="https://www.google.com/search?client=firefox-b-d&hs=pE9p&sca_esv=f17a0ff9fe0aacfd&sxsrf=APpeQnu9z8EbHitx373IAOQpoNMiZ6Sy6A:1782479433192&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_yT5bo5ufarDS8wLsqGZORju6Xa55lrfr2fkbkOuCEsDEuF2nvs28v0783WGQS0K8zpABqv-iirHCwb-k7Gf1MBILFwbjI5Qox74oRHfjo6TXtUFLg%3D%3D&q=Desentupidora+Silveira+Cr%C3%ADticas&sa=X&ved=2ahUKEwiO9Lyr_aSVAxU1ArkGHf1aNMwQ0bkNegQIFBAF&biw=1920&bih=927&dpr=1"
            target="_blank"
            className="bg-slate-900 text-white px-6 py-4 rounded-md font-semibold text-center"
          >
            Ver avaliações no Google
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.text}
              className="bg-white p-8 border border-gray-200 rounded-lg"
            >
              <p className="text-orange-500 text-xl mb-4">★★★★★</p>

              <p className="text-gray-600 mb-6">
                &quot;{testimonial.text}&quot;
              </p>

              <h3 className="text-slate-900 font-bold">{testimonial.name}</h3>

              <p className="text-gray-400 text-sm mt-1">
                Avaliação verificada no Google
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
