'use client'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'

const photos = [
  { id: 1, title: "Trail - Hottentots Holland", category: "Hiking", image: null },
  { id: 2, title: "Kayaking at Sunset", category: "Water", image: null },
  { id: 3, title: "Camping Under the Stars", category: "Camping", image: null },
  { id: 4, title: "Aerial Mountain Road", category: "MTB", image: null },
  { id: 5, title: "Rock Climbing Close Up", category: "Climbing", image: null },
  { id: 6, title: "Summit at Sunset", category: "Hiking", image: null },
  { id: 7, title: "Jonkershoek Singletrack", category: "MTB", image: null },
  { id: 8, title: "Cederberg Wall", category: "Climbing", image: null },
  { id: 9, title: "Otter Trail Coast", category: "Hiking", image: null },
]

const categories = ["All", "Hiking", "MTB", "Climbing", "Water", "Camping"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = photos.filter((photo) =>
    activeCategory === "All" || photo.category === activeCategory
  )

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

  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>

        {/* Header */}
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Field Notes</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>The Gallery</h1>

        {/* Filters */}
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem'}}>
          {categories.map((cat) => (
            <button key={cat} style={btnStyle(activeCategory === cat)} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem'}}>
          {filtered.map((photo) => (
            <div
              key={photo.id}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                backgroundColor: 'var(--nss-zinc)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Placeholder */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              }} />

              {/* Hover Overlay */}
              {hoveredId === photo.id && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(128, 0, 32, 0.85)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                  transition: 'all 0.2s ease',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--nss-white)',
                  }}>
                    {photo.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  )
}