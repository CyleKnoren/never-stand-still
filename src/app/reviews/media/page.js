'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer/Footer'

const media = [
  { id: 1, title: "Free Solo", category: "Movies", rating: 5, desc: "Alex Honnold's breathtaking free solo climb of El Capitan. A must-watch for any climbing enthusiast." },
  { id: 2, title: "180 Degrees South", category: "Movies", rating: 5, desc: "A journey retracing the 1968 trip of Patagonia founders to the tip of South America." },
  { id: 3, title: "Into Thin Air", category: "Books", rating: 5, desc: "Jon Krakauer's firsthand account of the 1996 Mount Everest disaster. Gripping and unforgettable." },
  { id: 4, title: "Wild", category: "Books", rating: 4, desc: "Cheryl Strayed's memoir of hiking the Pacific Crest Trail alone after personal tragedy." },
  { id: 5, title: "The Dirtbag Diaries", category: "Podcasts", rating: 5, desc: "Stories from the outdoor community — climbers, hikers, skiers and adventurers sharing their tales." },
  { id: 6, title: "Trail Runner Nation", category: "Podcasts", rating: 4, desc: "Everything trail running — training, gear, races and interviews with the world's best runners." },
]

const categories = ["All", "Movies", "Books", "Podcasts"]

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

function MediaContent() {
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

  const filtered = media.filter((item) =>
    activeCategory === "All" || item.category === activeCategory
  )

  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Reviews</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>Media</h1>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem'}}>
          {categories.map((cat) => (
            <button key={cat} style={btnStyle(activeCategory === cat)} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
          {filtered.map((item) => (
            <div key={item.id} style={{backgroundColor: 'var(--nss-dark)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'var(--nss-red)', color: 'var(--nss-white)', padding: '0.3rem 0.75rem', alignSelf: 'flex-start'}}>{item.category}</span>
              <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1.1}}>{item.title}</h2>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--nss-gray)', lineHeight: 1.6, flex: 1}}>{item.desc}</p>
              <p style={{color: 'var(--nss-red)', fontSize: '1rem', letterSpacing: '0.1em'}}>{renderStars(item.rating)}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function Media() {
  return (
    <Suspense fallback={<div style={{paddingTop: 'var(--nav-height)', color: 'white', padding: '4rem'}}>Loading...</div>}>
      <MediaContent />
    </Suspense>
  )
}