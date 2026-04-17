import './Testimonials.css'

const testimonials = [
  {
    name: 'Emily R',
    quote:
      'The plants arrived in perfect condition and instantly lifted the whole space. You can tell they really care about quality.',
    initials: 'ER',
  },
  {
    name: 'Jason',
    quote:
      'I was worried about leaving my plants while traveling, but everything was healthier than before when I came back. Highly reliable.',
    initials: 'J',
  },
  {
    name: 'Sarah',
    quote:
      'Their plant care service is a game changer. I don\'t stress about my plants anymore when I travel.',
    initials: 'S',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <span className="label reveal">What clients say</span>
          <h2 className="reveal reveal-delay-1">
            Spaces we've helped bring to life
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonials__shell reveal reveal-delay-${i + 1}`}>
              <blockquote className="testimonials__card">
                <cite className="testimonials__name">{t.name}</cite>
                <div className="testimonials__stars" aria-label="5 out of 5 stars">
                  {'★★★★★'.split('').map((s, j) => (
                    <span key={j} className="testimonials__star">{s}</span>
                  ))}
                </div>
                <p className="testimonials__quote">{t.quote}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
