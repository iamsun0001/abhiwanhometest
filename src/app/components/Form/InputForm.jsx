'use client'
import React, { useState } from "react";
import colorFetch from "../ColorOption/colorFetch";
import { useFormState } from "react-dom";
import { addItem } from "@/lib/action";
import styles from './InputForm.module.css'
const InputForm = () => {
  const colorOptions = colorFetch();

  const [state, formAction] = useFormState(addItem, undefined);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formAction({
      title,
      subtitle,
      selectedColor,
    });
    console.log(title, subtitle, selectedColor);
  };

  return (
    <form className={styles.colorinputcontainer} onSubmit={handleSubmit}>
      <div className={styles.titlediv}>
        <h3 className="title">Title</h3>
        <input
          id="title"
          type="text"
          value={title}
          required
          onChange={handleTitleChange}
        />
      </div>
      <div className={styles.subtitlediv}>
        <h3 className={styles.subtitle}>Subtitle</h3>
        <input
          id="subtitle"
          type="text"
          value={subtitle}
          required
          onChange={handleSubtitleChange}
        />
      </div>
      <div>
        <label htmlFor="colorSelect">Choose a color:</label>
        <div className={styles.colorbuttons}>
          {colorOptions.map((color, index) => (
            <button
              type="button"
              key={color}
              required
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
        color selected{selectedColor}
      </div>
      <button type="submit" className={styles.submitButton}>Save</button>
    </form>
  );
};

export default InputForm;
