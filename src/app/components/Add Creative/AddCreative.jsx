"use client";
import React, { useState } from "react";

const AddCreative = () => {
  const [open, setOpen] = useState(false);
  var disable;
  if (open) {
    disable = true;
  } else {
    disable = false;
  }
  console.log("open value starts");
  console.log(open);
  console.log("open value ends");
  return (
    <div>
      <button disabled={disable} onClick={() => setOpen((prev) => !prev)}>
        Add Creative
      </button>
    </div>
  );
};

export default AddCreative;
