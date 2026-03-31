'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Philosophy() {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="studyo" ref={sectionRef} className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-20">
          <div className="divider" />
          <span className="section-label">Stüdyomuz</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal reveal-delay-1 relative">
            <div className="relative aspect-[3/4] img-zoom">
              <Image
                src="/images/pilates6.jpeg"
                alt="Aura Sports Club Stüdyo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-8 hidden lg:block">
              <div className="font-serif text-4xl font-normal leading-none">10+</div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1 text-white/80">
                Yıllık Deneyim
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2
              className="reveal reveal-delay-2 font-serif text-dark"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
            >
              Hareketin
              <br />
              <span className="text-gold-gradient italic">şiirini</span>
              <br />
              hissedin.
            </h2>

            <div className="reveal reveal-delay-3 space-y-5">
              <p className="font-sans text-muted text-base leading-relaxed">
                Zekeriyaköy'ün doğayla iç içe sakin atmosferinde, AURA Sports Club; pilatesin akıcılığı
                ile boksun gücünü tek çatı altında buluşturuyor.
              </p>
              <p className="font-sans text-muted text-base leading-relaxed">
                Her beden farklıdır, her yolculuk kendine özgüdür. Uzman eğitmenlerimiz eşliğinde,
                kendi ritminizde ilerlemenizi, güçlenmenizi ve kendinizle yeniden bağlantı kurmanızı
                sağlıyoruz.
              </p>
            </div>

            <div className="reveal reveal-delay-4 grid grid-cols-2 gap-8 pt-6 border-t border-warm">
              {[
                { num: '50+', label: 'Aktif Üye' },
                { num: '7/24', label: 'Destek' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-serif text-3xl text-dark">{stat.num}</div>
                  <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4">
              <a href="#hizmetler" className="btn-outline">
                Hizmetlerimiz
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
