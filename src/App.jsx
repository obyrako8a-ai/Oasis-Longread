import React, { useState } from "react";

function App() {
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (review.trim() === "") {
      return;
    }

    setSubmitted(true);
    setReview("");
  };

  return (
    <main className="longread">

      {/* =====================================================
          БЛОК 1
      ====================================================== */}

      <section className="hero">

        <div className="hero-background"></div>

        <div className="hero-panel">

          <h1 className="main-title">
            КУЛЬТУРА
            <br />
            СТЫДА
          </h1>

          <div className="hashtags">
            <span>#табу</span>
            <span>#туалет</span>
            <span>#уборная</span>
            <span>#инфраструктура</span>
          </div>

          <div className="subtitle-wrapper">

            <div className="decor-line decor-line-left">
              <div className="decor-dot"></div>
            </div>

            <div className="subtitle-box">
              <span>
                Как табуированные темы
                <br />
                приводят к общему дискомфорту
              </span>
            </div>

            <div className="decor-line decor-line-right">
              <div className="decor-dot"></div>
            </div>

          </div>

          <div className="photo-wrapper">

            <img
              src="/images/die.png"
              alt=""
              className="hero-photo"
            />

            <div className="photo-overlay"></div>

          </div>

        </div>

      </section>


      {/* =====================================================
          БЛОК 2
      ====================================================== */}

      <section className="second-section">

        <div className="second-text-column">

          <h2 className="second-title">
            ПОЧЕМУ НАМ НЕЛОВКО?
          </h2>

          <div className="second-subtitle-wrapper">

            <div className="second-decor-line second-decor-line-left">
              <div className="second-decor-dot"></div>
            </div>

            <div className="second-subtitle-box">

              <span>
                Тема туалетов касается каждого,
                <br />
                но считается неприличной.
                <br />
                О базовых потребностях
                <br />
                не принято говорить вслух, появляется неловкость,
                <br />
                будто это что-то грязное
                <br />
                и неприемлемое.
              </span>

            </div>

            <div className="second-decor-line second-decor-line-right">
              <div className="second-decor-dot"></div>
            </div>

          </div>

        </div>


        <div className="second-photo-column">

          <div className="orange-frame"></div>

          <div className="second-photo">

            <img
              src="/images/1_photo.png"
              alt=""
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          БЛОК 3
      ====================================================== */}

      <section className="third-section">

        <h2 className="third-title">
          ОТКУДА ЭТО ВЗЯЛОСЬ?
        </h2>

        <div className="history-slider">


          {/* АНТИЧНОСТЬ */}

          <article className="history-card">

            <img
              src="/images/2_photo.png"
              alt=""
              className="history-image"
            />

            <div className="history-card-heading">

              <h3>
                Античность
              </h3>

              <div className="history-lines">

                <div className="history-line-background"></div>

                <div className="history-line-progress history-progress-one"></div>

              </div>

            </div>

            <div className="history-text">

              <p>
                В Древнем Риме общественные уборные не были
                утилитарным местом. Это были просторные залы
                с мраморными сиденьями, где люди обсуждали
                новости, заключали сделки и философствовали.
                Римляне не стеснялись этой темы. Именно тогда
                родилась знаменитая фраза «Деньги не пахнут»,
                связанная с налогом на туалеты.
              </p>

            </div>

          </article>


          {/* СРЕДНЕВЕКОВЬЕ */}

          <article className="history-card">

            <img
              src="/images/3_photo.png"
              alt=""
              className="history-image"
            />

            <div className="history-card-heading">

              <h3>
                Средневековье
              </h3>

              <div className="history-lines">

                <div className="history-line-background"></div>

                <div className="history-line-progress history-progress-two"></div>

              </div>

            </div>

            <div className="history-text">

              <p>
                После падения Рима Европа надолго забыла
                о гигиене. Нечистоты выливались прямо
                на улицы, что приводило к эпидемиям.
                Тема стала табу — о ней не говорили,
                её прятали. Это наложило отпечаток
                на культуру на столетия вперёд.
              </p>

            </div>

          </article>


          {/* РОССИЯ */}

          <article className="history-card">

            <img
              src="/images/4_photo.png"
              alt=""
              className="history-image"
            />

            <div className="history-card-heading">

              <h3>
                Россия
              </h3>

              <div className="history-lines">

                <div className="history-line-background"></div>

                <div className="history-line-progress history-progress-three"></div>

              </div>

            </div>

            <div className="history-text">

              <p>
                В России Пётр I одним из первых попытался
                вернуть тему в рамки приличия. Он велел
                строить общественные уборные на улицах
                городов. Это был шаг к тому, чтобы сделать
                пространство города удобным для человека.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          БЛОК 4
      ====================================================== */}

      <section className="fourth-section">

        <div className="fourth-photo-column">

          <div className="fourth-orange-frame"></div>

          <div className="fourth-photo">

            <img
              src="/images/5_photo.png"
              alt=""
            />

          </div>

        </div>


        <div className="fourth-text-column">

          <h2 className="fourth-title">
            КАК ЭТО ВЛИЯЕТ?
          </h2>

          <div className="fourth-subtitle-wrapper">

            <div className="fourth-decor-line fourth-decor-line-left">
              <div className="fourth-decor-dot"></div>
            </div>

            <div className="fourth-subtitle-box">

              <span>
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
              </span>

            </div>

            <div className="fourth-decor-line fourth-decor-line-right">
              <div className="fourth-decor-dot"></div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          БЛОК 5
      ====================================================== */}

      <section className="fifth-section">

        <h2 className="fifth-title">
          ЕСЛИ ГОВОРИТЬ, ТО ЧТО БУДЕТ?
        </h2>


        <div className="fifth-content">


          {/* ФОТО 6 */}

          <div className="fifth-photo-six">

            <img
              src="/images/6_photo.png"
              alt=""
            />

          </div>


          {/* ТЕКСТ + ФОТО 7 */}

          <div className="fifth-right-top">

            <p className="fifth-main-text">
              В Азии про туалеты говорят открыто:
              в рекламе, в школах, в искусстве. Есть
              музеи, на эту тему, и детские книги
              о гигиене. Архитекторы создают уборные
              как арт-объекты.
            </p>


            <img
              src="/images/7_photo.png"
              alt=""
              className="fifth-photo-seven"
            />

          </div>


          {/* ГОЛУБАЯ ПЛАШКА + ОБЫЧНЫЙ ТЕКСТ */}

          <div className="fifth-left-bottom">

            <div className="fifth-blue-wrapper">

              <div className="fifth-blue-line fifth-blue-line-left">
                <div className="fifth-blue-dot"></div>
              </div>

              <div className="fifth-blue-box">

                <p>
                  Открытый разговор о базовых
                  потребностях приводит к удобным
                  городам для всех.
                </p>

              </div>

              <div className="fifth-blue-line fifth-blue-line-right">
                <div className="fifth-blue-dot"></div>
              </div>

            </div>


            <p className="fifth-bottom-text">
              В результате по городам можно гулять
              без страха. Ты знаешь, что через пять
              минут найдёшь чистый, бесплатный
              и современный туалет.
            </p>

          </div>


          {/* ФОТО 8 */}

          <div className="fifth-photo-eight">

            <img
              src="/images/8_photo.png"
              alt=""
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          БЛОК 6
      ====================================================== */}

      <section className="sixth-section">

        <h2 className="sixth-title">
          Нам пора перестать стесняться
          <br />
          и начать говорить об этом
          <br />
          вслух. Тогда и наши города
          <br />
          станут удобнее.
        </h2>


        <div className="sixth-subtitle-wrapper">

          <div className="sixth-decor-line sixth-decor-line-left">
            <div className="sixth-decor-dot"></div>
          </div>


          <div className="sixth-subtitle-box">

            <p>
              Отношение к туалетам показывает,
              <br />
              насколько общество готово видеть
              <br />
              в человеке человека.
            </p>

          </div>


          <div className="sixth-decor-line sixth-decor-line-right">
            <div className="sixth-decor-dot"></div>
          </div>

        </div>

      </section>


      {/* =====================================================
          БЛОК 7 — ФОРМА ОТЗЫВА
      ====================================================== */}

      <section className="seventh-section">


        <div className="feedback-content">


          {/* ФОРМА */}

          <div className="feedback-form-card">

            <form onSubmit={handleSubmit}>

              <div className="feedback-input-area">

                <textarea
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="Ваш отзыв..."
                  aria-label="Ваш отзыв"
                />

              </div>


              <button
                type="submit"
                className="feedback-button"
              >
                Отправить
              </button>


              <p className="anonymous-text">
                *Опрос анонимный
              </p>

              {submitted && (
                <p className="success-message">
                  Спасибо за ваш отзыв!
                </p>
              )}

            </form>

          </div>


          {/* ТЕКСТ */}

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


        {/* ПОДВАЛ */}

        <footer className="footer">

          <div className="footer-author">
            Автор: Буракова Ольга
          </div>

          <div className="footer-code">
            ГД25ДЗ12
          </div>

          <div className="footer-curator">
            Куратор: Гриднев Сергей
          </div>

        </footer>


      </section>

    </main>
  );
}

export default App;