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


        {/* =================================================
            ЛЕВАЯ ЧАСТЬ — ТЕКСТ
        ================================================== */}

        <div className="second-text-column">

          {/* Заголовок — теперь в одну строку */}
          <h2 className="second-title">
            ПОЧЕМУ НАМ НЕЛОВКО?
          </h2>


          {/* ОДНА большая голубая плашка */}
          <div className="second-subtitle-wrapper">

            {/* Левая линия */}
            <div className="second-decor-line second-decor-line-left">
              <div className="second-decor-dot"></div>
            </div>


            {/* Весь текст находится внутри одной плашки */}
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


            {/* Правая линия */}
            <div className="second-decor-line second-decor-line-right">
              <div className="second-decor-dot"></div>
            </div>

          </div>

        </div>


        {/* =================================================
            ПРАВАЯ ЧАСТЬ — ФОТО
        ================================================== */}

        <div className="second-photo-column">

          {/* Оранжевая рамка */}
          <div className="orange-frame"></div>


          {/* Фотография */}
          <div className="second-photo">

            <img
              src="/images/1_photo.png"
              alt=""
            />

          </div>

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