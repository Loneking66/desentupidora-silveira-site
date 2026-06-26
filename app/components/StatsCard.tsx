export default function StatsCard() {
  return (
    <div className="bg-slate-900/90 border border-slate-700 p-8 rounded-lg shadow-2xl">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-4xl font-bold text-orange-500">24h</h3>
          <p className="text-gray-400">Atendimento</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-500">100%</h3>
          <p className="text-gray-400">Satisfação</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-500">5+</h3>
          <p className="text-gray-400">Anos de experiência</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-500">1000+</h3>
          <p className="text-gray-400">Serviços</p>
        </div>
      </div>
    </div>
  );
}
