function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Контакты</span>
          <h2 className="section__title">Как нас найти</h2>
          <p className="section__sub">
            Ждём вас в&nbsp;студии Face Body Code. Запись и&nbsp;вопросы —
            в&nbsp;Instagram или по&nbsp;телефону.
          </p>
        </div>

        <div className="contact__inner">
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

            <a
              href="https://instagram.com/face_body.code"
              target="_blank"
              rel="noreferrer"
              className="btn btn--gold btn--lg"
            >
              Написать в&nbsp;Instagram
            </a>
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
      </div>
    </section>
  )
}

export default Contact
