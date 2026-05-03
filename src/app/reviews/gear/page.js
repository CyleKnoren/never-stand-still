'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer/Footer'

const gear = [
  { id: 1, name: "Salomon Speedcross 6", category: "Apparel", subcategory: "Footwear", rating: 5, desc: "The best trail running shoe on the market. Grippy, lightweight and comfortable on long days out." },
  { id: 2, name: "Osprey Atmos 65", category: "Backpacks", subcategory: "Multi Day", rating: 5, desc: "The ultimate multi day pack. Comfortable, well ventilated and bombproof." },
  { id: 3, name: "Garmin Fenix 7", category: "Tech", subcategory: "Watches", rating: 5, desc: "The ultimate adventure watch. GPS, heart rate, topographic maps and a battery that lasts weeks." },
  { id: 4, name: "Patagonia Houdini Jacket", category: "Apparel", subcategory: "Jackets", rating: 4, desc: "Packs into its own pocket. Windproof and perfect for unpredictable mountain weather." },
  { id: 5, name: "Black Diamond Spot 400", category: "Tech", subcategory: "Lighting", rating: 4, desc: "A reliable headlamp for early morning starts and late finishes on the trail." },
  { id: 6, name: "MSR Pocket Rocket 2", category: "Camping", subcategory: "Cooking", rating: 5, desc: "Ultralight, compact and boils water fast. The go-to stove for any backpacking trip." },
]

const categories = ["All", "Apparel", "Backpacks", "Tech", "Camping", "Cooking", "Gadgets"]

const btnStyle = (active) => ({
  fontFamily: 'var(--font-heading)',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  padding: '0.5rem 1.25rem',
  border: `1px solid ${active ? 'var(--nss-red)' : 'var(--nss-zinc)'}`,
  backgroundColor: active ? 'var(--nss-red)' : 'transparent',
  color: active ? 'var(--nss-white)' : 'var(--nss-gray)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
})

const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating)

function GearContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    const filter = searchParams.get('filter')
    if (filter) {
      const match = categories.find(cat => cat.toLowerCase() === filter.toLowerCase())
      if (match) setActiveCategory(match)
    } else {
      setActiveCategory("All")
    }
  }, [searchParams])

  const filtered = gear.filter((item) =>
    activeCategory === "All" || item.category === activeCategory
  )

  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Reviews</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>Gear</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem'}}>
          {categories.map((cat) => (
            <button key={cat} style={btnStyle(activeCategory === cat)} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
          {filtered.length > 0 ? filtered.map((item) => (
            <div key={item.id} style={{backgroundColor: 'var(--nss-dark)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'var(--nss-red)', color: 'var(--nss-white)', padding: '0.3rem 0.75rem'}}>{item.category}</span>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--nss-zinc)', color: 'var(--nss-gray)', padding: '0.3rem 0.75rem'}}>{item.subcategory}</span>
              </div>
              <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1.1}}>{item.name}</h2>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--nss-gray)', lineHeight: 1.6, flex: 1}}>{item.desc}</p>
              <p style={{color: 'var(--nss-red)', fontSize: '1rem', letterSpacing: '0.1em'}}>{renderStars(item.rating)}</p>
            </div>
          )) : (
            <p style={{color: 'var(--nss-gray)', fontFamily: 'var(--font-heading)', gridColumn: '1/-1'}}>No items found for this filter.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function Gear() {
  return (
    <Suspense fallback={<div style={{paddingTop: 'var(--nav-height)', color: 'white', padding: '4rem'}}>Loading...</div>}>
      <GearContent />
    </Suspense>
  )
}