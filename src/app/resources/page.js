'use client'
import { useState } from 'react'
import Footer from '@/components/Footer/Footer'

const resources = {
  Climbing: [
    {
      id: 1,
      title: "Getting Started with Sport Climbing",
      type: "Guide",
      desc: "Everything you need to know before your first climb — gear, technique and safety.",
    },
    {
      id: 2,
      title: "Best Climbing Areas in the Western Cape",
      type: "Guide",
      desc: "From Rocklands bouldering to the sea cliffs of Muizenberg — a full guide.",
    },
    {
      id: 3,
      title: "Touching the Void",
      type: "Book",
      desc: "Joe Simpson's harrowing account of survival in the Peruvian Andes. A classic.",
    },
    {
      id: 4,
      title: "The Push — Tommy Caldwell",
      type: "Book",
      desc: "The story behind the first free ascent of the Dawn Wall on El Capitan.",
    },
  ],
  MTB: [
    {
      id: 1,
      title: "Best MTB Trails in Cape Town",
      type: "Guide",
      desc: "From Tokai to Jonkershoek — the best mountain biking the Western Cape has to offer.",
    },
    {
      id: 2,
      title: "MTB Maintenance Basics",
      type: "Guide",
      desc: "Keep your bike trail-ready with these essential maintenance tips.",
    },
    {
      id: 3,
      title: "Ride or Die — Wyn Masters",
      type: "Book",
      desc: "The story of one of MTB's most charismatic riders and his journey to the top.",
    },
  ],
  'Adventure Racing': [
    {
      id: 1,
      title: "What is Adventure Racing?",
      type: "Guide",
      desc: "A beginner's guide to multi discipline racing — running, paddling, navigation and more.",
    },
    {
      id: 2,
      title: "Essential Navigation Skills",
      type: "Guide",
      desc: "Map and compass basics every adventure racer needs to know.",
    },
    {
      id: 3,
      title: "The Adventure Racing World Championship",
      type: "Book",
      desc: "A deep dive into the world's most gruelling endurance event.",
    },
  ],
  Hiking: [
    {
      id: 1,
      title: "Wild — Cheryl Strayed",
      type: "Book",
      desc: "A memoir of hiking the Pacific Crest Trail alone. Raw, honest and inspiring.",
    },
    {
      id: 2,
      title: "Best Multi Day Trails in South Africa",
      type: "Guide",
      desc: "From the Otter Trail to the Drakensberg — SA's best overnight hiking routes.",
    },
    {
      id: 3,
      title: "Trail Safety in the Cape",
      type: "Guide",
      desc: "Essential safety tips for hiking in the Western Cape — weather, wildlife and navigation.",
    },
  ],
}

const tabs = ["Climbing", "MTB", "Adventure Racing", "Hiking"]

const typeColors = {
  Guide: 'var(--nss-red)',
  Book: 'var(--nss-zinc)',
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState("Climbing")

  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>

        {/* Header */}
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Knowledge Base</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>Resources</h1>

        {/* Tabs */}
        <div style={{display: 'flex', borderBottom: '1px solid var(--nss-zinc)', marginBottom: '3rem'}}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '1rem 1.5rem',
                background: 'none',
                border: 'none',
                borderBottom: `2px solid ${activeTab === tab ? 'var(--nss-red)' : 'transparent'}`,
                color: activeTab === tab ? 'var(--nss-white)' : 'var(--nss-gray)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '-1px',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem'}}>
          {resources[activeTab].map((item) => (
            <div key={item.id} style={{backgroundColor: 'var(--nss-dark)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                backgroundColor: typeColors[item.type] || 'var(--nss-zinc)',
                color: 'var(--nss-white)',
                padding: '0.3rem 0.75rem',
                alignSelf: 'flex-start',
              }}>{item.type}</span>
              <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1.2}}>{item.title}</h2>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--nss-gray)', lineHeight: 1.6}}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  )
}