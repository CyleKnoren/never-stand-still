'use client'
import { useState } from 'react'

const photos = [
  { id: 1, title: "Skeleton Gorge Summit", category: "Hiking", emoji: "🏔️" },
  { id: 2, title: "Rocklands Bouldering", category: "Climbing", emoji: "🪨" },
  { id: 3, title: "Tokai Trails", category: "MTB", emoji: "🚵" },
  { id: 4, title: "Otter Trail Day 3", category: "Hiking", emoji: "🌊" },
  { id: 5, title: "Jonkershoek Ridge", category: "Hiking", emoji: "🌿" },
  { id: 6, title: "Cape Point Descent", category: "MTB", emoji: "🚲" },
  { id: 7, title: "Sea Cliff Climbing", category: "Climbing", emoji: "🧗" },
  { id: 8, title: "AR Western Cape", category: "Adventure Racing", emoji: "🏁" },
  { id: 9, title: "Sunrise on the Trail", category: "Hiking", emoji: "🌅" },
]

const categories = ["All", "Hiking", "Climbing", "MTB", "Adventure Racing"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = photos.filter((photo) =>
    activeCategory === "All" || photo.category === activeCategory
  )

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-black uppercase mb-2">Gallery</h1>
      <p className="text-gray-400 mb-8">Adventures captured in the wild.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition ${
              activeCategory === cat
                ? 'bg-orange-400 text-black border-orange-400'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="bg-zinc-800 rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 hover:bg-zinc-700 transition cursor-pointer"
          >
            <span className="text-6xl">{photo.emoji}</span>
            <p className="text-sm font-bold text-white">{photo.title}</p>
            <span className="text-xs bg-orange-400 text-black font-bold px-3 py-1 rounded-full">
              {photo.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}