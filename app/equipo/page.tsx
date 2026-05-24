import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"

const team = [
  {
    name: "Dra. Andrea Gil",
    specialty: "Dermatología",
    image: "/images/Especialistas/DermatologiaDraAndreaGil.jpg",
  },
  {
    name: "Dra. Natalia Balboran",
    specialty: "Especialidad Felino",
    image: "/images/Especialistas/Especialidad Felino Dra Natalia Balboran.jpg",
  },
  {
    name: "Dr. Manuel Orellana",
    specialty: "Nefrología",
    image: "/images/Especialistas/Nefrologo Dr Manuel orellana.jpg",
  },
  {
    name: "Dr. Juan Pablo Balboran",
    specialty: "Neurología",
    image: "/images/Especialistas/Neurologia Dr Juan Pablo Balboran.jpg",
  },
  {
    name: "Dr. Rodrigo Santiago",
    specialty: "Odontología",
    image: "/images/Especialistas/Odontologia Dr Rodrigo Santiago.jpg",
  },
]

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-card py-20 mt-10">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nuestro Equipo
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Profesionales comprometidos con tu mascota
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground text-lg">
              Contamos con un equipo de médicos veterinarios especializados, unidos
              por el amor a los animales y el compromiso con la excelencia médica.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member, index) => (
                <div
                        key={member.name}
                        className="flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm border border-border hover:border-primary transition-colors duration-300"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            unoptimized
                            priority={index < 3}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top"
                        />
                        {/* ← overlay eliminado */}
                        </div>

                        <div className="flex flex-col p-5">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                            {member.specialty}
                        </span>
                        <h3 className="mt-1 font-serif text-lg font-bold text-foreground">
                            {member.name}
                        </h3>
                        </div>
                    </div>
                ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center rounded-2xl bg-primary px-8 py-14">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground text-balance">
              ¿Listo para agendar una consulta?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Nuestro equipo está disponible para atender a tu mascota con el cuidado
              que merece.
            </p>
            <Button
              asChild
              className="mt-8 bg-background text-foreground hover:bg-accent px-8 py-6 text-base"
            >
              <Link
                href="https://wa.me/56956046733"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}