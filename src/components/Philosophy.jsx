import './Philosophy.css'

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy section section--linen">
      <div className="container container--narrow">
        <div className="philosophy__content">
          <span className="label reveal">Our belief</span>
          <h2 className="reveal reveal-delay-1">
            A greener space can help you breathe
          </h2>
          <div className="divider reveal reveal-delay-1" />
          <p className="philosophy__text reveal reveal-delay-2">
            After a busy day, your space should help you relax, reset, and feel
            better. We believe indoor plants can bring calm, softness, and life
            into the places where people spend their time. Our goal is to make
            that feeling easier to create and easier to maintain.
          </p>
          <p className="philosophy__sig reveal reveal-delay-3">
            Suni, Founder of Happy Roots
          </p>
        </div>
      </div>
    </section>
  )
}
