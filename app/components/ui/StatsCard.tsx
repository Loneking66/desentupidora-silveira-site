import { CheckCircle2, Clock3, Star } from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "24h",
    label: "Atendimento",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Avaliação no Google",
  },
  {
    icon: CheckCircle2,
    value: "16",
    label: "Avaliações reais",
  },
];

export default function StatsCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-3 gap-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
              <Icon size={20} aria-hidden="true" />
            </div>

            <p className="text-2xl font-black text-white">{value}</p>

            <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-5 text-center">
        <p className="text-sm text-slate-400">Presidente Prudente e região</p>

        <p className="mt-1 font-semibold text-white">Visita sem custo</p>
      </div>
    </div>
  );
}
