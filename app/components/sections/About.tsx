import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/about/team.jpg"
            alt="Equipe da Desentupidora Silveira trabalhando"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <SectionTitle
            eyebrow="QUEM SOMOS"
            title="ATENDIMENTO RÁPIDO, HONESTO E PROFISSIONAL"
            description="A Desentupidora Silveira atende Presidente Prudente e região com soluções rápidas para desentupimentos residenciais e comerciais."
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="https://wa.me/5518997405172" external>
              <Phone size={18} />
              Falar com a Silveira
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
