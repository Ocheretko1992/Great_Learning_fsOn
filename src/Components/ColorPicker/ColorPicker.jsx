import { useState } from "react";
import s from "./ColorPicker.module.css";
import listImport from "./Colorpicker.json";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");

  const handleColorClick = (value) => {
    setCurrentColor(value);
  };

  return (
    <div style={{ backgroundColor: currentColor }} className={s.wraper}>
      <h1>Carrent color : {currentColor}</h1>
      <div className={s.wraperColorPicker}>
        {listImport.map(({ name, id }) => (
          <button
            onClick={() => handleColorClick(name)}
            className={s.button}
            key={id}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
