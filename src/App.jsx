import React, { useRef, useState } from 'react'
import './styles.css'

const A = '/images/'

function AccentBox({ children, className = '' }) {
  return (
    <div className={`accent-wrap ${className}`}>
      <span className="accent-line accent-line-left">
        <span className="accent-dot" />
      </span>

      <div className="accent-box">
        {children}
      </div>

      <span className="accent-line accent-line-right">
        <span className="accent-dot" />
      </span>
    </div>
  )
}

function DraggableCards() {
  const trackRef = useRef(null)
  const drag = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0
  })

  function startDrag(event) {
    const track = trackRef.current

    if (!track) return

    drag.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft
    }

    track.classList.add('is-dragging')
  }

  function moveDrag(event) {
    if (!drag.current.active) return

    const track = trackRef.current

    if (!track) return

    const distance =
      event.clientX - drag.current.startX

    track.scrollLeft =
      drag.current.scrollLeft - distance
  }

  function stopDrag() {
    drag.current.active = false

    if (trackRef.current) {
      trackRef.current.classList.remove(
        'is-dragging'
      )
    }
  }

  return (
    <div
      ref={trackRef}
      className="history-track"
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onPointerLeave={stopDrag}
    >
      <HistoryCard
        image="2_photo.png"
        title="Античность"
        progress="90%"
      >
        В Древнем Риме общественные уборные
        не были утилитарным местом. Это были
        просторные залы с мраморными сиденьями,
        где люди обсуждали новости, заключали
        сделки и философствовали. Римляне
        не стеснялись этой темы. Именно тогда
        родилась знаменитая фраза «Деньги
        не пахнут», связанная с налогом
        на туалеты.
      </HistoryCard>

      <HistoryCard
        image="3_photo.png"
        title="Средневековье"
        progress="25%"
      >
        После падения Рима Европа надолго
        забыла о гигиене. Нечистоты выливались
        прямо на улицы, что приводило
        к эпидемиям. Тема стала табу —
        о ней не говорили, её прятали.
        Это наложило отпечаток на культуру
        на столетия вперёд.
      </HistoryCard>

      <HistoryCard
        image="4_photo.png"
        title="Россия"
        progress="50%"
      >
        В России Пётр I одним из первых
        попытался вернуть тему в рамки
        приличия. Он велел строить
        общественные уборные на улицах
        городов. Это был шаг к тому,
        чтобы сделать пространство города
        удобным для человека.
      </HistoryCard>
    </div>
  )
}

function HistoryCard({
  image,
  title,
  progress,
  children
}) {
  return (
    <article className="history-card">
      <img
        className="history-image"
        src={`${A}${image}`}
        alt=""
        draggable="false"
      />

      <div className="history-title-row">
        <h3>{title}</h3>

        <div className="history-progress">
          <span
            style={{
              width: progress
            }}
          />
        </div>
      </div>

      <div className="history-text">
        {children}
      </div>
    </article>
  )
}

function App() {
  const [submitted, setSubmitted] =
    useState(false)

  return (
    <div className="longread">

      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section className="hero">
        <div className="hero-panel">

          <div className="hero-top">

            <h1 className="hero-title">
              КУЛЬТУРА
              <br />
              СТЫДА
            </h1>

            <div className="hero-right">

              <nav className="hashtags">
                <span>#табу</span>
                <span>#туалет</span>
                <span>#уборная</span>
                <span>#инфраструктура</span>
              </nav>

              <AccentBox className="hero-accent">
                <p>
                  Как табуированные темы
                  <br />
                  приводят к общему дискомфорту
                </p>
              </AccentBox>

            </div>

          </div>

          <div className="hero-image-wrap">
            <img
              src={`${A}die.png`}
              alt=""
              className="hero-image"
            />

            <div className="hero-overlay" />
          </div>

        </div>
      </section>


      {/* =====================================================
          2. ПОЧЕМУ НАМ НЕЛОВКО?
      ====================================================== */}

      <section className="section section-two">

        <h2 className="section-title">
          ПОЧЕМУ НАМ НЕЛОВКО?
        </h2>

        <div className="two-layout">

          <div className="two-text">
            <AccentBox>
              <p>
                Тема туалетов касается каждого,
                <br />
                но считается неприличной.
                <br />
                О базовых потребностях
                <br />
                не принято говорить вслух,
                <br />
                появляется неловкость,
                <br />
                буд-то это что-то грязное
                <br />
                и неприемлемое.
              </p>
            </AccentBox>
          </div>

          <div className="framed-photo photo-one">
            <div className="orange-frame" />

            <img
              src={`${A}1_photo.png`}
              alt=""
              draggable="false"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          3. ОТКУДА ЭТО ВЗЯЛОСЬ?
      ====================================================== */}

      <section className="section section-three">

        <h2 className="section-title history-heading">
          ОТКУДА ЭТО ВЗЯЛОСЬ?
        </h2>

        <div className="history-background">
          <DraggableCards />
        </div>

      </section>


      {/* =====================================================
          4. КАК ЭТО ВЛИЯЕТ?
      ====================================================== */}

      <section className="section section-four">

        <div className="four-layout">

          <div className="framed-photo photo-five">

            <div className="orange-frame" />

            <img
              src={`${A}5_photo.png`}
              alt=""
              draggable="false"
            />

          </div>

          <div className="four-text">

            <h2 className="section-title">
              КАК ЭТО ВЛИЯЕТ?
            </h2>

            <AccentBox className="four-accent">
              <p>
                В культуре, где всё, связанное
                <br />
                с телом, считается неприличным,
                <br />
                туалеты отходят на второй план.
                <br />
                Их прячут, экономят на них,
                <br />
                делают неудобными.
                <br />
                Замалчивание темы влияет
                <br />
                на качество городской среды.
              </p>
            </AccentBox>

          </div>

        </div>
      </section>


      {/* =====================================================
          5. ЕСЛИ ГОВОРИТЬ
      ====================================================== */}

      <section className="section section-five">

        <h2 className="section-title five-heading">
          ЕСЛИ ГОВОРИТЬ, ТО ЧТО БУДЕТ?
        </h2>

        <div className="five-layout">

          {/* LEFT COLUMN */}

          <div className="five-left">

            <img
              className="photo-six"
              src={`${A}6_photo.png`}
              alt=""
              draggable="false"
            />

            <AccentBox className="five-accent">
              <p>
                Открытый разговор о базовых
                <br />
                потребностях приводит к удобным
                <br />
                городам для всех.
              </p>
            </AccentBox>

            <p className="five-normal-text">
              В результате по городам можно
              гулять без страха. Ты знаешь,
              что через пять минут найдёшь
              чистый, бесплатный и современный
              туалет.
            </p>

          </div>


          {/* RIGHT COLUMN */}

          <div className="five-right">

            <p className="five-intro">
              В Азии про туалеты говорят открыто:
              <br />
              в рекламе, в школах, в искусстве.
              <br />
              Есть музеи, на эту тему, и детские
              <br />
              книги о гигиене. Архитекторы
              <br />
              создают уборные как арт-объекты.
            </p>

            <img
              className="photo-seven"
              src={`${A}7_photo.png`}
              alt=""
              draggable="false"
            />

            <img
              className="photo-eight"
              src={`${A}8_photo.png`}
              alt=""
              draggable="false"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          6. ФИНАЛЬНАЯ МЫСЛЬ
      ====================================================== */}

      <section className="section section-six">

        <h2 className="section-title final-heading">
          Нам пора перестать стесняться
          <br />
          и начать говорить об этом
          <br />
          вслух. Тогда и наши города
          <br />
          станут удобнее.
        </h2>

        <AccentBox className="final-accent">
          <p>
            Отношение к туалетам показывает,
            <br />
            насколько общество готово видеть
            <br />
            в человеке человека.
          </p>
        </AccentBox>

      </section>


      {/* =====================================================
          7. ФОРМА + FOOTER
      ====================================================== */}

      <section className="section-seven">

        <div className="feedback-content">

          <div className="feedback-form-card">

            <div className="feedback-form">

              <textarea
                className="feedback-input"
                placeholder="Ваш отзыв..."
              />

              <button
                className={
                  submitted
                    ? 'submit-button submitted'
                    : 'submit-button'
                }
                onClick={() =>
                  setSubmitted(true)
                }
                type="button"
              >
                {submitted
                  ? 'Отправлено'
                  : 'Отправить'}
              </button>

              <p className="anonymous">
                *Опрос анонимный
              </p>

            </div>

          </div>


          <div className="feedback-copy">

            <h2>
              Давайте поговорим
              <br />
              о туалетах?
            </h2>

            <p>
              Расскажите, что вас тревожит
              <br />
              в городских туалетах и что для вас
              <br />
              категорически важно. Как быстро
              <br />
              вы находите туалет в городе?
              <br />
              Ваши отзывы помогут создать
              <br />
              платформу «Оазис» для поиска
              <br />
              доступных туалетов.
            </p>

          </div>

        </div>

        <footer className="footer">

          <span>
            Автор: Буракова Ольга
          </span>

          <span>
            ГД25ДЗ12
          </span>

          <span>
            Куратор: Гриднев Сергей
          </span>

        </footer>

      </section>

    </div>
  )
}

export default App