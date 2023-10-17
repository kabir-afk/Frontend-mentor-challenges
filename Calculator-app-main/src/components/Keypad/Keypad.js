import React from 'react';
import './Keypad.css';

function Keypad(props) {

  function keypress(e) {
    console.log(e.target.innerHTML);
  }
  return (
    <>
      <div className={`${props.currentTheme}`}>
        <div className="keypad keypad-bg">
          <button className="key" onClick={keypress}>
            7
          </button>
          <button className="key" onClick={keypress}>
            8
          </button>
          <button className="key" onClick={keypress}>
            9
          </button>
          <button className="key blue-bg" onClick={keypress}>
            DEL
          </button>
          <button className="key" onClick={keypress}>
            4
          </button>
          <button className="key" onClick={keypress}>
            5
          </button>
          <button className="key" onClick={keypress}>
            6
          </button>
          <button className="key" onClick={keypress}>
            +
          </button>
          <button className="key" onClick={keypress}>
            1
          </button>
          <button className="key" onClick={keypress}>
            2
          </button>
          <button className="key" onClick={keypress}>
            3
          </button>
          <button className="key" onClick={keypress}>
            -
          </button>
          <button className="key" onClick={keypress}>
            .
          </button>
          <button className="key" onClick={keypress}>
            0
          </button>
          <button className="key" onClick={keypress}>
            /
          </button>
          <button className="key" onClick={keypress}>
            x
          </button>
          <button className="key reset blue-bg" onClick={keypress}>
            RESET
          </button>
          <button className="key equal" onClick={keypress}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
export default Keypad;
