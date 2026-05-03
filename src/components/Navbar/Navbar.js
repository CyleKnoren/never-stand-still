'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const reviewCategories = [
{
    label: 'Trails',
    base: '/reviews/trails',
    links: [
      { label: 'MTB', href: '/reviews/trails?filter=mtb' },
      { label: 'Hiking', href: '/reviews/trails?filter=hiking' },
      { label: 'Climbing', href: '/reviews/trails?filter=climbing' },
      { label: 'Water', href: '/reviews/trails?filter=water' },
    ]
  },
{
    label: 'Gear',
    base: '/reviews/gear',
    links: [
      { label: 'Apparel', href: '/reviews/gear?filter=apparel' },
      { label: 'Backpacks', href: '/reviews/gear?filter=backpacks' },
      { label: 'Tech', href: '/reviews/gear?filter=tech' },
      { label: 'Camping', href: '/reviews/gear?filter=camping' },
      { label: 'Cooking', href: '/reviews/gear?filter=cooking' },
      { label: 'Gadgets', href: '/reviews/gear?filter=gadgets' },
    ]
  },
{
    label: 'Media',
    base: '/reviews/media',
    links: [
      { label: 'Movies', href: '/reviews/media?filter=movies' },
      { label: 'Books', href: '/reviews/media?filter=books' },
      { label: 'Podcasts', href: '/reviews/media?filter=podcasts' },
    ]
  },
{
    label: 'Races',
    base: '/reviews/adventure-racing',
    links: [
      { label: 'MTB Series', href: '/reviews/adventure-racing?filter=mtb-series' },
      { label: 'Running', href: '/reviews/adventure-racing?filter=running' },
      { label: 'Adventure Racing', href: '/reviews/adventure-racing?filter=races' },
    ]
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
                  {/* Clickable category header */}
                  <h3>
                    <Link href={cat.base} onClick={close}>
                      {cat.label}
                    </Link>
                  </h3>
                  {/* Subcategory links */}
                  <ul>
                    {cat.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} onClick={close}>
                          {link.label}
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