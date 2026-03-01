import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-12 sm:p-16 lg:p-20">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              Tu mascota merece la mejor atención
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              Agenda una consulta hoy y conoce a nuestro equipo. Estamos preparados para cuidar de quienes más quieres.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6"
              >
                <Link href="https://wa.me/56956046733" target="_blank" rel="noopener noreferrer">
                  Agendar por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8 py-6"
              >
                <Link href="tel:+56930894678">
                  Llamar ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
