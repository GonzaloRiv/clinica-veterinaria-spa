"use client"

import { Button } from "@/components/ui/button"

const AGENDA_URL = "https://agenda.hospitalveterinariointegral.com/"

interface AgendarButtonProps {
  variant?: "hero" | "navbar" | "cta"
}

export function AgendarButton({ variant = "navbar" }: AgendarButtonProps) {
  return (
    <>
      <Button
        asChild
        size="lg"
        className={
          variant === "hero"
            ? "bg-primary text-primary-foreground hover:bg-accent text-base px-8 py-6"
            : variant === "cta"
              ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6"
              : "bg-primary text-primary-foreground hover:bg-accent"
        }
      >
        <a
          href={AGENDA_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar Consulta
        </a>
      </Button>

      {/*
        ============================================================
        MODAL ANTERIOR
        ============================================================

        Se deja comentado por si necesitamos recuperarlo posteriormente.

        El modal utilizaba un iframe:

        <iframe
          src={AGENDA_URL}
          style={{
            flex: 1,
            border: "none",
            minHeight: 0,
            width: "100%",
          }}
          title="Agendar Consulta"
          loading="lazy"
          allow="camera; microphone; payment"
        />

        El problema era que la agenda se cargaba dentro de un iframe/modal,
        por lo que GTM/Google Ads no podía medir la navegación de la misma
        forma que cuando el usuario accede directamente a la página externa.

        Para la implementación actual, la navegación se realiza directamente
        mediante href={AGENDA_URL}.
      */}
    </>
  )
}
