'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    id: 'pilates',
    label: 'Disiplin 01',
    title: 'Pilates',
    subtitle: 'Güç · Esneklik · Denge',
    description:
      'Pilates, bedeninizi içten dışa güçlendiren, postürünüzü düzelten ve zihninizi sakinleştiren bütünsel bir hareket pratiğidir. Her seviyeye uygun derslerimizle başlayın.',
    features: ['Reformer Pilates', 'Mat Pilates', 'Grup & Özel Dersler', 'Prenatal Pilates'],
    image: '/images/spor3.webp',
    bg: 'bg-sand',
  },
  {
    id: 'boks',
    label: 'Disiplin 02',
    title: 'Boks',
    subtitle: 'Güç · Hız · Kararlılık',
    description:
      'Boks, sadece bir spor değil; zihinsel dayanıklılık, koordinasyon ve özgüven inşa eden güçlü bir pratiktir. Teknik öğrenin, kondisyon kazanın, kendinizi aşın.',
    features: ['Teknik Boks', 'Fitness Boks', 'Kondisyon Antrenmanı', 'Özel Dersler'],
    image: '/images/pilates2.jpeg',
    bg: 'bg-cream',
  },
]

export default function Services() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hizmetler" ref={sectionRef} className="bg-cream">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="reveal flex items-center gap-4 mb-6">
          <div className="divider" />
          <span className="section-label">Hizmetlerimiz</span>
        </div>
        <h2
          className="reveal reveal-delay-1 font-serif text-dark max-w-lg"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
        >
          İki disiplin,
          <br />
          sonsuz potansiyel.
        </h2>
      </div>

      {/* Service blocks */}
      {services.map((service, idx) => (
        <div key={service.id} className={`${service.bg}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`reveal ${idx % 2 === 1 ? 'lg:col-start-2' : ''} img-zoom`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-dark/10" />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-7 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="reveal">
                  <span className="section-label">{service.label}</span>
                </div>
                <h3
                  className="reveal reveal-delay-1 font-serif text-dark"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '0.95', letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </h3>
                <div className="reveal reveal-delay-1 font-sans text-[11px] tracking-[0.2em] uppercase text-gold">
                  {service.subtitle}
                </div>
                <p className="reveal reveal-delay-2 font-sans text-muted leading-relaxed text-base">
                  {service.description}
                </p>
                <ul className="reveal reveal-delay-3 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-sans text-sm text-dark">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="reveal reveal-delay-4 pt-2">
                  <a
                    href="https://wa.me/905318295111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    Ders Planla
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Personal Training Block */}
      <div className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="reveal">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">Özel</span>
          </div>
          <h3
            className="reveal reveal-delay-1 font-serif text-white mt-4 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05' }}
          >
            Kişisel Antrenman
          </h3>
          <p className="reveal reveal-delay-2 font-sans text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Size özel hazırlanmış program, bire bir rehberlik ve kendi hızınızda ilerleme fırsatı.
            Hedeflerinize en hızlı ve güvenli yoldan ulaşın.
          </p>
          <div className="reveal reveal-delay-3">
            <a
              href="https://wa.me/905318295111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-white font-sans text-xs tracking-[0.12em] uppercase font-medium px-8 py-4 transition-all duration-300"
            >
              Bilgi Al
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
