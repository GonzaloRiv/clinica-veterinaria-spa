import Image from "next/image"

export function Gallery() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nuestras Instalaciones</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Equipamiento de primer nivel para tu mascota
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:h-full">
            <Image
              src="/images/hero-vet.jpg"
              alt="Veterinaria atendiendo paciente"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 transition-opacity hover:opacity-0" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-card/90 px-4 py-2 backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">Consultas especializadas</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/surgery-room.jpg"
              alt="Sala de cirugía veterinaria"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 transition-opacity hover:opacity-0" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-card/90 px-4 py-2 backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">Quirófano moderno</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/hospitalization.jpg"
              alt="Área de hospitalización felina"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 transition-opacity hover:opacity-0" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-card/90 px-4 py-2 backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">Hospitalización</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
