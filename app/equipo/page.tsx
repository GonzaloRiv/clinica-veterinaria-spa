import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AgendarButton } from "@/components/agendarButton"

const team = [
  {
    name: "Dra. Andrea Gil",
    specialty: "Dermatología",
    image: "/images/Especialistas/DermatologiaDraAndreaGil.webp",
  },
  {
    name: "Dra. Natalia Balboran",
    specialty: "Especialidad Felino",
    image: "/images/Especialistas/Especialidad Felino Dra Natalia Balboran.webp",
  },
  {
    name: "Dr. Manuel Orellana",
    specialty: "Nefrología",
    image: "/images/Especialistas/Nefrologo Dr Manuel orellana.webp",
  },
  {
    name: "Dr. Juan Pablo Balboran",
    specialty: "Neurología",
    image: "/images/Especialistas/Neurologia Dr Juan Pablo Balboran.webp",
  },
  {
    name: "Dr. Rodrigo Santiago",
    specialty: "Odontología",
    image: "/images/Especialistas/Odontologia Dr Rodrigo Santiago.webp",
  },
   {
    name: "Dra. Angela Arevalo",
    specialty: "Cardiología",
    image: "/images/Especialistas/Angela-Arevalo-Cardiologa.webp",
  },
   {
    name: "Dra. Ayline Sanchez",
    specialty: "Técnico de Hospital",
    image: "/images/Especialistas/Ayline Sanchez Tecnico hospital.webp",
  },
   {
    name: "Dr. Claudio Medina",
    specialty: "Hospital",
    image: "/images/Especialistas/Claudio-Medina-Hospital.webp",
  },
   {
    name: "Dra. Constanza Ruiz",
    specialty: "Consulta General",
    image: "/images/Especialistas/Constanza-ruiz-consulta-general.webp",
  },
   {
    name: "Dra. Danahe Durán",
    specialty: "Técnico de Hospital",
    image: "/images/Especialistas/Danahe Duran Tecnico Hospital.webp",
  },
  {
    name: "Dra. Daniela D",
    specialty: "Oncología",
    image: "/images/Especialistas/Daniela-D-Oncologa.webp",
  },
  {
    name: "Dra. Fanny Ibacache",
    specialty: "Médico de Hospital",
    image: "/images/Especialistas/Fanny-Ibacache-Medico-de-hospital.webp",
  },
  {
    name: "Dra. Francisca Galindo",
    specialty: "Jefe de Técnicos",
    image: "/images/Especialistas/Danahe Duran Tecnico Hospital.webp",
  },
  {
    name: "Dra. Grishka Berrios",
    specialty: "Anestesiología",
    image: "/images/Especialistas/Grishka-Berios-Anestesiologa.webp",
  },
  {
    name: "Dra. Katherine Ávalos",
    specialty: "Anestesiología",
    image: "/images/Especialistas/Katherine-Avalos-anestesiologa.webp",
  },
  {
    name: "Dr. Leonardo Despecci",
    specialty: "Técnico de Hospital",
    image: "/images/Especialistas/Leonardo Despecci Tecnico de Hospital.webp",
  },
  {
    name: "Dra. Perla Tapia",
    specialty: "Técnico Área de Cirugía",
    image: "/images/Especialistas/Perla Tapia Tecnico area cirugia.webp",
  },
  {
    name: "Dra. Susana Melo",
    specialty: "Cirujana",
    image: "/images/Especialistas/Susana-Melo-cirujana.webp",
  },
  {
    name: "Dr. Vicente Sanhueza",
    specialty: "Oncología",
    image: "/images/Especialistas/Vicente-sanhueza-oncologo.webp",
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
            <p className="mt-3 text-primary-foreground/80 mb-3">
              Nuestro equipo está disponible para atender a tu mascota con el cuidado
              que merece.
            </p>
            <AgendarButton variant="cta" />
          </div>
        </div>
      </section>
    </main>
  )
}