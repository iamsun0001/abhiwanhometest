import Image from "next/image";

const CrossImage = () => {
  return (
    <div>
      <Image src={"/cross.png"} height={50} width={50}></Image>
    </div>
  );
};

export default CrossImage;
