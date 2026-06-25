export default function Contact() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-orange-500 font-semibold mb-4">
          ENTRE EM CONTATO
        </p>

        <h2 className="text-5xl font-black mb-6">
          PRECISANDO DE UMA
          <span className="text-orange-500"> SOLUÇÃO?</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Atendimento rápido em Presidente Prudente e região.
          Solicite um orçamento sem compromisso pelo WhatsApp.
        </p>

        <a
          href="https://wa.me/5518997405172"
          target="_blank"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-8 py-5 rounded-md font-bold"
        >
          Chamar no WhatsApp
        </a>

      </div>
    </section>
  )
}