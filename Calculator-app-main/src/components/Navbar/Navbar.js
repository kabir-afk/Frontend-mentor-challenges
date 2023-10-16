import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <h1>calc</h1>
        <div className="theme">
          <span>THEME</span>
          <div className="themeSwitcher">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <div className="themeSwitcherButton">
                <div className="themeSwitcherBtn_circle"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
