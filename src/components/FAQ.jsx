import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Do you only work with offices?',
    a: 'No. We work with offices, wellness spaces, and homes. Each space gets a tailored approach based on its unique needs.',
  },
  {
    q: 'Do you offer ongoing plant care?',
    a: 'Yes. We offer recurring maintenance, especially for offices and other spaces that need regular service. We handle watering, pruning, cleaning, and health checks.',
  },
  {
    q: 'Can you help if I am new to plants?',
    a: 'Absolutely. We help new plant owners choose the right plants and learn how to care for them with confidence.',
  },
  {
    q: 'Can you help with unhealthy plants?',
    a: 'Yes. We offer plant rescue and support for struggling plants whenever possible. We will assess the issue and recommend a plan.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free consultation and we will learn about your space, goals, and needs. From there, we build a plan that fits.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq section">
      <div className="container container--narrow">
        <div className="faq__header">
          <span className="label reveal">Common questions</span>
          <h2 className="reveal reveal-delay-1">
            Frequently asked questions
          </h2>
        </div>

        <div className="faq__list reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__trigger"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq__question">{faq.q}</span>
                <span className="faq__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <line x1="8" y1="3" x2="8" y2="13" className="faq__icon-v" />
                    <line x1="3" y1="8" x2="13" y2="8" />
                  </svg>
                </span>
              </button>
              <div className="faq__answer">
                <div className="faq__answer-inner">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
