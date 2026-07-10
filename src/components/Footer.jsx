import logo from '../assets/logo.png'

function Footer() {
  const year = 2026 // TODO: заменить на new Date().getFullYear() при желании

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo logo--light">
            <img className="logo__img" src={logo} alt="Face &amp; Body Code" />
            <span className="logo__text">
              Face Body Code<span className="logo__sub">beauty &amp; aesthetics</span>
            </span>
          </a>
          <p>Красота, эстетика и&nbsp;забота о&nbsp;вас каждый день.</p>
        </div>

        <div className="footer__col">
          <h4>Услуги</h4>
          <a href="#services">Аппаратная косметология</a>
          <a href="#services">Перманентный макияж</a>
          <a href="#services">Маникюр и&nbsp;педикюр</a>
          <a href="#services">Ресницы и&nbsp;брови</a>
        </div>

        <div className="footer__col">
          <h4>Навигация</h4>
          <a href="#masters">Мастера</a>
          <a href="#gallery">Галерея</a>
          <a href="#about">О&nbsp;студии</a>
          <a href="#contact">Контакты</a>
        </div>

        <div className="footer__col">
          <h4>Контакты</h4>
          <a href="tel:+998974409998">+998 97 440 99 98</a>
          <a href="https://instagram.com/face_body.code" target="_blank" rel="noreferrer">
            @face_body.code
          </a>
          <p>Ташкент, Чиланзар, 1-квартал, дом&nbsp;64</p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Face Body Code. Все права защищены.</span>
        <span className="footer__made">Шаблонный лендинг · данные заменяются</span>
      </div>
    </footer>
  )
}

export default Footer
