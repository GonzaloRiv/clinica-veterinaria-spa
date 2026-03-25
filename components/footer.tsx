import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">HVI</span>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-background leading-tight">Hospital Veterinario</p>
                <p className="text-xs text-background/60 tracking-wider uppercase">Integral</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Siete años cuidando a tus mascotas con los más altos estándares médicos en Viña del Mar.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">Servicios</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Consultas y Controles",
                "Vacunas",
                "Cirugías",
                "Especialidades",
                "Urgencias",
                "Hospitalización",
              ].map((item) => (
                <li key={item}>
                  <Link href="#servicios" className="text-sm text-background/60 transition-colors hover:text-background">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">Diagnóstico</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Exámenes de Sangre",
                "Citologías",
                "Exámenes de Orina",
                "Ecografías",
                "Radiografías",
              ].map((item) => (
                <li key={item}>
                  <Link href="#servicios" className="text-sm text-background/60 transition-colors hover:text-background">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0" />
                Tamaya 42, Viña del Mar
              </li>
              <li>
                <Link href="tel:+56930894678" className="flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background">
                  <Phone className="h-4 w-4 shrink-0" />
                  +56 9 3089 4678
                </Link>
              </li>
              <li>
                <Link href="mailto:admi@hospitalveterinariointegral.com" className="flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background">
                  <Mail className="h-4 w-4 shrink-0" />
                  admi@hospitalveterinariointegral.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/hospitalveterinariointegral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  @hospitalveterinariointegral
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-background/40">
            {'© 2026 Hospital Veterinario Integral. Todos los derechos reservados.'}
          </p>
          <p className="text-xs text-background/40">
            Viña del Mar, Chile
          </p>
        </div>
      </div>
    </footer>
  )
}
