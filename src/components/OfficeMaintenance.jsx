import './OfficeMaintenance.css'

export default function OfficeMaintenance() {
  return (
    <section id="office" className="office section section--green" aria-label="Office plant maintenance service">
      <div className="container">
        <div className="office__layout">
          <div className="office__text">
            <span className="label reveal">Featured service</span>
            <h2 className="reveal reveal-delay-1">
              Weekly plant maintenance for offices
            </h2>
            <div className="divider reveal reveal-delay-1" />
            <p className="reveal reveal-delay-2">
              For offices and professional spaces, we offer recurring plant care
              to keep indoor plants healthy, clean, and consistently maintained.
              Your team gets the benefit of a greener, more welcoming workplace
              without having to manage the upkeep.
            </p>
            <div className="office__benefits reveal reveal-delay-3">
              <div className="office__benefit">
                <span className="office__check">&#10003;</span>
                A more peaceful atmosphere
              </div>
              <div className="office__benefit">
                <span className="office__check">&#10003;</span>
                Healthier, better-kept plants
              </div>
              <div className="office__benefit">
                <span className="office__check">&#10003;</span>
                Less stress for your team
              </div>
              <div className="office__benefit">
                <span className="office__check">&#10003;</span>
                Ongoing care for busy spaces
              </div>
            </div>
            <a href="#contact" className="btn btn--white reveal reveal-delay-4">
              Ask About Office Service
            </a>
          </div>
          <div className="office__visual reveal reveal-delay-2">
            <div className="office__stat">
              <span className="office__stat-number">93%</span>
              <span className="office__stat-label">
                of employees say plants improve their workplace experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
