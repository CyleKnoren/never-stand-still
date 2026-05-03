import Footer from '@/components/Footer/Footer'

export default function About() {
  return (
    <div style={{paddingTop: 'var(--nav-height)'}}>
      <div style={{maxWidth: 'var(--max-width)', margin: '0 auto', padding: '4rem 2rem'}}>

        {/* Header */}
        <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Who We Are</p>
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1, marginBottom: '4rem'}}>About Us</h1>

        {/* Main Content */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem'}}>
          
          {/* Photo Placeholder */}
          <div style={{
            aspectRatio: '3/4',
            backgroundColor: 'var(--nss-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/NeverStandStill/Logo/Circle_Fill/watermark - white/full/white_logo_transparent_background.png"
              alt="NSS"
              style={{height: '150px', width: 'auto', opacity: 0.3}}
            />
          </div>

          {/* Text */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <h2 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2.5rem', textTransform: 'uppercase', color: 'var(--nss-white)', lineHeight: 1}}>
              Built by Two. For Everyone.
            </h2>
            <p style={{fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--nss-gray)', lineHeight: 1.8}}>
              We're a couple based in Somerset West, Cape Town, with an obsession for the outdoors. Between us we've hiked, climbed, ridden and raced across some of South Africa's most spectacular landscapes.
            </p>
            <p style={{fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--nss-gray)', lineHeight: 1.8}}>
              Never Stand Still started as a way to document our adventures and share the trails, gear and experiences that have shaped us. We believe the outdoors is for everyone — and we're here to help you find your next adventure.
            </p>
            <p style={{fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--nss-gray)', lineHeight: 1.8}}>
              Every review is honest. Every trail is one we've done ourselves. Every piece of gear is something we've actually used. No fluff, no filler — just real experiences from real adventurers.
            </p>
            <div style={{width: '60px', height: '2px', backgroundColor: 'var(--nss-red)', marginTop: '1rem'}}></div>
            <p style={{fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--nss-white)'}}>
              Somerset West · Cape Town · South Africa
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '5rem'}}>
          {[
            { number: '50+', label: 'Trails Reviewed' },
            { number: '100+', label: 'Gear Items Tested' },
            { number: '1000km+', label: 'Covered on Foot' },
          ].map((stat) => (
            <div key={stat.label} style={{backgroundColor: 'var(--nss-dark)', padding: '2.5rem', textAlign: 'center'}}>
              <p style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '3rem', color: 'var(--nss-red)', lineHeight: 1, marginBottom: '0.5rem'}}>{stat.number}</p>
              <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nss-gray)'}}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{backgroundColor: 'var(--nss-dark)', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem'}}>
          <div>
            <p style={{fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--nss-red)', marginBottom: '0.5rem'}}>Stay Connected</p>
            <h3 style={{fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', color: 'var(--nss-white)'}}>Follow the Adventure</h3>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', backgroundColor: 'var(--nss-red)', color: 'var(--nss-white)', padding: '0.85rem 2rem', textDecoration: 'none'}}>
            Follow on Instagram
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}