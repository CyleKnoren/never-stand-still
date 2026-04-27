'use client'
import { useState } from 'react'

const trails = [
  {
    id: 1,
    name: "Skeleton Gorge",
    region: "Cape Town",
    type: "Day Hike",
    onTrail: true,
    difficulty: "Moderate",
    description: "A stunning hike through Kirstenbosch up into the Hottentots Holland mountains.",
    image: "🏔️"
  },
  {
    id: 2,
    name: "Otter Trail",
    region: "Garden Route",
    type: "Multi Day",
    onTrail: true,
    difficulty: "Hard",
    description: "South Africa's most famous trail — 5 days along the Wild Coast.",
    image: "🌊"
  },
  {
    id: 3,
    name: "Jonkershoek",
    region: "Stellenbosch",
    type: "Day Hike",
    onTrail: false,
    difficulty: "Hard",
    description: "A tough off trail adventure through the Jonkershoek Nature Reserve.",
    image: "🌿"
  },
]

const regions = ["All", "Cape Town", "Stellenbosch", "Garden Route"]
const types = ["All", "Day Hike", "Multi Day", "Weekend", "Off Trail", "On Trail"]

export default function TrailReviews() {
  const [activeType, setActiveType] = useState("All")
  const [activeRegion, setActiveRegion] = useState("All")

  const filtered = trails.filter((trail) => {
    const typeMatch =
      activeType === "All" ||
      trail.type === activeType ||
      (activeType === "Off Trail" && !trail.onTrail) ||
      (activeType === "On Trail" && trail.onTrail)

    const regionMatch = activeRegion === "All" || trail.region === activeRegion

    return typeMatch && regionMatch
  })

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-black uppercase mb-2">Trail Reviews</h1>
      <p className="text-gray-400 mb-8">Find your next adventure.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition ${
              activeType === type
                ? 'bg-orange-400 text-black border-orange-400'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Region Sort */}
      <div className="flex flex-wrap gap-3 mb-10">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition ${
              activeRegion === region
                ? 'bg-zinc-100 text-black border-zinc-100'
                : 'border-zinc-500 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Trail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? filtered.map((trail) => (
          <div key={trail.id} className="bg-zinc-800 rounded-2xl p-6 flex flex-col gap-3 hover:bg-zinc-700 transition">
            <div className="text-5xl">{trail.image}</div>
            <div className="flex gap-2">
              <span className="text-xs bg-orange-400 text-black font-bold px-3 py-1 rounded-full">{trail.type}</span>
              <span className="text-xs bg-zinc-600 text-white font-bold px-3 py-1 rounded-full">{trail.region}</span>
            </div>
            <h2 className="text-xl font-bold">{trail.name}</h2>
            <p className="text-gray-400 text-sm">{trail.description}</p>
            <p className="text-orange-400 text-sm font-bold">Difficulty: {trail.difficulty}</p>
          </div>
        )) : (
          <p className="text-gray-500 col-span-3">No trails found for this filter.</p>
        )}
      </div>
    </div>
  )
}