'use client'
import { useState } from 'react'

const resources = {
  Climbing: [
    {
      id: 1,
      title: "Getting Started with Sport Climbing",
      description: "Everything you need to know before your first climb — gear, technique and safety.",
      icon: "🧗"
    },
    {
      id: 2,
      title: "Best Climbing Areas in the Western Cape",
      description: "From Rocklands bouldering to the sea cliffs of Muizenberg — a full guide.",
      icon: "🪨"
    },
    {
      id: 3,
      title: "Climbing Gear Checklist",
      description: "A complete list of what you need for your first trad and sport climbing kit.",
      icon: "🎒"
    },
  ],
  MTB: [
    {
      id: 1,
      title: "Best MTB Trails in Cape Town",
      description: "From Tokai to Jonkershoek — the best mountain biking the Western Cape has to offer.",
      icon: "🚵"
    },
    {
      id: 2,
      title: "MTB Maintenance Basics",
      description: "Keep your bike trail-ready with these essential maintenance tips.",
      icon: "🔧"
    },
    {
      id: 3,
      title: "Choosing Your First Trail Bike",
      description: "Hardtail vs full suspension — what to look for when buying your first MTB.",
      icon: "🚲"
    },
  ],
  'Adventure Racing': [
    {
      id: 1,
      title: "What is Adventure Racing?",
      description: "A beginner's guide to multi discipline racing — running, paddling, navigation and more.",
      icon: "🏁"
    },
    {
      id: 2,
      title: "Training for Your First AR Event",
      description: "How to build the fitness and skills needed to complete your first adventure race.",
      icon: "💪"
    },
    {
      id: 3,
      title: "Essential Navigation Skills",
      description: "Map and compass basics every adventure racer needs to know.",
      icon: "🧭"
    },
  ],
}

const tabs = ["Climbing", "MTB", "Adventure Racing"]

export default function Resources() {
  const [activeTab, setActiveTab] = useState("Climbing")

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-black uppercase mb-2">Resources</h1>
      <p className="text-gray-400 mb-8">Guides, tips and info for every adventure.</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 border-b border-zinc-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-2 text-sm font-bold uppercase tracking-widest transition border-b-2 ${
              activeTab === tab
                ? 'border-orange-400 text-orange-400'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources[activeTab].map((item) => (
          <div key={item.id} className="bg-zinc-800 rounded-2xl p-6 flex flex-col gap-3 hover:bg-zinc-700 transition">
            <div className="text-5xl">{item.icon}</div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}