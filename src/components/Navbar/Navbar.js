'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const reviewCategories = [
  {
    label: 'Trails',
    links: ['MTB', 'Hiking', 'Climbing', 'Water'],
    base: '/reviews/trails'
  },
  {
    label: 'Gear',
    links: ['Apparel', 'Backpacks', 'Tech', 'Camping', 'Cooking', 'Gadgets'],
    base: '/reviews/gear'
  },
  {
    label: 'Media',
    links: ['Movies', 'Books', 'Podcasts'],
    base: '/reviews/media'
  },
  {
    label: 'Adventure Racing',
    links: ['Races'],
    base: '/reviews/adventure-racing'
  },
]

const exploreLinks = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'Resources', href: '/resources' },
  { label: 'Shop', href: '/shop' },
  { label: 'About Us', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <Link href="/" className={styles.logoWrapper} onClick={close}>
          <img
            src="/NeverStandStill/Logo/Circle_Fill/watermark - white/full/white_logo_transparent_background.png"
            alt="NSS"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>Never Stand Still</span>
        </Link>

        {/* Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <span className={styles.menuLabel}>Close ✕</span>
          ) : (
            <>
              <span className={styles.menuLabel}>Menu</span>
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          )}
        </button>
      </nav>

      {/* Overlay Menu */}
      <div className={`${styles.overlay} ${open ? styles.open : ''}`}>
        <div className={styles.menuInner}>

          {/* Left — Reviews */}
          <div>
            <p className={styles.sectionLabel}>Reviews</p>
            <div className={styles.reviewsGrid}>
              {reviewCategories.map((cat) => (
                <div key={cat.label} className={styles.reviewCategory}>
                  <h3>{cat.label}</h3>
                  <ul>
                    {cat.links.map((link) => (
                      <li key={link}>
                        <Link
                          href={`${cat.base}/${link.toLowerCase().replace(' ', '-')}`}
                          onClick={close}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Right — Explore */}
          <div>
            <p className={styles.sectionLabel}>Explore</p>
            <div className={styles.exploreLinks}>
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.exploreLink}
                  onClick={close}
                >
                  {link.label}
                  <span>›</span>
                </Link>
              ))}
            </div>
            <div className={styles.basedIn}>
              <p>Based In</p>
              <p>Somerset West · Cape Town · South Africa</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}