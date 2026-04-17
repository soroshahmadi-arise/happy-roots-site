import monstera from '../assets/images/monstera.webp'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src={monstera}
          alt="Lush indoor plants in a modern space"
          className="hero__image"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <span className="label reveal">Indoor Plant Design &amp; Care</span>
        <h1 className="reveal reveal-delay-1">
          Create Calm, Green Spaces<br />for Work and Home
        </h1>
        <p className="hero__sub reveal reveal-delay-2">
          We design, install, and maintain indoor plants for offices,
          wellness spaces, and select homes.
        </p>
        <div className="hero__actions reveal reveal-delay-3">
          <a href="#contact" className="btn btn--primary">
            Book a Consultation
          </a>
          <a href="#services" className="btn btn--ghost">
            Explore Services
          </a>
        </div>
        <p className="hero__trust reveal reveal-delay-4">
          Plant styling, setup, education, and ongoing maintenance
        </p>
      </div>
    </section>
  )
}
