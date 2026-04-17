import './Audiences.css'

const audiences = [
  {
    title: 'Offices',
    description:
      'Create a polished, welcoming environment for employees, clients, and guests with indoor plants that are professionally maintained.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="8" width="24" height="18" rx="1" />
        <line x1="4" y1="14" x2="28" y2="14" />
        <line x1="16" y1="14" x2="16" y2="26" />
        <rect x="10" y="4" width="12" height="4" rx="0.5" />
      </svg>
    ),
  },
  {
    title: 'Wellness Spaces',
    description:
      'Bring natural calm and grounding energy into yoga studios, wellness centers, and spaces designed for healing, movement, and rest.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8c-3 4-3 8 0 12" />
        <path d="M16 8c3 4 3 8 0 12" />
        <line x1="8" y1="16" x2="24" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Homes',
    description:
      'Create a relaxing green space at home, with guidance for beginners and support when you need it.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 16L16 6l12 10" />
        <rect x="7" y="15" width="18" height="13" rx="1" />
        <rect x="13" y="21" width="6" height="7" />
      </svg>
    ),
  },
]

export default function Audiences() {
  return (
    <section className="audiences section section--linen">
      <div className="container">
        <span className="label reveal">Who we help</span>
        <h2 className="reveal reveal-delay-1">
          Plant care for the spaces people<br />live, work, and recharge in
        </h2>
        <div className="audiences__grid">
          {audiences.map((item, i) => (
            <div key={item.title} className={`audiences__card reveal reveal-delay-${i + 1}`}>
              <div className="audiences__card-inner">
                <div className="audiences__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
