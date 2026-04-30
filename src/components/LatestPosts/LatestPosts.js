import Link from 'next/link'
import styles from './LatestPosts.module.css'

const posts = [
  {
    id: 1,
    title: "Jonkershoek's Hidden Single-Track",
    category: 'MTB',
    desc: "We chase dust and dappled light through Stellenbosch's most underrated descent — here's why it deserves a place on your weekend list.",
    href: '/reviews/trails/mtb',
    image: null,
  },
  {
    id: 2,
    title: 'Trad on the Cederberg Wall',
    category: 'Climbing',
    desc: 'Three days, one big route, and a hard lesson about humility. A gear-heavy review from one of SA\'s most spectacular cliffs.',
    href: '/reviews/trails/climbing',
    image: null,
  },
  {
    id: 3,
    title: 'Field-Tested: 35L Trekking Packs',
    category: 'Gear',
    desc: 'We hauled four contenders across coast and ridge to find the pack that disappears on your back when it matters most.',
    href: '/reviews/gear/backpacks',
    image: null,
  },
]

export default function LatestPosts() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.label}>From the Field</p>
            <h2 className={styles.title}>Latest Posts</h2>
          </div>
          <Link href="/reviews" className={styles.viewAll}>
            All Reviews →
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.id} href={post.href} className={styles.card}>
              <div className={styles.cardImage}>
                {post.image ? (
                  <img src={post.image} alt={post.title} />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                  }} />
                )}
                <span className={styles.categoryTag}>{post.category}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDesc}>{post.desc}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}