"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Pointer, X } from "lucide-react"

const AGENDA_URL = "https://agenda.hospitalveterinariointegral.com/"

interface AgendarButtonProps {
  variant?: "hero" | "navbar"
}

export function AgendarButton({ variant = "navbar" }: AgendarButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isModalOpen])

  const handleClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault()
      setIsModalOpen(true)
    }
  }

  const modal = (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    }}
    onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1100px",
        height: "95vh",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b bg-white shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700" style={{marginLeft: 20}}>Agendar Consulta</span>
          <span className="text-xs text-gray-400">— Hospital Veterinario Integral</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:underline"
          >
            Abrir en nueva pestaña ↗
          </a>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
            aria-label="Cerrar modal"
            style={{ marginRight: 20, cursor: 'pointer'}}
          >
            <X size={18}/>
          </button>
        </div>
      </div>

      {/* iFrame */}
      <iframe
        src={AGENDA_URL}
        style={{ flex: 1, border: "none", minHeight: 0, width: "100%" }}
        title="Agendar Consulta"
        loading="lazy"
        allow="camera; microphone; payment"
      />
    </div>
  </div>
)

  return (
    <>
      <Button
        asChild
        size="lg"
        className={
          variant === "hero"
            ? "bg-primary text-primary-foreground hover:bg-accent text-base px-8 py-6"
            : "bg-primary text-primary-foreground hover:bg-accent"
        }
      >
        <a
          href={AGENDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Agendar Consulta
        </a>
      </Button>

      {/* Portal: el modal se monta en document.body, fuera del navbar */}
      {mounted && isModalOpen && createPortal(modal, document.body)}
    </>
  )
}