import Link from 'next/link'
import Footer from '@/components/Footer/Footer'
//import styles from './reviews.module.css'

const categories = [
  {
    label: 'Trails',
    desc: 'MTB, hiking, climbing and water adventures across the Cape and beyond.',
    href: '/reviews/trails',
    subs: ['MTB', 'Hiking', 'Climbing', 'Water'],
  },
  {
    label: 'Gear',
    desc: 'Honest field-tested reviews on the kit we actually use.',
    href: '/reviews/gear',
    subs: ['Apparel', 'Backpacks', 'Tech', 'Camping', 'Cooking', 'Gadgets'],
  },
  {
    label: 'Media',
    desc: 'Books, films and podcasts that feed the adventure obsession.',
    href: '/reviews/media',
    subs: ['Movies', 'Books', 'Podcasts'],
  },
  {
    label: 'Adventure Racing',
    desc: 'Race reports, training tips and everything AR.',
    href: '/reviews/adventure-racing',
    subs: ['Races'],
  },
]

export default function Reviews() {
  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>All Reviews</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '3rem'}}>
          From The Field
        </h1>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem'}}>
          {categories.map((cat) => (
            <Link key={cat.label} href={cat.href} style={{
              background: 'var(--nss-dark)',
              padding: '2.5rem',
              textDecoration: 'none',
              display: 'block',
              transition: 'background 0.2s ease'
            }}>
              <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--nss-white)', marginBottom: '0.75rem'}}>{cat.label}</h2>
              <p style={{fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--nss-gray)', lineHeight: 1.6, marginBottom: '1.5rem'}}>{cat.desc}</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {cat.subs.map((sub) => (
                  <span key={sub} style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--nss-zinc)', color: 'var(--nss-gray)', padding: '0.3rem 0.75rem'}}>{sub}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}