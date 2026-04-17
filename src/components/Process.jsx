import './Process.css'

const steps = [
  {
    number: '1',
    title: 'Consultation',
    description:
      'We learn about your space, your goals, your light, and your experience with plants.',
  },
  {
    number: '2',
    title: 'Plan',
    description:
      'We recommend the right plants, layout, and care approach for your space.',
  },
  {
    number: '3',
    title: 'Care',
    description:
      'We install, guide, and maintain your plants so they continue to look their best.',
  },
]

export default function Process() {
  return (
    <section className="process section section--linen">
      <div className="container">
        <div className="process__header">
          <span className="label reveal">How it works</span>
          <h2 className="reveal reveal-delay-1">Three simple steps</h2>
        </div>

        <div className="process__grid">
          {steps.map((step, i) => (
            <div key={step.number} className={`process__step reveal reveal-delay-${i + 1}`}>
              <div className="process__number-shell">
                <span className="process__number">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
