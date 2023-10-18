import "./Screen.css";
import { useState } from "react";

function Screen(props) {
  const [initialValue, setValue] = useState("");
  const addCommas = (event) => {
    const inputValue = event.target.value.replace(/,/g, "");
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue(formattedValue);
  };
  return (
    <div className={`${props.currentTheme}`}>
      <input
        type="text"
        name="screen"
        id="screen"
        value={props.inputValue}
        onChange={addCommas}
      />
    </div>
  );
}

export default Screen;
