import './WhyPlants.css'

export default function WhyPlants() {
  return (
    <section className="why section">
      <div className="container">
        <div className="why__left">
          <span className="label reveal">Why indoor plants</span>
          <h2 className="reveal reveal-delay-1">
            Plants change how a space feels
          </h2>
          <div className="divider reveal reveal-delay-1" />
        </div>
        <p className="why__text reveal reveal-delay-2">
          Indoor plants do more than fill a corner. They soften a room,
          create calm, and make a space feel healthier and more welcoming.
          Whether it is an office, yoga studio, wellness center, or home,
          the right plants can completely change the energy of the environment.
        </p>
      </div>
    </section>
  )
}
