import Footer from '@/components/Footer/Footer'

export default function Shop() {
  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '8rem 2rem',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '2rem',
      }}>
        <img
          src="/NeverStandStill/Logo/Circle_Fill/watermark - white/full/white_logo_transparent_background.png"
          alt="NSS"
          style={{height: '120px', width: 'auto', opacity: 0.8}}
        />
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)'}}>
          Coming Soon
        </p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1}}>
          The NSS Shop
        </h1>
        <p style={{fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--nss-gray)', lineHeight: 1.6, maxWidth: '480px'}}>
          Adventure apparel built for the trail, the crag and everything in between. Our first drop is coming soon.
        </p>
        <div style={{width: '60px', height: '2px', backgroundColor: 'var(--nss-red)'}}></div>
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nss-gray)'}}>
          Follow us on Instagram to be the first to know
        </p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', backgroundColor: 'var(--nss-red)', color: 'var(--nss-white)', padding: '0.85rem 2rem', textDecoration: 'none'}}>
          Follow on Instagram
        </a>
      </div>
      <Footer />
    </div>
  )
}