import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  rating: number;
  testimonial: string;
};

export default function TestimonialCard({
  name,
  rating,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 border border-gray-200 rounded-lg">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={18}
            aria-hidden="true"
            className={
              index < rating
                ? "fill-orange-500 text-orange-500"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <p className="text-gray-600 mb-6">&quot;{testimonial}&quot;</p>

      <h3 className="text-slate-900 font-bold">{name}</h3>

      <p className="text-gray-400 text-sm mt-1">
        Avaliação verificada no Google
      </p>
    </div>
  );
}
