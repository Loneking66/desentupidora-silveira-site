"use client";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({
  href,
  children,
  className,
}: NavLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const target = document.querySelector(href);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}