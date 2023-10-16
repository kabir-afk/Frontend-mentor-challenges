import './Keypad.css';
import '../Screen/Screen';
// import Screen from '../Screen/Screen';
// import {useState} from 'react';


let string;
function keypress(e) {
    string = string + e.target.innerHTML;
    

}

function Keypad() {
    return(
        <>
        <div className="keypad">
            <button className="key" onClick={keypress}>7</button>
            <button className="key" onClick={keypress}>8</button>
            <button className="key" onClick={keypress}>9</button>
            <button className="key blue-bg" onClick={keypress}>DEL</button>
            <button className="key" onClick={keypress}>4</button>
            <button className="key" onClick={keypress}>5</button>
            <button className="key" onClick={keypress}>6</button>
            <button className="key" onClick={keypress}>+</button>
            <button className="key" onClick={keypress}>1</button>
            <button className="key" onClick={keypress}>2</button>
            <button className="key" onClick={keypress}>3</button>
            <button className="key" onClick={keypress}>-</button>
            <button className="key" onClick={keypress}>.</button>
            <button className="key" onClick={keypress}>0</button>
            <button className="key" onClick={keypress}>/</button>
            <button className="key" onClick={keypress}>x</button>
            <button className="key reset blue-bg" onClick={keypress}>RESET</button>
            <button className="key equal" onClick={keypress}>=</button>
        </div>
        </>
    )
}
export default Keypad;