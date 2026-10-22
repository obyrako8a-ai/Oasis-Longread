import React, { useState } from 'react'
import './styles.css'

const A = '/images/'

function AccentBox({ children, className = '' }) {
  return (
    <div className={`accent-wrap ${className}`}>
      <span className="accent-line accent-line-left"><span className="accent-dot" /></span>
      <div className="accent-box">{children}</div>
      <span className="accent-line accent-line-right"><span className="accent-dot" /></span>
    </div>
  )
}

const historyItems = [
  {
    image: '2_photo.png', title: 'В античности', progress: '90%',
    text: <>В Древнем Риме общественные уборные<br />были просторными залами с мраморными<br />сиденьями, где люди обсуждали новости,<br />и философствовали. Именно тогда<br />родилась знаменитая фраза «Деньги<br />не пахнут», связанная с налогом на туалеты.</>
  },
  {
    image: '3_photo.png', title: 'В Средневековье', progress: '25%',
    text: <>После падения Рима Европа надолго<br />забыла о гигиене. Нечистоты выливались<br />прямо на улицы, что приводило к<br />эпидемиям. Тема стала табу — о ней<br />не говорили, её прятали. Это наложило<br />отпечаток на культуру на столетия вперёд.</>
  },
  {
    image: '100_photo.png', title: 'Европа XIXв.', progress: '45%',
    text: <>В Викторианской эпохе появились<br />эвфемизмы: вместо прямых слов говорили<br />«уборная» и «дамская комната». Мебель<br />для сидения делали с закрытыми<br />ножками, чтобы не смущать. Привычка<br />замалчивать тему перешла в XX век.</>
  },
  {
    image: '4_photo.png', title: 'Россия', progress: '50%',
    text: <>В России Пётр I одним из первых<br />попытался вернуть тему в рамки приличия.<br />Он велел строить общественные уборные<br />на улицах городов. Это был шаг к тому,<br />чтобы сделать пространство города<br />удобным для человека.</>
  }
]

function HistoryCard({ item }) {
  return <article className="history-card">
    <img className="history-image" src={`${A}${item.image}`} alt="" draggable="false" />
    <div className="history-title-row"><h3>{item.title}</h3><div className="history-progress"><span style={{ width: item.progress }} /></div></div>
    <p className="history-text">{item.text}</p>
  </article>
}

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState('')

  function submitFeedback(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <main className="longread">
    <section className="hero">
      <div className="hero-panel">
        <div className="hero-top">
          <h1 className="hero-title">КУЛЬТУРА<br />СТЫДА</h1>
          <div className="hero-right">
            <nav className="hashtags"><span>#табу</span><span>#туалет</span><span>#уборная</span><span>#инфраструктура</span></nav>
            <div className="hero-tagline"><p>Как табуированные темы приводят<br />к общему дискомфорту</p></div>
          </div>
        </div>
        <div className="hero-image-wrap"><img src={`${A}die.png`} alt="" className="hero-image" /><div className="hero-overlay" /></div>
      </div>
    </section>

    <section className="section section-two">
      <h2 className="section-title">ПОЧЕМУ НАМ НЕЛОВКО?</h2>
      <div className="two-layout">
        <div className="two-text"><AccentBox><p>Тема туалетов касается каждого,<br />но считается неприличной.<br />О базовых потребностях<br />не принято говорить вслух,<br />появляется неловкость,<br />буд-то это что-то грязное<br />и неприемлемое.</p></AccentBox></div>
        <div className="framed-photo photo-one"><div className="orange-frame" /><img src={`${A}1_photo.png`} alt="" draggable="false" /></div>
      </div>
    </section>

    <section className="section section-three">
      <h2 className="section-title history-heading">ОТКУДА ЭТО ВЗЯЛОСЬ?</h2>
      <div className="history-background"><div className="history-grid">{historyItems.map(item => <HistoryCard key={item.title} item={item} />)}</div></div>
    </section>

    <section className="section section-four">
      <div className="four-layout">
        <div className="framed-photo photo-five"><div className="orange-frame" /><img src={`${A}5_photo.png`} alt="" draggable="false" /></div>
        <div className="four-text"><h2 className="section-title">КАК ЭТО ВЛИЯЕТ?</h2><AccentBox className="four-accent"><p>В культуре, где всё, связанное<br />с телом, считается неприличным,<br />туалеты отходят на второй план.<br />Их прячут, экономят на них,<br />делают неудобными.<br />Замалчивание темы влияет<br />на качество городской среды.</p></AccentBox></div>
      </div>
    </section>

    <section className="section section-five">
      <h2 className="section-title five-heading">ЕСЛИ ГОВОРИТЬ, ТО ЧТО БУДЕТ?</h2>
      <div className="story-rows">
        <div className="story-row"><p className="story-copy align-right">В Азии про туалеты говорят открыто: в рекламе, в школах, в искусстве. Есть музеи на эту тему и детские книги о гигиене. Архитекторы создают уборные как арт-объекты.</p><img src={`${A}7_photo.png`} alt="Современная общественная уборная" /></div>
        <div className="story-row reverse"><img src={`${A}6_photo.png`} alt="" /><p className="story-copy">В Сингапуре власти ввели штрафы за неубранный туалет и запустили кампании в школах. Чистота стала нормой, а не исключением. Результат: Сингапур считается одним из самых комфортных городов мира по качеству общественных уборных.</p></div>
        <div className="story-row"><p className="story-copy align-right">В Швейцарии городские власти Цюриха создали единый бренд «ZüriWC», повесили синие указатели и стали публиковать всю информацию на сайте. Сейчас в городе 94 общественных туалета. Все точки оборудованы для людей с инвалидностью, вход бесплатный.</p><img src={`${A}66_photo.png`} alt="Общественная уборная в городе" /></div>
        <div className="story-row last-story"><img src={`${A}88_photo.png`} alt="Иллюстрация о туалетах" /><div className="last-story-copy"><AccentBox className="five-accent"><p>Открытый разговор о базовых<br />потребностях приводит<br />к удобным городам для всех.</p></AccentBox><p className="five-normal-text">В результате по городам можно гулять без страха. Ты знаешь, что через пять минут найдёшь чистый, бесплатный и современный туалет.</p></div></div>
      </div>
    </section>

    <section className="section section-six">
      <h2 className="section-title final-heading">Нам пора говорить об этом<br />без стеснения. Тогда и наши<br />города станут удобнее.</h2>
      <AccentBox className="final-accent"><p>Расскажите, что вас тревожит в городских<br />туалетах и что для вас категорически важно.<br />Как быстро вы находите туалет в городе?</p></AccentBox>
    </section>

    <section className="section-seven">
      <div className="feedback-content">
        <div className="feedback-form-card">
          <form className="feedback-form" onSubmit={submitFeedback}>
            <p className="form-explainer">Ваши отзывы помогут создать платформу<br />«Оазис» для поиска доступных туалетов.</p>
            <textarea className="feedback-input" placeholder="Ваш отзыв..." value={feedback} onChange={e => { setFeedback(e.target.value); setSubmitted(false) }} aria-label="Ваш отзыв" />
            <button className={submitted ? 'submit-button submitted' : 'submit-button'} type="submit">{submitted ? 'Отправлено' : 'Отправить'}</button>
          </form>
        </div>
      </div>
    </section>

    <footer className="longread-footer">
      <span>Автор: Буракова Ольга</span>
      <span>ГД25ДЗ12</span>
      <span>Куратор: Гриднев Сергей</span>
    </footer>
  </main>
}

export default App
