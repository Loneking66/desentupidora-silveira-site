export default function Header() {
  return (
    <header className="bg-slate-950 text-white">
      <div className="max-w-7x1 mx-auto px-6 flex items-center justify-between">
        <h1 className="font-bold text-xl">Silveira</h1>
        <nav className="hidden md:flex gap-8">
          <a href="#">Serviços</a>
          <a href="#">Quem Somos</a>
          <a href="#">Depoimentos</a>
          <a href="#">Contato</a>
        </nav>
        <button className="bg-orange-500 px-5 py-3 rounded-md font-semibold">
          Falar Agora
        </button>
      </div>
    </header>
  );
}
