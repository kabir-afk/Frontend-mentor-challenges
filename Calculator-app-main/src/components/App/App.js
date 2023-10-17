import "./App.css";
import Navbar from "../Navbar/Navbar";
import Screen from "../Screen/Screen";
import Keypad from "../Keypad/Keypad";
import { useState } from "react";

function App() {
  const themes = ["", "theme-2", "theme-3"];
  const [themeIndex, setThemeIndex] = useState(0);
  const changeTheme = () => {
    setThemeIndex((themeIndex + 1) % themes.length);
    if (themeIndex == 2) {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    } else if (themeIndex == 0) {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    } else if (themeIndex == 1) {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }
  };
  return (
    <>
      <main>
        <div className="hero-container">
          <Navbar changeTheme={changeTheme} currentTheme={themes[themeIndex]} />
          <Screen currentTheme={themes[themeIndex]}/>
          <Keypad currentTheme={themes[themeIndex]}/>
        </div>
      </main>
    </>
  );
}

export default App;
