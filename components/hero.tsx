import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Award } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-vet.jpg"
          alt="Veterinaria atendiendo a un paciente en Hospital Veterinario Integral"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">Urgencias hasta las 1:00 am, todos los días disponibles</span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Cuidamos lo que
            <br />
            <span className="text-secondary">más quieres</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Siete años brindando atención veterinaria de integral y de excelencia en la V región, Todo lo que tu mascota necesita, en un solo lugar.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent text-base px-8 py-6"
            >
              <Link href="https://wa.me/56956046733" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground text-base px-8 py-6 backdrop-blur-sm"
            >
              <Link href="#servicios">
                Ver Servicios
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Clock className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Servicio de urgencias</p>
                <p className="text-xs text-primary-foreground/60">Todos los días</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Profesionales</p>
                <p className="text-xs text-primary-foreground/60">Calificados</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Siete Años</p>
                <p className="text-xs text-primary-foreground/60">De experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
