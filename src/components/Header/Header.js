import ThemeButton from "../ThemeButton/ThemeButton";

function Header(toggleDarkMode, toggleDarkTheme) {
  return (
    <header>
      <ThemeButton
        toggleDarkTheme={toggleDarkTheme}
        toggleDarkMode={toggleDarkMode}
      />
      <ul id="myMenu">
        <li data-menuanchor="about" className="active">
          <a href="#about">ABOUT</a>
        </li>
        <li data-menuanchor="work">
          <a href="#work">WORK</a>
        </li>
        <li data-menuanchor="contact">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
