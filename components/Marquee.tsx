export default function Marquee() {
  const items = [
    'Reformer Pilates',
    '✦',
    'Mat Pilates',
    '✦',
    'Boks',
    '✦',
    'Fitness Boks',
    '✦',
    'Özel Dersler',
    '✦',
    'Grup Dersleri',
    '✦',
    'Kondisyon',
    '✦',
    'Zekeriyaköy',
    '✦',
  ]

  const doubled = [...items, ...items]

  return (
    <div className="bg-dark py-5 overflow-hidden border-y border-dark">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-sans text-xs tracking-[0.2em] uppercase mx-6 ${
              item === '✦' ? 'text-gold' : 'text-white/60'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
