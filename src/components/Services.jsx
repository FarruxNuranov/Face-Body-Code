import { useState } from 'react'
import { priceCategories, priceGroups } from '../data/prices'

function Services() {
  const [active, setActive] = useState(priceCategories[0].id)

  const current = priceCategories.find((c) => c.id === active)
  const groups = priceGroups.filter((g) => g.cat === active)

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Прайс-лист</span>
          <h2 className="section__title">Услуги и&nbsp;цены</h2>
          <p className="section__sub">
            Выберите направление — цены указаны в&nbsp;сумах.
          </p>
        </div>

        {/* Вкладки */}
        <div className="tabs__list">
          {priceCategories.map((c) => (
            <button
              key={c.id}
              className={`tab ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              <span className="tab__icon">{c.icon}</span>
              <span className="tab__label">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Панель активной категории */}
        <div className="price-panel">
          <div className="price-panel__head">
            <span className="price-panel__icon">{current.icon}</span>
            <div>
              <h3>{current.label}</h3>
              <p>{current.tagline}</p>
            </div>
          </div>

          <div className="price-groups">
            {groups.map((g) => (
              <article key={g.id} className="price-group">
                <header className="price-group__head">
                  <div className="price-group__titles">
                    <h4>{g.title}</h4>
                    {g.subtitle && (
                      <span className="price-group__subtitle">{g.subtitle}</span>
                    )}
                  </div>
                  <span className="price-group__master">{g.master}</span>
                </header>

                {g.sections.map((sec, i) => (
                  <div key={i} className="price-section">
                    {sec.h && <h5 className="price-section__head">{sec.h}</h5>}
                    <ul className="price-rows">
                      {sec.items.map((it, j) => (
                        <li key={j} className="price-row">
                          <span className="price-row__name">
                            {it.n}
                            {it.note && (
                              <span className="price-row__note">{it.note}</span>
                            )}
                          </span>
                          <span className="price-row__dots" />
                          <span className="price-row__price">
                            {it.p}
                            {it.p !== '—' &&
                              it.p !== 'по запросу' &&
                              !it.p.startsWith('+') && <em> сум</em>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
