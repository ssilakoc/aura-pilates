'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Selin Kaya',
    role: 'Reformer Pilates Üyesi',
    text: 'AURA\'ya gelmeden önce sırt ağrılarım kronik hale gelmişti. Çağla\'nın rehberliğiyle 2 ayda inanılmaz bir dönüşüm yaşadım. Artık sabah kalkmak çok daha kolay!',
    initials: 'SK',
  },
  {
    name: 'Deniz Arslan',
    role: 'Boks & Pilates Üyesi',
    text: 'Hem pilates hem boks yapabilmek harika. Stres atmak için boksun, bedeni dengelemek için pilatesin ne kadar mükemmel bir kombinasyon olduğunu AURA\'da keşfettim.',
    initials: 'DA',
  },
  {
    name: 'Ayşe Özdemir',
    role: 'Mat Pilates Üyesi',
    text: 'Zekeriyaköy\'de böyle bir yer bulduğuma çok şaşırdım. Küçük, samimi ve profesyonel. Her derse geldiğimde kendimi özel hissediyorum. Kesinlikle tavsiye ederim.',
    initials: 'AÖ',
  },
  {
    name: 'Meral Tunç',
    role: 'Özel Ders Üyesi',
    text: 'Çocuklarımı kreşe bırakıp hemen AURA\'ya geliyorum. Çağla hanım çok anlayışlı ve motive edici. Bu stüdyo hayatıma gerçekten değer kattı.',
    initials: 'MT',
  },
]

export default function Testimonials() {
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
    <section ref={sectionRef} className="bg-sand py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <div className="divider" />
          <span className="section-label">Üyelerimiz Anlatıyor</span>
        </div>
        <h2
          className="reveal reveal-delay-1 font-serif text-dark mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
        >
          Gerçek dönüşümler,
          <br />
          <span className="text-gold-gradient italic">gerçek hikayeler.</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal bg-cream p-8 border border-warm hover:border-gold transition-colors duration-300`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote mark */}
              <div className="font-serif text-5xl text-gold/30 leading-none mb-4">&ldquo;</div>

              <p className="font-sans text-muted text-sm leading-relaxed mb-8">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-warm">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-sans text-xs font-semibold text-gold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-sans text-sm font-medium text-dark">{t.name}</div>
                  <div className="font-sans text-xs text-muted mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stars rating */}
        <div className="reveal mt-12 text-center">
          <div className="inline-flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A574">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="font-sans text-sm text-muted ml-2">Google'da 5.0 Puan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
