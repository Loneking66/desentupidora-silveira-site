type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-orange-500">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}