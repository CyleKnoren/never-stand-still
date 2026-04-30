import Link from 'next/link'
import styles from './TabsBar.module.css'

const tabs = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Resources', href: '/resources' },
  { label: 'Shop', href: '/shop' },
  { label: 'About Us', href: '/about' },
]

export default function TabsBar() {
  return (
    <nav className={styles.tabsBar}>
      {tabs.map((tab) => (
        <Link key={tab.label} href={tab.href} className={styles.tab}>
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}