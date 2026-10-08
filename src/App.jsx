import React, { useState } from "react";
import "./styles.css";

function AccentLines({ children, className = "" }) {
  return (
    <div className={`accent-box ${className}`}>
      <span className="accent-line accent-line-left">
        <span className="accent-dot"></span>
      </span>

      <div className="accent-content">
        {children}
      </div>

      <span className="accent-line accent-line-right">
        <span className="accent-dot"></span>
      </span>
    </div>
  );
}

function OrangePhoto({ src, alt = "", className = "" }) {
  return (
    <div className={`orange-photo ${className}`}>
      <div className="orange-frame"></div>
      <img src={src} alt={alt} />
    </div>
  );
}

function HistoryCard({
  image,
  title,
  children,
  blueLength = "long",
}) {
  return (
    <article className="history-card">
      <img className="history-image" src={image} alt="" />

      <div className="history-title-row">
        <h3>{title}</h3>

        <div className={`history-progress ${blueLength}`}>
          <span></span>
        </div>
      </div>

      <div className="history-text">
        {children}
      </div>
    </article>
  );
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="longread">

      {/* =========================================================
          1. HERO
      ========================================================= */}
      <section className="hero-section">
        <div className="hero-background"></div>

        <div className="hero-panel">

          <div className="hero-title">
            КУЛЬТУРА
            <br />
            СТЫДА
          </div>

          <div className="hero-right">

            <nav className="hashtags">
              <span>#табу</span>
              <span>#туалет</span>
              <span>#уборная</span>
              <span>#инфраструктура</span>
            </nav>

            <AccentLines className="hero-accent">
              <p>
                Как табуированные темы
                <br />
                приводят к общему дискомфорту
              </p>
            </AccentLines>

          </div>

          <div className="hero-photo">
            <img src="/images/die.png" alt="" />

            <div className="hero-photo-overlay"></div>
          </div>

        </div>
      </section>


      {/* =========================================================
          2. ПОЧЕМУ НАМ НЕЛОВКО?
      ========================================================= */}
      <section className="section section-two">

        <div className="section-two-inner">

          <div className="section-two-text">

            <h2>ПОЧЕМУ НАМ НЕЛОВКО?</h2>

            <AccentLines className="section-two-accent">
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
            </AccentLines>

          </div>

          <OrangePhoto
            src="/images/1_photo.png"
            className="section-two-photo"
          />

        </div>

      </section>


      {/* =========================================================
          3. ОТКУДА ЭТО ВЗЯЛОСЬ?
      ========================================================= */}
      <section className="section section-three">

        <h2 className="section-title-centered">
          ОТКУДА ЭТО ВЗЯЛОСЬ?
        </h2>

        <div className="history-area">

          <div className="history-scroll">

            <HistoryCard
              image="/images/2_photo.png"
              title="Античность"
              blueLength="long"
            >
              В Древнем Риме общественные уборные не были утилитарным
              местом. Это были просторные залы с мраморными сиденьями,
              где люди обсуждали новости, заключали сделки и
              философствовали. Римляне не стеснялись этой темы.
              Именно тогда родилась знаменитая фраза «Деньги не пахнут»,
              связанная с налогом на туалеты.
            </HistoryCard>

            <HistoryCard
              image="/images/3_photo.png"
              title="Средневековье"
              blueLength="short"
            >
              После падения Рима Европа надолго забыла о гигиене.
              Нечистоты выливались прямо на улицы, что приводило
              к эпидемиям. Тема стала табу — о ней не говорили,
              её прятали. Это наложило отпечаток на культуру
              на столетия вперёд.
            </HistoryCard>

            <HistoryCard
              image="/images/4_photo.png"
              title="Россия"
              blueLength="half"
            >
              В России Пётр I одним из первых попытался вернуть тему
              в рамки приличия. Он велел строить общественные уборные
              на улицах городов. Это был шаг к тому, чтобы сделать
              пространство города удобным для человека.
            </HistoryCard>

          </div>

        </div>

      </section>


      {/* =========================================================
          4. КАК ЭТО ВЛИЯЕТ?
      ========================================================= */}
      <section className="section section-four">

        <div className="section-four-inner">

          <OrangePhoto
            src="/images/5_photo.png"
            className="section-four-photo"
          />

          <div className="section-four-text">

            <h2>КАК ЭТО ВЛИЯЕТ?</h2>

            <AccentLines className="section-four-accent">
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
            </AccentLines>

          </div>

        </div>

      </section>


      {/* =========================================================
          5. ЕСЛИ ГОВОРИТЬ...
      ========================================================= */}
      <section className="section section-five">

        <h2 className="section-title-centered">
          ЕСЛИ ГОВОРИТЬ, ТО ЧТО БУДЕТ?
        </h2>

        <div className="section-five-grid">

          {/* Левая колонка */}
          <div className="five-left">

            <img
              className="photo-6"
              src="/images/6_photo.png"
              alt=""
            />

            <AccentLines className="five-accent">
              <p>
                Открытый разговор о базовых
                <br />
                потребностях приводит к удобным
                <br />
                городам для всех.
              </p>
            </AccentLines>

            <p className="five-bottom-text">
              В результате по городам можно
              <br />
              гулять без страха. Ты знаешь, что
              <br />
              через пять минут найдёшь чистый,
              <br />
              бесплатный и современный туалет.
            </p>

          </div>


          {/* Правая колонка */}
          <div className="five-right">

            <p className="five-main-text">
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
              className="photo-7"
              src="/images/7_photo.png"
              alt=""
            />

            <img
              className="photo-8"
              src="/images/8_photo.png"
              alt=""
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          6. ФИНАЛЬНАЯ МЫСЛЬ
      ========================================================= */}
      <section className="section section-six">

        <h2 className="section-six-title">
          Нам пора перестать стесняться
          <br />
          и начать говорить об этом
          <br />
          вслух. Тогда и наши города
          <br />
          станут удобнее.
        </h2>

        <AccentLines className="section-six-accent">
          <p>
            Отношение к туалетам показывает,
            <br />
            насколько общество готово видеть
            <br />
            в человеке человека.
          </p>
        </AccentLines>

      </section>


      {/* =========================================================
          7. ФОРМА
      ========================================================= */}
      <section className="section-seven">

        <div className="feedback-content">

          <form
            className="feedback-form"
            onSubmit={handleSubmit}
          >

            <div className="feedback-input-wrap">

              <textarea
                placeholder="Ваш отзыв..."
                aria-label="Ваш отзыв"
              />

            </div>

            <button
              type="submit"
              className={`submit-button ${
                submitted ? "submitted" : ""
              }`}
            >
              {submitted ? "Отправлено" : "Отправить"}
            </button>

            <div className="anonymous">
              *Опрос анонимный
            </div>

          </form>


          <div className="feedback-text">

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


        {/* FOOTER */}
        <footer className="footer">

          <div>Автор: Буракова Ольга</div>

          <div>ГД25ДЗ12</div>

          <div>Куратор: Гриднев Сергей</div>

        </footer>

      </section>

    </main>
  );
}