import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Estamos aquí para ti y tu mascota
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Agenda tu hora o contacta con nosotros por cualquier consulta. Te responderemos lo antes posible.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dirección</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Tamaya 42, Viña del Mar</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Teléfono</h3>

                  <p className="text-sm text-muted-foreground">
                    WhatsApp:{" "}
                    <Link href="https://wa.me/56956046733" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      +569 56046733
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <Link href="mailto:admi@hospitalveterinariointegral.com" className="hover:text-primary transition-colors">admi@hospitalveterinariointegral.com</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horarios</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Lunes a Sábado: 8:00 - 20:00</p>
                  <p className="text-sm text-muted-foreground">Urgencias: 8:00 - 1:00 am</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/hospitalveterinariointegral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Instagram de Hospital Veterinario Integral"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-base">
                <Link href="https://wa.me/56956046733" target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.5!2d-71.55!3d-33.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de4e5e11b0cf%3A0x0!2sTamaya%2042%2C%20Vi%C3%B1a%20del%20Mar!5e0!3m2!1ses!2scl!4v1690000000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Hospital Veterinario Integral en Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
