import React from "react";

function App() {
  return (
    <main className="longread">

      {/* =====================================================
          ПЕРВЫЙ БЛОК
      ====================================================== */}

      <section className="hero">

        <div className="hero-background"></div>

        <div className="hero-panel">

          {/* Заголовок */}
          <h1 className="main-title">
            КУЛЬТУРА
            <br />
            СТЫДА
          </h1>


          {/* Хэштеги */}
          <div className="hashtags">
            <span>#табу</span>
            <span>#туалет</span>
            <span>#уборная</span>
            <span>#инфраструктура</span>
          </div>


          {/* Голубая плашка */}
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


          {/* Фотография */}
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
          ВТОРОЙ БЛОК
      ====================================================== */}

      <section className="second-section">


        {/* -------------------------------------------------
            ЛЕВАЯ ЧАСТЬ — ТЕКСТ
        -------------------------------------------------- */}

        <div className="second-text-column">

          <h2 className="second-title">
            ПОЧЕМУ НАМ НЕЛОВКО?
          </h2>


          {/* Голубая плашка со всем текстом */}

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


        {/* -------------------------------------------------
            ПРАВАЯ ЧАСТЬ — ФОТО
        -------------------------------------------------- */}

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
          ТРЕТИЙ БЛОК
      ====================================================== */}

      <section className="third-section">

        {/* Заголовок */}

        <h2 className="third-title">
          ОТКУДА ЭТО ВЗЯЛОСЬ?
        </h2>


        {/* Синий контейнер */}

        <div className="history-slider">


          {/* =================================================
              КАРТОЧКА 1 — АНТИЧНОСТЬ
          ================================================== */}

          <article className="history-card">

            <img
              src="/images/2_photo.png"
              alt=""
              className="history-image"
            />


            {/* Заголовок + полоски */}

            <div className="history-card-heading">

              <h3>
                Античность
              </h3>

              <div className="history-lines">

                <div className="history-line-background"></div>

                <div className="history-line-progress history-progress-one"></div>

              </div>

            </div>


            {/* Прокручиваемый текст */}

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


          {/* =================================================
              КАРТОЧКА 2 — СРЕДНЕВЕКОВЬЕ
          ================================================== */}

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


          {/* =================================================
              КАРТОЧКА 3 — РОССИЯ
          ================================================== */}

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
          ЗАГОТОВКА ПОД СЛЕДУЮЩИЕ БЛОКИ
      ====================================================== */}

      <section className="content-placeholder">
      </section>

    </main>
  );
}

export default App;