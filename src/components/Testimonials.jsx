import './Testimonials.css'

const testimonials = [
  {
    name: 'Emily R.',
    role: 'Office Manager',
    quote:
      'Happy Roots completely transformed our office. The plants are beautiful and the weekly maintenance means we never have to think about it. Our team loves the space now.',
    initials: 'ER',
  },
  {
    name: 'Jason M.',
    role: 'Yoga Studio Owner',
    quote:
      'The energy in our studio changed the moment the plants went in. Our clients comment on how calming the space feels. Suni really understood what we needed.',
    initials: 'JM',
  },
  {
    name: 'Sarah L.',
    role: 'Homeowner',
    quote:
      'I always killed my plants before. Happy Roots helped me pick the right ones and showed me exactly how to care for them. Six months in and everything is still thriving.',
    initials: 'SL',
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
                <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>
                <footer className="testimonials__author">
                  <div className="testimonials__avatar">{t.initials}</div>
                  <div>
                    <cite className="testimonials__name">{t.name}</cite>
                    <span className="testimonials__role">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
