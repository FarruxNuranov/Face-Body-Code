import { specialists } from '../data/specialists'

function Specialists() {
  return (
    <section id="masters" className="section masters">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Команда</span>
          <h2 className="section__title">Наши мастера</h2>
          <p className="section__sub">
            Два эксперта, каждый — в&nbsp;своём направлении. Индивидуальный подход к&nbsp;каждому.
          </p>
        </div>

        <div className="masters__grid">
          {specialists.map((m) => (
            <article key={m.id} className="master">
              <div className="master__photo">
                <img src={m.photo} alt={m.name} loading="lazy" />
                <span className="master__exp">{m.experience}</span>
              </div>
              <div className="master__info">
                <h3 className="master__name">{m.name}</h3>
                <p className="master__role">{m.role}</p>
                <p className="master__tagline">{m.tagline}</p>
                <ul className="master__services">
                  {m.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a
                  href={m.instagram && m.instagram !== '#' ? m.instagram : 'https://instagram.com/face_body.code'}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--dark"
                >
                  Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialists
