import Link from 'next/link'
import styles from './GalleryPreview.module.css'

const photos = [
  { id: 1, alt: 'Trail running at sunrise', image: null },
  { id: 2, alt: 'Kayaking at sunset', image: null },
  { id: 3, alt: 'Camping under the stars', image: null },
  { id: 4, alt: 'Aerial mountain road', image: null },
  { id: 5, alt: 'Rock climbing close up', image: null },
  { id: 6, alt: 'Couple on summit at sunset', image: null },
]

export default function GalleryPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Field Notes</p>
            <h2 className={styles.title}>The Gallery</h2>
          </div>
          <Link href="/gallery" className={styles.openGallery}>
            Open Gallery →
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {photos.map((photo) => (
            <Link key={photo.id} href="/gallery" className={styles.photo}>
              {photo.image ? (
                <img src={photo.image} alt={photo.alt} />
              ) : (
                <div className={styles.placeholder} />
              )}
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}