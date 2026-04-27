import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        NSS
      </Link>
      <ul className="flex gap-6 text-sm uppercase tracking-widest">
        <li><Link href="/blog" className="hover:text-orange-400 transition">Adventures</Link></li>
        <li><Link href="/gear-reviews" className="hover:text-orange-400 transition">Gear</Link></li>
        <li><Link href="/trail-reviews" className="hover:text-orange-400 transition">Trails</Link></li>
        <li><Link href="/gallery" className="hover:text-orange-400 transition">Gallery</Link></li>
        <li><Link href="/resources" className="hover:text-orange-400 transition">Resources</Link></li>
        <li><Link href="/shop" className="hover:text-orange-400 transition">Shop</Link></li>
      </ul>
    </nav>
  )
}