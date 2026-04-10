'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85
    }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/video3.mp4"
      />

      <div className="absolute inset-0 video-overlay" />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/80">
            Zekeriyaköy · Sarıyer · İstanbul
          </span>
          <div className="w-8 h-px bg-gold" />
        </div>

        <h1
          className="font-serif text-white mb-6 animate-fade-in"
          style={{
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            lineHeight: '0.9',
            letterSpacing: '-0.02em',
            animationDelay: '0.4s',
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        >
          AURA
        </h1>

        <p
          className="font-sans text-white/85 text-sm md:text-base tracking-[0.2em] uppercase mb-12 animate-fade-in"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Pilates & Boks Stüdyosu
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="https://wa.me/905318295111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gold hover:bg-[#B8925F] text-white font-sans text-xs tracking-[0.12em] uppercase font-medium px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ders Rezervasyonu
          </a>
          <a
            href="#studyo"
            className="flex items-center gap-3 border border-white/60 text-white hover:bg-white/10 font-sans text-xs tracking-[0.12em] uppercase font-medium px-8 py-4 transition-all duration-300"
          >
            Stüdyoyu Keşfet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
