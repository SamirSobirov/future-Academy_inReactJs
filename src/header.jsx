import header_Logo from "./assets/header_logo.svg";
import header_logo_mini_burger_menu from "./assets/header_mini_burger_menu.svg";
import header_logo_location from "./assets/header_logo_location.svg";
import header_arrow from "./assets/header_arrow.svg";
import header_login_acc from "./assets/header_login_toAcc.svg"

function Header() {
  return (
    <div className="header">
      <header>

        <a href="#" className="header_logo">
        <img className="header_img" src={header_Logo} alt="" />
        </a>



        <a className="header_a1">
          <img
            className="header_logo_mini_burger_menu"
            src={header_logo_mini_burger_menu}
            alt=""
          />
          Все курсы
        </a>

        <a className="header_a2" href="#">
          Мероприятия
        </a>
        <a className="header_a2" href="#">
          Базы знаний
        </a>
        <a className="header_a2" href="#">
          Карьера
        </a>

        <a href="#" className="header_a3">
          <img
            className="header_logo_location"
            src={header_logo_location}
            alt=""
          />
          Нижний Новгород
          <img className="arrow" src={header_arrow} alt="" />
        </a>

        <a className="header_a2" href="#">
          8 800 950-33-98
        </a>

        <button className="header_btn1">
          <img
            className="header_logo_mini_burger_menu"
            src={header_login_acc}
            alt=""
          />
          Войти
        </button>

      </header>
    </div>
  );
}

export default Header;
