import styles from './Promise.module.css'

const pillars = [
  {
    icon: '🏔️',
    title: 'Built by Adventurers',
    desc: 'Every trail, climb and gear test comes from our own boots on the ground in the Cape and beyond.'
  },
  {
    icon: '🤝',
    title: 'For Adventurers',
    desc: 'Honest reviews, real conditions, and the local knowledge that turns good days into great ones.'
  },
  {
    icon: '🎒',
    title: 'Gear Up with Confidence',
    desc: 'Apparel and kit we\'d trust on a 5am summit push — and recommend without a second thought.'
  },
]

export default function Promise() {
  return (
    <section className={styles.promise}>
      <div className={styles.inner}>
        <p className={styles.label}>Our Promise</p>
        <h2 className={styles.title}>Three Things We Always Stand For.</h2>
        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{pillar.icon}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}