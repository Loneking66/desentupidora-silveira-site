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
    label: "Google",
  },
  {
    icon: CheckCircle2,
    value: "16",
    label: "Avaliações",
  },
];

export default function StatsOverlay() {
  return (
    <div className="rounded-xl border border-white/15 bg-slate-950/75 px-4 py-4 shadow-xl backdrop-blur-md">
      <div className="grid grid-cols-3 gap-2">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon
              size={18}
              className="mx-auto mb-2 text-orange-500"
              aria-hidden="true"
            />

            <p className="text-lg font-black text-white">{value}</p>

            <p className="mt-1 text-[11px] leading-4 text-slate-300">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}