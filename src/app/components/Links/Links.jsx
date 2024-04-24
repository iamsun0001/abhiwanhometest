
import Image from "next/image";
import React, { useState } from "react";
import MainPage from "../MainPage/MainPage";

const Links = () => {
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
      <div>
        <Image src={"/cross.png"} height={50} width={50} onClick={() => setOpen((prev) => !prev)}></Image>

        <MainPage></MainPage>
      </div>
    </div>
  );
};

export default Links;
