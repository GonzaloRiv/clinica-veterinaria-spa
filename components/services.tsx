import {
  Stethoscope,
  Syringe,
  Scissors,
  HeartPulse,
  AlertCircle,
  TestTubes,
  ScanLine,
  Bone,
  Cat,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Consultas y Controles",
    description: "Evaluación completa del estado de salud de tu mascota con profesionales especializados.",
  },
  {
    icon: Syringe,
    title: "Vacunas",
    description: "Programas de vacunación actualizados para proteger a tu mascota en cada etapa de su vida.",
  },
  {
    icon: Scissors,
    title: "Cirugías",
    description: "Procedimientos quirúrgicos con equipos de última generación y monitoreo constante.",
  },
  {
    icon: HeartPulse,
    title: "Especialidades",
    description: "Consultas de especialidad con médicos veterinarios altamente calificados.",
  },
  {
    icon: AlertCircle,
    title: "Urgencias",
    description: "Atención de urgencia cuando tu mascota más lo necesita. Estamos aquí para ayudarte.",
  },
  {
    icon: TestTubes,
    title: "Exámenes de Laboratorio",
    description: "Análisis de sangre, citologías y exámenes de orina con resultados rápidos y precisos.",
  },
  {
    icon: ScanLine,
    title: "Ecografías",
    description: "Diagnóstico por imagen no invasivo para evaluar órganos internos con precisión.",
  },
  {
    icon: Bone,
    title: "Radiografías",
    description: "Imágenes diagnósticas de alta resolución para evaluar estructuras óseas y tejidos.",
  },
  {
    icon: Cat,
    title: "Hospitalización",
    description: "Áreas separadas para felinos y caninos con monitoreo permanente del equipo médico.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nuestros Servicios</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Todo lo que tu mascota necesita, en un solo lugar
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Contamos con el equipamiento y los profesionales para ofrecer atención integral, desde controles preventivos hasta cirugías complejas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
