import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBg}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        {/* Circle Logo */}
        <img
          src="/NeverStandStill/Logo/Circle_Fill/watermark - white/full/white_logo_transparent_background.png"
          alt="NSS Logo"
          className={styles.heroLogo}
        />

        {/* Text */}
        <div className={styles.heroText}>
          <p className={styles.heroTagline}>Adventure · Cape Town · NSS · SA</p>
          <h1 className={styles.heroTitle}>
            Never Stand <span>Still</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Trail reviews, gear we trust, climbs we love and the apparel we wear when the road runs out.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/reviews" className={styles.btnPrimary}>
              Latest Reviews
            </Link>
            <Link href="/gallery" className={styles.btnSecondary}>
              Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <p className={styles.scrollIndicator}>Scroll</p>
    </section>
  )
}