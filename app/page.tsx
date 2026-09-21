import Image from 'next/image';
import { ArrowUpRight, Heart, MapPin, Phone, Sprout } from 'lucide-react';

const phone = 'tel:+19855166091';
const directions = 'https://www.google.com/maps/search/?api=1&query=81605+Highway+41+Bush+LA+70431';
const assetBase = process.env.GITHUB_PAGES === 'true' ? '/BushFoodPantry' : '';

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Bush Food Pantry, back to top">
      <span className="brand-mark" aria-hidden="true"><Sprout size={27} strokeWidth={1.8} /></span>
      <span>Bush Food Pantry<small>BUSH, LOUISIANA</small></span>
    </a>
  );
}

export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="topbar" id="top"><div className="wrap">Neighbors helping neighbors in St. Tammany Parish</div></div>
    <header className="header"><div className="wrap nav">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#get-food">Get food</a>
        <a href="#help">How to help</a>
        <a href="#visit">Visit us</a>
      </nav>
      <a className="nav-call" href={phone}><Phone size={17} /> (985) 516-6091</a>
    </div></header>

    <main id="main">
      <section className="wrap hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Here for our neighbors</span>
          <h1 id="hero-title">A little help.<br /><em>A lot of heart.</em></h1>
          <p>Bush Food Pantry helps individuals and families in St. Tammany Parish put food on the table.</p>
          <div className="hero-actions">
            <a className="button" href="#get-food">I need food <ArrowUpRight size={18} /></a>
            <a className="button outline" href="#help">I want to help <Heart size={17} /></a>
          </div>
          <p className="call-note">Distribution days can change. Please call before you visit.</p>
        </div>
        <div className="hero-image">
          <Image unoptimized src={`${assetBase}/produce.jpg`} width={1800} height={1196} alt="Fresh vegetables in market crates" priority />
          <span className="image-caption">Good food for our community.</span>
        </div>
      </section>

      <section className="notice" aria-label="Quick contact information"><div className="wrap notice-inner">
        <div><MapPin size={25} aria-hidden="true" /><span><strong>Find us in Bush</strong>81605 Highway 41, Bush, LA 70431</span></div>
        <div><Phone size={25} aria-hidden="true" /><span><strong>Call before visiting</strong><a href={phone}>(985) 516-6091</a></span></div>
      </div></section>

      <section className="wrap section get-food" id="get-food">
        <div className="section-intro"><span className="eyebrow">Get food</span><h2>Food for your table.<br />A neighbor to call.</h2></div>
        <div className="section-body">
          <p>We provide food assistance to St. Tammany Parish residents and follow Second Harvest Food Bank guidelines.</p>
          <p>Call us to ask about the next distribution, current eligibility, and anything you may need to bring. That way, you can plan your visit with confidence.</p>
          <a className="button" href={phone}>Call the pantry <Phone size={18} /></a>
        </div>
      </section>

      <section className="help" id="help"><div className="wrap help-inner">
        <div><span className="eyebrow">Give back</span><h2>Help a neighbor<br />feel at home.</h2><p>There are simple ways to support the pantry. Call us to find out what would help most right now.</p></div>
        <div className="help-options">
          <article><span>01</span><div><h3>Share food and essentials</h3><p>Ask which items are needed and when to drop them off.</p></div></article>
          <article><span>02</span><div><h3>Give your time</h3><p>Ask about current volunteer opportunities.</p></div></article>
          <article><span>03</span><div><h3>Bring people together</h3><p>Talk with us before organizing a food drive or group contribution.</p></div></article>
          <a className="button yellow" href={phone}>Talk with us <Phone size={18} /></a>
        </div>
      </div></section>

      <section className="wrap section visit" id="visit">
        <div><span className="eyebrow">Visit and contact</span><h2>Right here in Bush.</h2><p>We would love to help you plan your visit. Please call to confirm current distribution days and hours before traveling.</p></div>
        <div className="visit-card">
          <strong>Bush Food Pantry</strong>
          <address>81605 Highway 41<br />Bush, LA 70431</address>
          <a href={phone}><Phone size={19} /> (985) 516-6091</a>
          <a href={directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18} /></a>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="wrap footer-inner">
      <Brand />
      <p>Neighbors helping neighbors in Bush, Louisiana.</p>
      <small>Information from the <a href="https://cms3.revize.com/revize/sttammanyparish/Documents/Department/Health%20and%20Human%20Service/Community%20Resources/Community%20Resource%20List%202025.pdf" target="_blank" rel="noopener noreferrer">St. Tammany Parish resource list</a>. Please call for current details.</small>
    </div></footer>
  </>;
}
