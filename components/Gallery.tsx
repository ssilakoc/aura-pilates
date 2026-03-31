'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/spor.webp', alt: 'Aura Sports Club', aspect: 'aspect-[4/5]' },
  { src: '/images/spor1.webp', alt: 'Pilates Dersi', aspect: 'aspect-[4/3]' },
  { src: '/images/spor2.webp', alt: 'Boks Antrenmanı', aspect: 'aspect-[4/5]' },
  { src: '/images/spor4.webp', alt: 'Stüdyo', aspect: 'aspect-[4/3]' },
  { src: '/images/spor5.webp', alt: 'Grup Dersi', aspect: 'aspect-[4/5]' },
  { src: '/images/spor6.webp', alt: 'Spor', aspect: 'aspect-[4/3]' },
  { src: '/images/spor7.webp', alt: 'Antrenman', aspect: 'aspect-square' },
  { src: '/images/pilates.jpeg', alt: 'Pilates', aspect: 'aspect-[4/3]' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeri" ref={sectionRef} className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="section-label">Galeri</span>
            </div>
            <h2
              className="reveal reveal-delay-1 font-serif text-dark"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
            >
              Stüdyomuzdan
              <br />
              <span className="text-gold-gradient italic">anlar.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <a
              href="https://www.instagram.com/aurasports_zekeriyakoy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram'da Takip Et
            </a>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal img-zoom break-inside-avoid`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`relative ${img.aspect} overflow-hidden`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/0 hover:bg-dark/15 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://www.instagram.com/aurasports_zekeriyakoy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.15em] uppercase text-muted border-b border-muted/30 pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            Tüm fotoğrafları gör
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
