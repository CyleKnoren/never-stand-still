'use client'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'

const races = [
  {
    id: 1,
    name: "Expedition Africa",
    location: "Various, South Africa",
    type: "Expedition",
    duration: "7 Days",
    difficulty: "Elite",
    desc: "South Africa's premier expedition adventure race. Multi-day racing through some of SA's most spectacular wilderness.",
  },
  {
    id: 2,
    name: "Fedhealth XTERRA",
    location: "Grabouw, Western Cape",
    type: "Short Course",
    duration: "1 Day",
    difficulty: "Moderate",
    desc: "Off-road triathlon through the beautiful Grabouw valley. Swim, MTB and trail run.",
  },
  {
    id: 3,
    name: "Wines2Whales",
    location: "Stellenbosch to Hermanus",
    type: "MTB Stage Race",
    duration: "3 Days",
    difficulty: "Hard",
    desc: "Three day MTB stage race through the stunning Overberg region of the Western Cape.",
  },
  {
    id: 4,
    name: "Cape Epic",
    location: "Western Cape",
    type: "MTB Stage Race",
    duration: "8 Days",
    difficulty: "Elite",
    desc: "The world's most prestigious mountain bike stage race. Eight days of epic racing through the Western Cape.",
  },
]

const types = ["All", "Expedition", "Short Course", "MTB Stage Race"]
const difficulties = ["All", "Moderate", "Hard", "Elite"]

export default function AdventureRacing() {
  const [activeType, setActiveType] = useState("All")
  const [activeDifficulty, setActiveDifficulty] = useState("All")

  const filtered = races.filter((race) => {
    const typeMatch = activeType === "All" || race.type === activeType
    const diffMatch = activeDifficulty === "All" || race.difficulty === activeDifficulty
    return typeMatch && diffMatch
  })

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
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Reviews</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>Adventure Racing</h1>

        {/* Filters */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {types.map((type) => (
              <button key={type} style={btnStyle(activeType === type)} onClick={() => setActiveType(type)}>{type}</button>
            ))}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {difficulties.map((diff) => (
              <button key={diff} style={btnStyle(activeDifficulty === diff)} onClick={() => setActiveDifficulty(diff)}>{diff}</button>
            ))}
          </div>
        </div>

        {/* Race Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem'}}>
          {filtered.length > 0 ? filtered.map((race) => (
            <div key={race.id} style={{backgroundColor: 'var(--nss-dark)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'var(--nss-red)', color: 'var(--nss-white)', padding: '0.3rem 0.75rem'}}>{race.type}</span>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--nss-zinc)', color: 'var(--nss-gray)', padding: '0.3rem 0.75rem'}}>{race.difficulty}</span>
              </div>
              <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1.1}}>{race.name}</h2>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--nss-gray-light)', letterSpacing: '0.05em'}}>{race.location}</p>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--nss-gray)', lineHeight: 1.6, flex: 1}}>{race.desc}</p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--nss-zinc)'}}>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--nss-gray)'}}>{race.duration}</span>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--nss-red)'}}>Read More →</span>
              </div>
            </div>
          )) : (
            <p style={{color: 'var(--nss-gray)', fontFamily: 'var(--font-heading)', gridColumn: '1/-1'}}>No races found for this filter.</p>
          )}
        </div>

      </div>
      <Footer />
    </div>
  )
}