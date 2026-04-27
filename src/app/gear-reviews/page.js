'use client'
import { useState } from 'react'

const gear = [
  {
    id: 1,
    name: "Salomon Speedcross 6",
    category: "Apparel",
    subcategory: "Footwear",
    rating: 5,
    description: "The best trail running shoe on the market. Grippy, lightweight and comfortable on long days out.",
    image: "👟"
  },
  {
    id: 2,
    name: "Black Diamond Spot 400",
    category: "Gadgets",
    subcategory: "Lighting",
    rating: 4,
    description: "A reliable headlamp for early morning starts and late finishes on the trail.",
    image: "🔦"
  },
  {
    id: 3,
    name: "Osprey Atmos 65",
    category: "Gear",
    subcategory: "Packs",
    rating: 5,
    description: "The ultimate multi day pack. Comfortable, well ventilated and bombproof.",
    image: "🎒"
  },
  {
    id: 4,
    name: "Patagonia Houdini Jacket",
    category: "Apparel",
    subcategory: "Jackets",
    rating: 4,
    description: "Packs into its own pocket. Windproof and perfect for unpredictable mountain weather.",
    image: "🧥"
  },
  {
    id: 5,
    name: "Garmin Fenix 7",
    category: "Gadgets",
    subcategory: "Watches",
    rating: 5,
    description: "The ultimate adventure watch. GPS, heart rate, topographic maps and a battery that lasts weeks.",
    image: "⌚"
  },
  {
    id: 6,
    name: "Black Diamond Camalot C4",
    category: "Gear",
    subcategory: "Climbing",
    rating: 5,
    description: "The gold standard in climbing protection. Bomber placement every time.",
    image: "🧗"
  },
]

const categories = ["All", "Apparel", "Gear", "Gadgets"]

export default function GearReviews() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = gear.filter((item) =>
    activeCategory === "All" || item.category === activeCategory
  )

  const renderStars = (rating) => "⭐".repeat(rating)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-black uppercase mb-2">Gear Reviews</h1>
      <p className="text-gray-400 mb-8">Honest reviews from real adventures.</p>

      {/* Category Filters */}
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

      {/* Gear Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="bg-zinc-800 rounded-2xl p-6 flex flex-col gap-3 hover:bg-zinc-700 transition">
            <div className="text-5xl">{item.image}</div>
            <div className="flex gap-2">
              <span className="text-xs bg-orange-400 text-black font-bold px-3 py-1 rounded-full">{item.category}</span>
              <span className="text-xs bg-zinc-600 text-white font-bold px-3 py-1 rounded-full">{item.subcategory}</span>
            </div>
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-400 text-sm">{item.description}</p>
            <p className="text-sm">{renderStars(item.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}