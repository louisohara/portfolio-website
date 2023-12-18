import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.scss";

function Header({ toggleDarkMode, toggleDarkTheme, dimensions }) {
  return (
    <header className="header">
      <nav className="header__navbar">
        <ul
          id="myMenu"
          className={
            toggleDarkMode ? "header__ul header__ul--alt" : "header__ul "
          }
        >
          {dimensions.width <= 768 && (
            <li
              data-menuanchor="profile"
              className={
                toggleDarkMode
                  ? "header__link header__link--alt "
                  : "header__link"
              }
            >
              <a href="#profile" className="header__link-tag">
                Profile
              </a>
            </li>
          )}
          <li
            data-menuanchor="about"
            className={
              toggleDarkMode ? "header__link header__link--alt" : "header__link"
            }
          >
            <a href="#about" className="header__link-tag">
              About
            </a>
          </li>
          <li
            data-menuanchor="work"
            className={
              toggleDarkMode ? "header__link header__link--alt" : "header__link"
            }
          >
            <a href="#work" className="header__link-tag">
              Work
            </a>
          </li>
          <li
            data-menuanchor="contact"
            className={
              toggleDarkMode ? "header__link header__link--alt" : "header__link"
            }
          >
            <a href="#contact" className="header__link-tag">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <ThemeButton
        toggleDarkMode={toggleDarkMode}
        toggleDarkTheme={toggleDarkTheme}
      />
    </header>
  );
}

export default Header;
