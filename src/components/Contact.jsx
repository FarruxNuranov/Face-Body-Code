import { useState } from 'react'
import { bookingOptions } from '../data/prices'
import { SHEETS_URL } from '../config'

function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setSending(true)

    const body = new URLSearchParams(new FormData(e.target))

    try {
      if (SHEETS_URL) {
        await fetch(SHEETS_URL, { method: 'POST', mode: 'no-cors', body })
      }
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Запись</span>
          <h2 className="section__title">Оставьте заявку</h2>
          <p className="section__sub">
            Заполните форму — мы&nbsp;свяжемся с&nbsp;вами и&nbsp;подберём удобное время.
          </p>
        </div>

        <div className="contact__inner">
          <form className="contact__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact__thanks">
                <span className="contact__check">✓</span>
                <h3>Спасибо!</h3>
                <p>
                  Заявка принята. Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время.
                </p>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => setSent(false)}
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Онлайн-запись</h3>
                <label className="field">
                  <span>Ваше имя</span>
                  <input name="name" type="text" placeholder="Как к вам обращаться?" required />
                </label>
                <label className="field">
                  <span>Телефон</span>
                  <input name="phone" type="tel" placeholder="+998 __ ___ __ __" required />
                </label>
                <label className="field">
                  <span>Услуга</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Выберите услугу
                    </option>
                    {bookingOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Комментарий</span>
                  <textarea name="comment" rows="3" placeholder="Удобное время, пожелания…" />
                </label>
                {error && (
                  <p className="contact__error">
                    Не&nbsp;удалось отправить. Позвоните нам или напишите в&nbsp;Instagram.
                  </p>
                )}
                <button type="submit" className="btn btn--gold btn--block" disabled={sending}>
                  {sending ? 'Отправляем…' : 'Отправить заявку'}
                </button>
                <p className="contact__note">
                  Нажимая кнопку, вы&nbsp;соглашаетесь на&nbsp;обработку персональных данных.
                </p>
              </>
            )}
          </form>

          <div className="contact__info">
            <ul className="contact__list">
              <li>
                <span className="contact__ico">📍</span>
                <div>
                  <b>Адрес</b>
                  <p>г. Ташкент, Чиланзар, 1-квартал, дом&nbsp;64</p>
                </div>
              </li>
              <li>
                <span className="contact__ico">✆</span>
                <div>
                  <b>Телефон</b>
                  <p>
                    <a href="tel:+998974409998">+998 97 440 99 98</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__ico">◷</span>
                <div>
                  <b>Часы работы</b>
                  <p>Ежедневно 09:00 – 21:00</p>
                </div>
              </li>
              <li>
                <span className="contact__ico">✦</span>
                <div>
                  <b>Instagram</b>
                  <p>
                    <a
                      href="https://instagram.com/face_body.code"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @face_body.code
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="Face Body Code на карте — Чиланзар, 1-квартал, 64"
            src="https://maps.google.com/maps?q=%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%2C%20%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80%2C%201%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%2C%2064&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
