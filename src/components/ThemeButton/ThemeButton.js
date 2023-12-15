import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import "./ThemeButton.scss";

function ThemeButton({ toggleDarkTheme, toggleDarkMode }) {
  return (
    <div className="theme">
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkTheme} color="inherit">
        {toggleDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
}

export default ThemeButton;
