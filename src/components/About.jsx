const perks = [
  {
    icon: '✦',
    title: 'Сертифицированные мастера',
    text: 'Регулярное обучение и работа только на профессиональном оборудовании.',
  },
  {
    icon: '❀',
    title: 'Стерильность и безопасность',
    text: 'Одноразовые материалы, дезинфекция и стерилизация инструментов.',
  },
  {
    icon: '☾',
    title: 'Уютная атмосфера',
    text: 'Приятная музыка, ароматы и внимание к каждой детали вашего визита.',
  },
  {
    icon: '✧',
    title: 'Индивидуальный подход',
    text: 'Подбираем процедуры под ваш тип кожи, пожелания и образ жизни.',
  },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="about__bg" />
      <div className="container">
        <div className="section__head section__head--light">
          <span className="section__eyebrow">Почему мы</span>
          <h2 className="section__title">Забота в&nbsp;каждой детали</h2>
          <p className="section__sub">
            ÉCLAT — это пространство, где эстетика встречается с&nbsp;комфортом.
          </p>
        </div>

        <div className="perks">
          {perks.map((p) => (
            <div key={p.title} className="perk">
              <span className="perk__icon">{p.icon}</span>
              <h3 className="perk__title">{p.title}</h3>
              <p className="perk__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
