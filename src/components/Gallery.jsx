const shots = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=80',
]

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Портфолио</span>
          <h2 className="section__title">Наши работы</h2>
          <p className="section__sub">
            Реальные результаты процедур. Скоро здесь будут ваши любимые фото.
          </p>
        </div>

        <div className="gallery__grid">
          {shots.map((src, i) => (
            <figure key={src} className={`gallery__item gi-${i + 1}`}>
              <img src={src} alt="Работа студии" loading="lazy" />
              <div className="gallery__hover">
                <span>FBC</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
