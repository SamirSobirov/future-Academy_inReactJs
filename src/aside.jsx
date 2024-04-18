import children_ageSelection from "./assets/main__ageSelection.svg";

function Asides() {
  return (
    <main>
      <div className="main_text">
        <p className="main_p">
          <b>Все программы обучения</b>
        </p>

        <div className="age_selection">
          <button className="age_btn">
            <img src={children_ageSelection} alt="" />

            <div>
              <p className="age_btn_p">
                <b>Дети </b>
              </p>

              <p>8 — 14 лет</p>
            </div>
          </button>

          <button className="age_btn">
            <img src={children_ageSelection} alt="" />

            <div>
              <p className="age_btn_p">
                <b> Подростки</b>
              </p>

              <p>14 — 18 лет</p>
            </div>
          </button>

          <button className="age_btn">
            <img src={children_ageSelection} alt="" />

            <div>
              <p className="age_btn_p">
                <b>Взрослые </b>
              </p>

              <p>18 — ∞ </p>
            </div>
          </button>
        </div>

        <div className="main_line"></div>


        {/* <div className="block">
            <p className="coursesCat_p">Направление</p>


        <div className="btns">
            <button>Робототехника</button>
            <button>Создание игр</button>
            <button>Web-разработка</button>
            <button>Мультимедиа</button>
            <button>Шахматы</button>
            <button>3D-моделирование и дизайн</button>
            <br />
            <button>Английский язык</button>
            <button>Блогинг</button>
            <button>Soft skills</button>

        </div>
        </div> */}
      </div>


      <div className="level_aside">
        <div className="aside_block">
          <p className="aside_p">Уровень сложности</p>

          <form action="">
            <input type="radio" />
            <label htmlFor="html">Новичок</label>

            <input type="radio" />
            <label htmlFor="html">Новичок</label>

            <input type="radio" />
            <label htmlFor="html">Новичок</label>

            <input type="radio" />
            <label htmlFor="html">Новичок</label>
          </form>
        </div>
        </div>

    </main>
  );
}

export default Asides;
