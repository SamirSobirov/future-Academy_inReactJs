import header_Logo from "./assets/header_logo.svg";
import header_logo_mini_burger_menu from "./assets/header_mini_burger_menu.svg";

function Header() {
  return (
    <div className="header">
      <header>

        <div className="header_all">
        <img className="header_logo" src={header_Logo} alt="" />

        
        
          <img
            className="header_logo_mini_burger_menu"
            src={header_logo_mini_burger_menu}
            alt=""
          />
          <p className="header_p1">Все курсы</p>

          </div>
      </header>
    </div>
  );
}

export default Header;
