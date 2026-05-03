'use client'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'

const media = [
  {
    id: 1,
    title: "Free Solo",
    category: "Movies",
    desc: "Alex Honnold's breathtaking free solo climb of El Capitan. A must-watch for any climbing enthusiast.",
    rating: 5,
  },
  {
    id: 2,
    title: "180 Degrees South",
    category: "Movies",
    desc: "A journey retracing the 1968 trip of Patagonia founders to the tip of South America. Stunning and inspiring.",
    rating: 5,
  },
  {
    id: 3,
    title: "Into Thin Air",
    category: "Books",
    desc: "Jon Krakauer's firsthand account of the 1996 Mount Everest disaster. Gripping and unforgettable.",
    rating: 5,
  },
  {
    id: 4,
    title: "Wild",
    category: "Books",
    desc: "Cheryl Strayed's memoir of hiking the Pacific Crest Trail alone after personal tragedy.",
    rating: 4,
  },
  {
    id: 5,
    title: "The Dirtbag Diaries",
    category: "Podcasts",
    desc: "Stories from the outdoor community — climbers, hikers, skiers and adventurers sharing their tales.",
    rating: 5,
  },
  {
    id: 6,
    title: "Trail Runner Nation",
    category: "Podcasts",
    desc: "Everything trail running — training, gear, races and interviews with the world's best runners.",
    rating: 4,
  },
]

const categories = ["All", "Movies", "Books", "Podcasts"]

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = media.filter((item) =>
    activeCategory === "All" || item.category === activeCategory
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

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating)

  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>

        {/* Header */}
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Reviews</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>Media</h1>

        {/* Filters */}
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem'}}>
          {categories.map((cat) => (
            <button key={cat} style={btnStyle(activeCategory === cat)} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>

        {/* Media Cards */}
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