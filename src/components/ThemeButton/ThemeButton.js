import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function ThemeButton({ toggleDarkTheme, toggleDarkMode }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center"
      onClick={toggleDarkTheme}
    >
      {!toggleDarkMode ? (
        <MoonIcon color="black" width={25} />
      ) : (
        <SunIcon color="white" width={25} />
      )}
    </button>
  );
}

export default ThemeButton;
