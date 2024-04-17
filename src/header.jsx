import header_Logo from "./assets/header_logo.svg";
import header_logo_mini_burger_menu from "./assets/header_mini_burger_menu.svg";
import header_logo_location from "./assets/header_logo_location.svg";

function Header() {
  return (
    <div className="header">
      <header>

        
        <img className="header_logo" src={header_Logo} alt="" />

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




      </header>
    </div>
  );
}

export default Header;
