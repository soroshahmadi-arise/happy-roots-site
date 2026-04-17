import { useState, useMemo } from 'react'
import './Contact.css'

function getMonthData(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return { firstDay, daysInMonth }
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM']

export default function Contact() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const { firstDay, daysInMonth } = useMemo(
    () => getMonthData(currentYear, currentMonth),
    [currentYear, currentMonth]
  )

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear()

  const isPast = (day) => {
    const date = new Date(currentYear, currentMonth, day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayStart
  }

  const isWeekend = (day) => {
    const date = new Date(currentYear, currentMonth, day)
    const dow = date.getDay()
    return dow === 0 || dow === 6
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const handleDateClick = (day) => {
    if (isPast(day) || isWeekend(day)) return
    setSelectedDate(day)
    setSelectedTime(null)
  }

  const selectedDateStr = selectedDate
    ? `${MONTHS[currentMonth]} ${selectedDate}, ${currentYear}`
    : null

  return (
    <section id="contact" className="contact section section--linen">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__text">
            <span className="label reveal">Get in touch</span>
            <h2 className="reveal reveal-delay-1">
              Ready to create a greener, calmer space?
            </h2>
            <div className="divider reveal reveal-delay-1" />
            <p className="reveal reveal-delay-2">
              Whether you need help choosing plants, setting up your space,
              learning how to care for them, or keeping them maintained over
              time, we would love to help.
            </p>
            <p className="reveal reveal-delay-2" style={{ marginTop: 'var(--space-md)', fontSize: '0.9375rem' }}>
              Pick a date and time that works for you. We will confirm your
              consultation within 24 hours.
            </p>
            <div className="contact__info reveal reveal-delay-3">
              <div className="contact__detail">
                <span className="contact__detail-label">Email</span>
                <a href="mailto:suni@ourhappyroots.com">suni@ourhappyroots.com</a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Phone</span>
                <a href="tel:+14157979020">(415) 797-9020</a>
              </div>
            </div>
          </div>

          <div className="calendar reveal reveal-delay-2">
            <div className="calendar__inner">
            <div className="calendar__header">
              <button className="calendar__nav-btn" onClick={prevMonth} aria-label="Previous month">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 3L5 8l5 5" />
                </svg>
              </button>
              <span className="calendar__month">
                {MONTHS[currentMonth]} {currentYear}
              </span>
              <button className="calendar__nav-btn" onClick={nextMonth} aria-label="Next month">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </button>
            </div>

            <div className="calendar__days">
              {DAYS.map((d) => (
                <span key={d} className="calendar__day-label">{d}</span>
              ))}
            </div>

            <div className="calendar__grid">
              {Array.from({ length: firstDay }).map((_, i) => (
                <span key={`empty-${i}`} className="calendar__cell calendar__cell--empty" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const past = isPast(day)
                const weekend = isWeekend(day)
                const disabled = past || weekend
                const selected = selectedDate === day
                const todayClass = isToday(day)

                return (
                  <button
                    key={day}
                    className={`calendar__cell ${selected ? 'calendar__cell--selected' : ''} ${todayClass ? 'calendar__cell--today' : ''} ${disabled ? 'calendar__cell--disabled' : ''}`}
                    onClick={() => handleDateClick(day)}
                    disabled={disabled}
                  >
                    {day}
                  </button>
                )
              })}
            </div>

            {selectedDate && (
              <div className="calendar__times">
                <p className="calendar__times-label">{selectedDateStr}</p>
                <div className="calendar__time-grid">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      className={`calendar__time ${selectedTime === time ? 'calendar__time--selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              className={`btn btn--primary calendar__book ${selectedDate && selectedTime ? '' : 'calendar__book--disabled'}`}
              disabled={!selectedDate || !selectedTime}
            >
              {selectedDate && selectedTime
                ? `Book ${selectedDateStr} at ${selectedTime}`
                : 'Select a date and time'}
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
