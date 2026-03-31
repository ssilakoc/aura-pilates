'use client'

import { useEffect, useRef } from 'react'

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-dark overflow-hidden">
      {/* Video */}
      <div className="relative h-[70vh] min-h-[400px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/videos/video2.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-xl">
              <div className="reveal flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                  Felsefemiz
                </span>
              </div>
              <blockquote
                className="reveal reveal-delay-1 font-serif text-white italic"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: '1.2' }}
              >
                &ldquo;Bedeniniz sizin
                <br />
                en güçlü aracınızdır.&rdquo;
              </blockquote>
              <div className="reveal reveal-delay-2 mt-6 w-12 h-px bg-gold" />
              <p className="reveal reveal-delay-3 mt-4 font-sans text-white/60 text-sm tracking-[0.1em]">
                — Çağla, Kurucu & Baş Eğitmen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
