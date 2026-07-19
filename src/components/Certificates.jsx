import { useEffect, useState } from 'react'
import { certificates } from '../data/certificates'

function Certificates() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % certificates.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + certificates.length) % certificates.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Квалификация</span>
          <h2 className="section__title">Сертификаты и дипломы</h2>
          <p className="section__sub">
            Дипломированные мастера с&nbsp;профильным обучением. Нажмите, чтобы рассмотреть документ.
          </p>
        </div>

        <p className="certs__hint">← листайте вбок →</p>

        <div className="certs__grid">
          {certificates.map((c, i) => (
            <button
              key={c.id}
              className="cert"
              onClick={() => setActive(i)}
              aria-label={`Открыть сертификат: ${c.title}`}
            >
              <span className="cert__thumb">
                <img src={c.img} alt={c.title} loading="lazy" />
                <span className="cert__zoom">Смотреть</span>
              </span>
              <span className="cert__body">
                <span className="cert__master">{c.master}</span>
                <span className="cert__title">{c.title}</span>
                <span className="cert__sub">{c.subtitle}</span>
                <span className="cert__meta">
                  {c.org} · {c.year}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="cert-modal" onClick={() => setActive(null)}>
          <button className="cert-modal__close" aria-label="Закрыть" onClick={() => setActive(null)}>
            ×
          </button>
          <button
            className="cert-modal__nav cert-modal__nav--prev"
            aria-label="Предыдущий"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i - 1 + certificates.length) % certificates.length)
            }}
          >
            ‹
          </button>
          <figure className="cert-modal__figure" onClick={(e) => e.stopPropagation()}>
            <img src={certificates[active].img} alt={certificates[active].title} />
            <figcaption>
              <strong>{certificates[active].title}</strong>
              <span>
                {certificates[active].master} · {certificates[active].org} · {certificates[active].year}
              </span>
            </figcaption>
          </figure>
          <button
            className="cert-modal__nav cert-modal__nav--next"
            aria-label="Следующий"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i + 1) % certificates.length)
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Certificates
