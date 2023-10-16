import "./App.css";
import Navbar from "../Navbar/Navbar";
import Screen from "../Screen/Screen";
import Keypad from "../Keypad/Keypad";

function App() {
  return (
    <>
      <main>
        <div className="hero-container">
          <Navbar />
          <Screen />
          <Keypad/>
        </div>
      </main>
    </>
  );
}

export default App;
