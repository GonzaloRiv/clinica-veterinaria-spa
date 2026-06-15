"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/images/Espacios/IMG_7647.webp", alt: "Espacio 1" },
  { src: "/images/Espacios/IMG_7649.webp", alt: "Espacio 2" },
  { src: "/images/Espacios/IMG_7656.webp", alt: "Espacio 3" },
  { src: "/images/Espacios/IMG_7665.webp", alt: "Espacio 4" },
  { src: "/images/Espacios/IMG_7694.webp", alt: "Espacio 5" },
  { src: "/images/Espacios/IMG_7699.webp", alt: "Espacio 6" },
  { src: "/images/Espacios/IMG_7763.webp", alt: "Espacio 7" },
  { src: "/images/Espacios/IMG_7834.webp", alt: "Espacio 8" },
  { src: "/images/Espacios/IMG_7846.webp", alt: "Espacio 9" },
  { src: "/images/Espacios/IMG_7897.webp", alt: "Espacio 10" },
  { src: "/images/Espacios/IMG_7899.webp", alt: "Espacio 11" },
  { src: "/images/Espacios/IMG_7909.webp", alt: "Espacio 12" },
  { src: "/images/Espacios/IMG_7918.webp", alt: "Espacio 13" },
  { src: "/images/Espacios/IMG_7942.webp", alt: "Espacio 14" },
  { src: "/images/Espacios/IMG_5428.webp", alt: "Espacio 15" },
  { src: "/images/Espacios/IMG_5430.webp", alt: "Espacio 16" },
]

export function RealGallery() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return
      setIsAnimating(true)
      setDirection(dir)
      setTimeout(() => {
        setCurrent(index)
        setIsAnimating(false)
      }, 400)
    },
    [isAnimating]
  )

  const prev = useCallback(() => {
    const index = (current - 1 + images.length) % images.length
    goTo(index, "left")
  }, [current, goTo])

  const next = useCallback(() => {
    const index = (current + 1) % images.length
    goTo(index, "right")
  }, [current, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [prev, next])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => next(), 5000)
    return () => clearInterval(timer)
  }, [next])

  const getThumbIndex = (offset: number) =>
    (current + offset + images.length) % images.length

  return (
    <section
      id="instalaciones"
      className="bg-primary py-14"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        .gallery-img-enter-right { animation: slideInRight 0.4s ease forwards; }
        .gallery-img-enter-left  { animation: slideInLeft  0.4s ease forwards; }
        .gallery-btn {
          transition: background 0.2s, transform 0.15s;
        }
        .gallery-btn:hover {
          background: rgba(255,255,255,0.25);
          transform: scale(1.08);
        }
        .gallery-btn:active {
          transform: scale(0.96);
        }
        .thumb-item {
          transition: opacity 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .thumb-item:hover {
          opacity: 0.9;
          transform: translateY(-3px);
        }
        .dot-btn {
          transition: background 0.25s, transform 0.2s;
        }
        .dot-btn:hover { transform: scale(1.3); }
      `}</style>

      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center mb-8">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-2"
            style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.22em" }}
          >
            Conoce nuestras
          </p>
          <h2
            className="font-bold text-3xl sm:text-4xl text-primary-foreground"
            style={{ lineHeight: 1.15 }}
          >
            Instalaciones
          </h2>
          <div
            className="mx-auto mt-5"
            style={{
              width: 48,
              height: 2,
              background: "rgba(255,255,255,0.35)",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Main carousel */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            aspectRatio: "16/9",
            boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
            background: "#111",
          }}
          role="region"
          aria-label="Galería de instalaciones"
        >
          {/* Image */}
          <img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            className={
              direction === "right"
                ? "gallery-img-enter-right"
                : "gallery-img-enter-left"
            }
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* Counter badge */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 14,
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              fontSize: 11,
              fontFamily: "monospace",
              letterSpacing: "0.08em",
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {current + 1} / {images.length}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="gallery-btn"
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              borderRadius: "50%",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            aria-label="Imagen siguiente"
            className="gallery-btn"
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              borderRadius: "50%",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 7,
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                aria-label={`Ir a imagen ${i + 1}`}
                className="dot-btn"
                style={{
                  width: i === current ? 22 : 7,
                  height: 7,
                  borderRadius: 999,
                  background:
                    i === current
                      ? "#fff"
                      : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s, background 0.25s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 7,
          }}
        >
          {[-2, -1, 0, 1, 2].map((offset) => {
            const idx = getThumbIndex(offset)
            const isActive = offset === 0
            return (
              <button
                key={offset}
                onClick={() => goTo(idx, offset > 0 ? "right" : "left")}
                aria-label={`Ver imagen ${idx + 1}`}
                className="thumb-item"
                style={{
                  padding: 0,
                  border: isActive
                    ? "2px solid rgba(255,255,255,0.8)"
                    : "2px solid transparent",
                  borderRadius: 10,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  background: "#111",
                  opacity: Math.abs(offset) === 2 ? 0.5 : Math.abs(offset) === 1 ? 0.75 : 1,
                  cursor: "pointer",
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  boxShadow: isActive
                    ? "0 6px 24px rgba(0,0,0,0.5)"
                    : "none",
                  transition: "opacity 0.3s, transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                }}
              >
                <img
                  src={images[idx].src}
                  alt={images[idx].alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}