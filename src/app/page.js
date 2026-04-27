import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center px-4">
        <h1 className="text-7xl font-black uppercase tracking-tighter">
          Never Stand <span className="text-orange-400">Still</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-xl">
          Adventures, trails, gear and everything in between. 
          Life is short — get outside.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/blog" className="bg-orange-400 text-black font-bold px-8 py-3 rounded-full hover:bg-orange-300 transition">
            Read Adventures
          </Link>
          <Link href="/trail-reviews" className="border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore Trails
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 bg-zinc-900">
        {[
          { title: 'Gear Reviews', href: '/gear-reviews', emoji: '🎒' },
          { title: 'Trail Reviews', href: '/trail-reviews', emoji: '🥾' },
          { title: 'Gallery', href: '/gallery', emoji: '📸' },
          { title: 'Climbing', href: '/resources', emoji: '🧗' },
          { title: 'MTB', href: '/resources', emoji: '🚵' },
          { title: 'Shop', href: '/shop', emoji: '🛒' },
        ].map((item) => (
          <Link key={item.title} href={item.href} className="flex flex-col items-center justify-center p-8 bg-zinc-800 rounded-2xl hover:bg-orange-400 hover:text-black transition font-bold text-white text-lg gap-2">
            <span className="text-4xl">{item.emoji}</span>
            {item.title}
          </Link>
        ))}
      </section>

    </div>
  )
}