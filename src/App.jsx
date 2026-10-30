import React, { useState, useEffect, useRef } from 'react'
import { useForm } from '@formspree/react'
import './styles.css'

const ASSETS = `${import.meta.env.BASE_URL}images/`

function AccentBox({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`accent-wrap ${visible ? 'is-visible' : ''} ${className}`}>
      <span className="accent-line accent-line-left" />
      <div className="accent-box">{children}</div>
      <span className="accent-line accent-line-right" />
    </div>
  )
}

function StoryRow({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`story-row ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

const HISTORY_ITEMS = [
  {
    image: '2_photo.png',
    title: 'В античности',
    progress: '90%',
    text: (
      <>
        <span className="desktop-text">
          В Древнем Риме общественные уборные<br />
          были просторными залами с мраморными<br />
          сиденьями, где люди обсуждали новости<br />
          и философствовали. Именно тогда<br />
          родилась знаменитая фраза «Деньги<br />
          не пахнут», связанная с налогом на туалеты.
        </span>
        <span className="mobile-text">
          В Древнем Риме общественные уборные не были<br />
          утилитарным местом. Это были просторные залы<br />
          с мраморными сиденьями, где люди обсуждали<br />
          новости, заключали сделки и философствовали.<br />
          Римляне не стеснялись этой темы. Тогда родилась<br />
          фраза «Деньги не пахнут», из-за налога на туалеты.
        </span>
      </>
    ),
  },
  {
    image: '3_photo.png',
    title: 'В средневековье',
    progress: '25%',
    text: (
      <>
        <span className="desktop-text">
          После падения Рима Европа надолго<br />
          забыла о гигиене. Нечистоты выливались<br />
          прямо на улицы, что приводило к<br />
          эпидемиям. Тема стала табу — о ней<br />
          не говорили, её прятали. Это наложило<br />
          отпечаток на культуру на столетия вперёд.
        </span>
        <span className="mobile-text">
          После падения Рима Европа надолго забыла<br />
          о гигиене. Нечистоты выливались прямо на улицы,<br />
          что приводило к эпидемиям. Тема стала табу —<br />
          о ней не говорили, её прятали. Это наложило<br />
          отпечаток на культуру на столетия вперёд.
        </span>
      </>
    ),
  },
  {
    image: '100_photo.png',
    title: 'Европа XIX в.',
    progress: '45%',
    text: (
      <>
        <span className="desktop-text">
          В Викторианской эпохе появились<br />
          эвфемизмы: вместо прямых слов говорили<br />
          «уборная» и «дамская комната». Мебель<br />
          для сидения делали с закрытыми<br />
          ножками, чтобы не смущать. Привычка<br />
          замалчивать тему перешла в XX век.
        </span>
        <span className="mobile-text">
          В Викторианской эпохе появились эвфемизмы:<br />
          вместо прямых слов говорили «уборная», «дамская<br />
          комната», «место для размышлений». Мебель<br />
          для сидения делали с закрытыми ножками,<br />
          чтобы не смущать чувства. Привычка замалчивать<br />
          тему перешла в XX век.
        </span>
      </>
    ),
  },
  {
    image: '4_photo.png',
    title: 'Россия',
    progress: '50%',
    text: (
      <>
        <span className="desktop-text">
          В России Пётр I одним из первых<br />
          попытался вернуть тему в рамки приличия.<br />
          Он велел строить общественные уборные<br />
          на улицах городов. Это был шаг к тому,<br />
          чтобы сделать пространство города<br />
          удобным для человека.
        </span>
        <span className="mobile-text">
          В России Пётр I одним из первых попытался вернуть<br />
          тему в рамки приличия. Он велел строить<br />
          общественные уборные на улицах городов.<br />
          Это был шаг к тому, чтобы сделать пространство<br />
          города удобным для человека.
        </span>
      </>
    ),
  },
]

function HistoryCard({ item }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={ref} className={`history-card ${visible ? 'is-visible' : ''}`}>
      <img className="history-image" src={`${ASSETS}${item.image}`} alt="" draggable="false" />
      <div className="history-title-row">
        <h3>{item.title}</h3>
        <div className="history-progress">
          <span style={{ '--progress': item.progress }} />
        </div>
      </div>
      <p className="history-text">{item.text}</p>
    </article>
  )
}

function App() {
  const [formState, handleFormspreeSubmit] = useForm('xkjjbapp')

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }

  return (
    <main className="longread">
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-top">
            <h1 className="hero-title">
              КУЛЬТУРА<br />СТЫДА
            </h1>
            <div className="hero-right">
              <nav className="hashtags">
                <span>#табу</span>
                <span>#туалет</span>
                <span>#уборная</span>
                <span>#инфраструктура</span>
              </nav>
              <div className="hero-tagline">
                <p>Как табуированные темы приводят<br />к общему дискомфорту</p>
              </div>
            </div>
          </div>
          <div 
            className="hero-image-wrap"
            onMouseMove={handleMouseMove}
          >
            <picture>
              <source media="(max-width: 480px)" srcSet={`${ASSETS}200_photo.png`} />
              <img src={`${ASSETS}die.png`} alt="" className="hero-image" />
            </picture>
            <div className="hero-overlay" />
          </div>
        </div>
      </section>

      <section className="section section-two">
        <h2 className="section-title">ПОЧЕМУ НАМ НЕЛОВКО?</h2>
        <div className="two-layout">
          <div className="two-text">
            <AccentBox>
              <p>
                <span className="desktop-text">
                  Тема туалетов касается каждого,<br />
                  но считается неприличной.<br />
                  О базовых потребностях<br />
                  не принято говорить вслух,<br />
                  появляется неловкость,<br />
                  будто это что-то грязное<br />
                  и неприемлемое.
                </span>
                <span className="mobile-text">
                  Тема туалетов касается каждого,<br />
                  но считается неприличной.<br />
                  О базовых потребностях не принято<br />
                  говорить вслух, появляется неловкость,<br />
                  будто это что-то грязное и неприемлемое.
                </span>
              </p>
            </AccentBox>
          </div>
          <div className="framed-photo photo-one">
            <div className="orange-frame" />
            <img src={`${ASSETS}1_photo.png`} alt="" draggable="false" />
          </div>
        </div>
      </section>

      <section className="section section-three">
        <div className="history-background">
          <h2 className="section-title history-heading">ОТКУДА ЭТО ВЗЯЛОСЬ?</h2>
          <div className="history-grid">
            {HISTORY_ITEMS.map((item) => (
              <HistoryCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-four">
        <div className="four-layout">
          <div className="framed-photo photo-five">
            <div className="orange-frame" />
            <img src={`${ASSETS}5_photo.png`} alt="" draggable="false" />
          </div>
          <div className="four-text">
            <h2 className="section-title">КАК ЭТО ВЛИЯЕТ?</h2>
            <AccentBox className="four-accent">
              <p>
                <span className="desktop-text">
                  В культуре, где всё, связанное<br />
                  с телом, считается неприличным,<br />
                  туалеты отходят на второй план.<br />
                  Их прячут, экономят на них,<br />
                  делают неудобными.<br />
                  Замалчивание темы влияет<br />
                  на качество городской среды.
                </span>
                <span className="mobile-text">
                  В культуре, где всё, связанное с телом,<br />
                  считается неприличным, туалеты отходят<br />
                  на второй план. Их прячут, экономят<br />
                  на них, делают неудобными. Замалчивание<br />
                  темы влияет на качество городской среды.
                </span>
              </p>
            </AccentBox>
          </div>
        </div>
      </section>

      <section className="section section-five">
        <h2 className="section-title five-heading">ЕСЛИ ГОВОРИТЬ, ТО ЧТО БУДЕТ?</h2>
        <div className="story-rows">
          <StoryRow>
            <p className="story-copy align-right">
              <span className="desktop-text">
                В Азии про туалеты говорят открыто: в рекламе, в школах, в искусстве. Есть музеи на эту тему и детские книги о гигиене. Архитекторы создают уборные как арт-объекты.
              </span>
              <span className="mobile-text">
                В Азии про туалеты говорят открыто:<br />
                в рекламе, в школах, в искусстве.<br />
                Есть музеи, на эту тему, и детские книги<br />
                о гигиене. Архитекторы создают уборные<br />
                как арт-объекты.
              </span>
            </p>
            <img src={`${ASSETS}7_photo.png`} alt="Современная общественная уборная" />
          </StoryRow>
          <StoryRow className="reverse">
            <img src={`${ASSETS}6_photo.png`} alt="" />
            <p className="story-copy">
              <span className="desktop-text">
                В Сингапуре власти ввели штрафы за неубранный туалет и запустили кампании в школах. Чистота стала нормой, а не исключением. Результат: Сингапур считается одним из самых комфортных городов мира по качеству общественных уборных.
              </span>
              <span className="mobile-text">
                В Сингапуре власти ввели штрафы<br />
                за неубранный туалет и запустили<br />
                кампании в школах. Чистота стала<br />
                нормой, а не исключением. Результат:<br />
                Сингапур считается одним из самых<br />
                комфортных городов мира по качеству<br />
                общественных уборных.
              </span>
            </p>
          </StoryRow>
          <StoryRow>
            <p className="story-copy align-right">
              <span className="desktop-text">
                В Швейцарии городские власти Цюриха создали единый бренд «ZüriWC», повесили синие указатели и стали публиковать всю информацию на сайте. Сейчас в городе 94 общественных туалета. Все точки оборудованы для людей с инвалидностью, вход бесплатный.
              </span>
              <span className="mobile-text">
                В Швейцарии городские власти Цюриха<br />
                создали единый бренд «ZüriWC»,<br />
                повесили синие указатели и стали<br />
                публиковать всю информацию на сайте.<br />
                Сейчас в городе 94 общественных<br />
                туалета. Все точки обязательно<br />
                оборудуют для людей с инвалидностью,<br />
                а вход остаётся бесплатным.
              </span>
            </p>
            <img src={`${ASSETS}66_photo.png`} alt="Общественная уборная в городе" />
          </StoryRow>
          <StoryRow className="last-story">
            <img src={`${ASSETS}88_photo.png`} alt="Иллюстрация о туалетах" />
            <div className="last-story-copy">
              <AccentBox className="five-accent">
                <p>
                  Открытый разговор о базовых<br />
                  потребностях приводит<br />
                  к удобным городам для всех.
                </p>
              </AccentBox>
              <p className="five-normal-text">
                <span className="desktop-text">
                  В результате по городам можно гулять без страха. Ты знаешь, что через пять минут найдёшь чистый, бесплатный и современный туалет.
                </span>
                <span className="mobile-text">
                  В результате по городам можно гулять<br />
                  без страха. Ты знаешь, что через пять<br />
                  минут найдёшь чистый, бесплатный<br />
                  и современный туалет.
                </span>
              </p>
            </div>
          </StoryRow>
        </div>
      </section>

      <section className="section section-six">
        <h2 className="section-title final-heading">
          Нам пора говорить об этом<br />
          без стеснения. Тогда и наши<br />
          города станут удобнее.
        </h2>
        <AccentBox className="final-accent">
          <p>
            <span className="desktop-text">
              Расскажите, что вас тревожит в городских<br />
              туалетах и что для вас категорически важно.<br />
              Как быстро вы находите туалет в городе?
            </span>
            <span className="mobile-text">
              Расскажите, что вас тревожит<br />
              в городских туалетах и что для вас<br />
              категорически важно. Как быстро<br />
              вы находите туалет в городе?
            </span>
          </p>
        </AccentBox>
      </section>

      <section className="section-seven">
        <div className="feedback-content">
          <div className="feedback-form-card">
            <form className="feedback-form" onSubmit={handleFormspreeSubmit}>
              <p className="form-explainer">
                Ваши отзывы помогут создать платформу<br />
                «Оазис» для поиска доступных туалетов.
              </p>
              <textarea
                className="feedback-input"
                placeholder="Ваш отзыв..."
                name="message"
                aria-label="Ваш отзыв"
                disabled={formState.submitting}
              />
              <button
                className={`submit-button ${formState.succeeded ? 'submitted' : ''}`}
                type="submit"
                disabled={formState.submitting || formState.succeeded}
              >
                {formState.submitting ? 'Отправка...' : formState.succeeded ? 'Отправлено' : 'Отправить'}
              </button>
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
  )
}

export default App