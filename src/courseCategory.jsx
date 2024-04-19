import card_phone from "./assets/card_phone.svg";

function CourseCategory() {
  return (
    <div className="container">
      <div className="level_aside">
        <p className="aside_p">Уровень сложности</p>

        <form>
          <div>
            <input type="radio" />
            <label htmlFor="html">Новичок</label>
          </div>

          <div>
            <input type="radio" />
            <label htmlFor="html">Пользователь</label>
          </div>

          <div>
            <input type="radio" />
            <label htmlFor="html">Профессионал</label>
          </div>

          <div>
            <input type="radio" />
            <label htmlFor="html">Читер</label>
          </div>
        </form>

        <hr />

        <br />
        <p className="aside_p">Тип обучения</p>
        <form>
          <div>
            <input type="radio" />
            <label htmlFor="html">Любой</label>
          </div>

          <div>
            <input type="radio" />
            <label htmlFor="html">Профессия</label>
          </div>

          <div>
            <input type="radio" />
            <label htmlFor="html">Курс</label>
          </div>
        </form>
      </div>

      <div className="direction">
        <p className="direction_p">Направление</p>

        <div className="btns_direction">
          <button>Робототехника</button>
          <button>Создание игр</button>
          <button>Web-разработка</button>
          <button>Мультимедиа</button>
          <button>Шахматы</button>
          <button>3D-моделирование и дизайн</button>
          <button>Английский язык</button>
          <button>Блогинг</button>
          <button>Soft skills</button>
        </div>


<div className="box">
        <div className="all_card">
          <div className="card">
            <p>Программа</p>

            <div className="img_text">
              <img src={card_phone} alt="" />
              <p className="img_p">«Разработка мобильных приложений»</p>
            </div>

            <div className="footer_p">
                <p>Разработчик мобильных приложений создаёт <br /> приложения, которыми люди ежедневно пользуются <br />
                на смартфонах, умных часах и планшетах. 
                </p>
            </div>

            <div className="end_p">
                <p>24 месяца</p>

                
            </div>

          </div>

          </div>






          <div className="all_cardd">
          <div className="card">
            <p>Программа</p>

            <div className="img_text">
              <img src={card_phone} alt="" />
              <p className="img_p">«Разработка мобильных приложений»</p>
            </div>

            <div className="footer_p">
                <p>Разработчик мобильных приложений создаёт <br /> приложения, которыми люди ежедневно пользуются <br />
                на смартфонах, умных часах и планшетах. 
                </p>
            </div>

            <div className="end_p">
                <p>24 месяца</p>


                <button><b>-10%</b></button>
            </div>

          </div>











          </div>




        </div>



        
      </div>
    </div>
  );
}

export default CourseCategory;
