'use client'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'

const trails = [
  {
    id: 1,
    name: "Jonkershoek Hidden Single-Track",
    region: "Stellenbosch",
    type: "MTB",
    difficulty: "Hard",
    duration: "Day Hike",
    onTrail: true,
    desc: "Fast flowing singletrack through the Jonkershoek Nature Reserve. A must-do for any MTB enthusiast in the Cape.",
  },
  {
    id: 2,
    name: "Skeleton Gorge",
    region: "Cape Town",
    type: "Hiking",
    difficulty: "Moderate",
    duration: "Day Hike",
    onTrail: true,
    desc: "A stunning hike through Kirstenbosch up into the Hottentots Holland mountains.",
  },
  {
    id: 3,
    name: "Trad on the Cederberg Wall",
    region: "Cederberg",
    type: "Climbing",
    difficulty: "Hard",
    duration: "Multi Day",
    onTrail: false,
    desc: "Three days, one big route, and a hard lesson about humility on one of SA's most spectacular cliffs.",
  },
  {
    id: 4,
    name: "Otter Trail",
    region: "Garden Route",
    type: "Hiking",
    difficulty: "Hard",
    duration: "Multi Day",
    onTrail: true,
    desc: "South Africa's most famous trail — 5 days along the Wild Coast.",
  },
]

const types = ["All", "MTB", "Hiking", "Climbing", "Water"]
const regions = ["All", "Cape Town", "Stellenbosch", "Cederberg", "Garden Route"]
const durations = ["All", "Day Hike", "Multi Day", "Weekend"]

export default function Trails() {
  const [activeType, setActiveType] = useState("All")
  const [activeRegion, setActiveRegion] = useState("All")
  const [activeDuration, setActiveDuration] = useState("All")

  const filtered = trails.filter((trail) => {
    const typeMatch = activeType === "All" || trail.type === activeType
    const regionMatch = activeRegion === "All" || trail.region === activeRegion
    const durationMatch = activeDuration === "All" || trail.duration === activeDuration
    return typeMatch && regionMatch && durationMatch
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
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>Trails</h1>

        {/* Filters */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {types.map((type) => (
              <button key={type} style={btnStyle(activeType === type)} onClick={() => setActiveType(type)}>{type}</button>
            ))}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {regions.map((region) => (
              <button key={region} style={btnStyle(activeRegion === region)} onClick={() => setActiveRegion(region)}>{region}</button>
            ))}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {durations.map((duration) => (
              <button key={duration} style={btnStyle(activeDuration === duration)} onClick={() => setActiveDuration(duration)}>{duration}</button>
            ))}
          </div>
        </div>

        {/* Trail Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
          {filtered.length > 0 ? filtered.map((trail) => (
            <div key={trail.id} style={{backgroundColor: 'var(--nss-dark)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'var(--nss-red)', color: 'var(--nss-white)', padding: '0.3rem 0.75rem'}}>{trail.type}</span>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--nss-zinc)', color: 'var(--nss-gray)', padding: '0.3rem 0.75rem'}}>{trail.region}</span>
              </div>
              <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1.1}}>{trail.name}</h2>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--nss-gray)', lineHeight: 1.6}}>{trail.desc}</p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--nss-zinc)'}}>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--nss-gray)'}}>{trail.duration}</span>
                <span style={{fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--nss-red)'}}>{trail.difficulty}</span>
              </div>
            </div>
          )) : (
            <p style={{color: 'var(--nss-gray)', fontFamily: 'var(--font-heading)', gridColumn: '1/-1'}}>No trails found for this filter.</p>
          )}
        </div>

      </div>
      <Footer />
    </div>
  )
}