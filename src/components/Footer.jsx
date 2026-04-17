import logo from '../assets/images/logo.webp'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={logo} alt="Happy Roots" className="footer__logo" />
            <p className="footer__tagline">
              Indoor plant design and care for offices, wellness spaces, and homes.
            </p>
          </div>

          <nav className="footer__nav">
            <div className="footer__col">
              <span className="footer__col-title">Services</span>
              <a href="#services">Plant Selection</a>
              <a href="#services">Plant Styling</a>
              <a href="#services">Plant Education</a>
              <a href="#office">Office Maintenance</a>
              <a href="#services">Plant Rescue</a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Company</span>
              <a href="#philosophy">About</a>
              <a href="#contact">Contact</a>
              <a href="https://www.instagram.com/our.happyroots/" target="_blank" rel="noopener noreferrer" className="footer__ig">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Happy Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
