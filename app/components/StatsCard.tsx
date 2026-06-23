export default function StatsCard() {
  return (
    <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg">
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

          <p className="text-gray-400">Anos de Experiência</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">1000+</h3>
          <p className="text-gray-400">Clientes Atendidos</p>
        </div>
        <div className="mt-8 bg-slate-800 p-4 rounded">
          <p className="text-sm text-gray-400">Ligue Agora</p>

          <p className="text=xl font-bold">(18) 99740-5172</p>
        </div>
      </div>
    </div>
  );
}
