import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.scss";

function Header({ toggleDarkMode, toggleDarkTheme, dimensions }) {
  return (
    <header className="header">
      <ul id="myMenu" className="header__navbar">
        {dimensions.width <= 768 && (
          <li data-menuanchor="profile" className="header__link active">
            <a href="#profile" className="header__link-tag">
              PROFILE
            </a>
          </li>
        )}
        <li data-menuanchor="about" className="header__link active">
          <a href="#about" className="header__link-tag">
            ABOUT
          </a>
        </li>
        <li data-menuanchor="work" className="header__link">
          <a href="#work" className="header__link-tag">
            WORK
          </a>
        </li>
        <li data-menuanchor="contact" className="header__link">
          <a href="#contact" className="header__link-tag">
            CONTACT
          </a>
        </li>
      </ul>
      <ThemeButton
        toggleDarkMode={toggleDarkMode}
        toggleDarkTheme={toggleDarkTheme}
      />
    </header>
  );
}

export default Header;
