"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Carolina M.",
    pet: "Mamá de Max",
    rating: 5,
    text: "Excelente atención, mi perrito fue operado y el equipo estuvo pendiente en todo momento. Se nota la dedicación y profesionalismo. Los recomiendo al 100%.",
  },
  {
    name: "Sebastián R.",
    pet: "Papá de Luna",
    rating: 5,
    text: "Llevé a mi gatita de urgencia y la atendieron de inmediato. El diagnóstico fue preciso y el tratamiento funcionó perfecto. Muy agradecido con todo el equipo.",
  },
  {
    name: "Patricia V.",
    pet: "Mamá de Rocky y Mia",
    rating: 5,
    text: "Los mejores veterinarios de Viña del Mar. Llevamos a nuestros dos perritos desde hace años y siempre hemos recibido una atención de primera. Son muy cercanos y explican todo.",
  },
  {
    name: "Diego L.",
    pet: "Papá de Simba",
    rating: 5,
    text: "Mi gato necesitaba una ecografía y radiografía. Todo se hizo ahí mismo, sin tener que moverlo a otro lugar. El resultado fue rápido y el trato muy humano.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonios" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Testimonios</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="mt-16">
          {/* Desktop grid */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">{t.text}</p>
                <div className="mt-6 border-t border-primary-foreground/10 pt-4">
                  <p className="font-semibold text-primary-foreground">{t.name}</p>
                  <p className="text-xs text-primary-foreground/60">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm border border-primary-foreground/10">
              <div className="flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
                {testimonials[current].text}
              </p>
              <div className="mt-6 border-t border-primary-foreground/10 pt-4">
                <p className="font-semibold text-primary-foreground">{testimonials[current].name}</p>
                <p className="text-xs text-primary-foreground/60">{testimonials[current].pet}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
                    }`}
                    aria-label={`Ir a testimonio ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
