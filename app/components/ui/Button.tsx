import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105",
    secondary: "bg-slate-800 text-white hover:bg-slate-700 hover:scale-105",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
