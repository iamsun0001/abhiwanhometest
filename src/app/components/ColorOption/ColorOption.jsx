"use client";
import colorFetch from "./colorFetch";
import "./coloroption.css";
import React, { useState } from "react";

const ColorSelectInput = () => {
  // State to manage the selected color
  const [selectedColor, setSelectedColor] = useState("");

  // List of color options
  const colorOptions = colorFetch();
  return (
    <div>
      <label htmlFor="colorSelect">Color: </label>
      <div className="color-buttons">
        {colorOptions.map((color, index) => (
          <button
            key={color}
            className={`color-button ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => {
              setSelectedColor(color);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelectInput;
