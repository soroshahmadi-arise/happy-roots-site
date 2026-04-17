import repotting from '../assets/images/repotting.webp'
import './Services.css'

const services = [
  {
    number: '01',
    title: 'Plant Selection and Setup',
    description: 'We help you choose the right plants for your space, lighting, and lifestyle.',
  },
  {
    number: '02',
    title: 'Plant Styling',
    description:
      'We create green spaces that feel intentional, calming, and visually beautiful.',
  },
  {
    number: '03',
    title: 'Plant Education',
    description:
      'We guide new plant owners so they feel confident caring for their plants.',
  },
  {
    number: '04',
    title: 'Ongoing Maintenance',
    description:
      'For offices and busy spaces, we provide recurring care to keep plants healthy and thriving.',
  },
  {
    number: '05',
    title: 'Plant Rescue',
    description:
      'Have struggling plants? We can assess them, treat them, and help bring them back to life.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__layout">
          <div className="services__left">
            <span className="label reveal">How we help</span>
            <h2 className="reveal reveal-delay-1">
              Everything your plants need to thrive
            </h2>
            <div className="services__image reveal reveal-delay-2">
              <img src={repotting} alt="Hands carefully repotting a plant" loading="lazy" />
            </div>
          </div>

          <div className="services__list">
            {services.map((item, i) => (
              <div key={item.number} className={`services__item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="services__number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
