import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Equipo médico altamente capacitado",
  "Equipamiento de última generación",
  "Hospitalización separada felinos y caninos",
  "Diagnóstico por imagen avanzado",
  "Atención de urgencias",
  "7 años de experiencia y confianza",
]

export function About() {
  return (
    <section id="nosotros" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/team.jpg"
                alt="Equipo del Hospital Veterinario Integral"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary p-6 text-primary-foreground shadow-xl md:block">
              <p className="text-4xl font-bold font-serif">7+</p>
              <p className="text-sm font-medium text-primary-foreground/80">Años de experiencia</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Sobre Nosotros</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Un equipo comprometido con la salud de tu mascota
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              En Hospital Veterinario Integral, nuestro objetivo es brindar atención médica de alto nivel en un ambiente cálido y confiable. Sabemos que cada paciente merece un diagnóstico preciso y un tratamiento personalizado.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nuestro hospital cuenta con todas las áreas necesarias para que los procedimientos se realicen en un mismo lugar, evitando el estrés de trasladar a tu mascota.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-base">
                <Link href="https://wa.me/56956046733" target="_blank" rel="noopener noreferrer">
                  Conoce nuestro equipo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
