import React from "react";
import "./ProgressBar.css"; // Import CSS file for styling

const ProgressBar = ({ items }) => {
  // Calculate the width of the progress bar based on the number of items
  console.log(items.length);
  const progressWidth = `${(Math.min(items.length, 5) / 5) * 100}%`;
  console.log(progressWidth);
  return (
    <div className="dynamic-progress-bar">
      <div className="progress" style={{ width: progressWidth }}></div>
      <div className="progress-label">{items.length} / 5 items completed </div>
    </div>
  );
};

export default ProgressBar;
