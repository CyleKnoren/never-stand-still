import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>

        {/* Logo */}
        <div className={styles.logoBlock}>
          <img
            src="/NeverStandStill/Logo/Circle_Fill/watermark - white/full/white_logo_transparent_background.png"
            alt="NSS"
            className={styles.logoImg}
          />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Never Stand Still</span>
            <span className={styles.logoLocation}>Somerset West · Cape Town</span>
          </div>
        </div>

        {/* Tagline */}
        <div className={styles.taglineBlock}>
          <p className={styles.tagline}>
            An adventure lifestyle journal — built by two, for anyone who'd rather be on the trail.
          </p>
        </div>

        {/* Social */}
        <div className={styles.socialBlock}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
            IG
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
            YT
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
            FB
          </a>
          <a href="mailto:hello@neverstandstill.co.za" className={styles.socialBtn}>
            ✉
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© 2026 Never Stand Still. All Rights Reserved.</p>
        <p className={styles.domain}>neverstandstill.co.za</p>
      </div>

    </footer>
  )
}