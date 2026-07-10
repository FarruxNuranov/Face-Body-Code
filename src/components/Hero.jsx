function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__content">
        <span className="hero__eyebrow">Студия красоты &amp; эстетики</span>
        <h1 className="hero__title">
          Красота, в которой
          <br />
          <em>вы&nbsp;сияете</em>
        </h1>
        <p className="hero__lead">
          Аппаратная косметология, перманентный макияж, маникюр и уход за ресницами —
          в&nbsp;атмосфере уюта и&nbsp;заботы двух опытных мастеров.
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--gold btn--lg">
            Услуги и&nbsp;цены
          </a>
          <a href="#contact" className="btn btn--ghost btn--lg">
            Как добраться
          </a>
        </div>

        <div className="hero__stats">
          <div className="stat">
            <span className="stat__num">14+</span>
            <span className="stat__label">лет опыта в&nbsp;сумме</span>
          </div>
          <div className="stat">
            <span className="stat__num">2000+</span>
            <span className="stat__label">довольных клиентов</span>
          </div>
          <div className="stat">
            <span className="stat__num">9</span>
            <span className="stat__label">видов услуг</span>
          </div>
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label="Прокрутить вниз">
        <span></span>
      </a>
    </section>
  )
}

export default Hero
