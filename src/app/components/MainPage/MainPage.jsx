import styles from "./MainPage.module.css";
import Image from "next/image";
import ColorSelectInput from "../ColorOption/ColorOption";
import InputForm from "../Form/InputForm";
import ItemList from "../ItemList/ItemList";
import Items from "../items/Items";
import AddCreative from "../Add Creative/AddCreative";
import CrossImage from "../Cross Image/CrossImage";
import Filter from "../Filter/Filter";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.listArea}>
        <h1>Filter By</h1>
        <div className={styles.colorandtitleDiv}>
          <div className={styles.color}>
            <div className={styles.colorOption}>
              <ColorSelectInput></ColorSelectInput>
            </div>
          </div>
          {/* <div className={styles.titleAndSubtitle}>
            <h3>Title/Subtitle</h3>
            <input type="" name="" value="" />
          </div> */}
        </div>
        <AddCreative></AddCreative>
        <div className={styles.list}>
          <Items></Items>
        </div>
      </div>

      <div className={styles.drawerArea}>
        <div className="listArea">
          <div className={styles.top}>
            <h1>Creative Creation</h1>
            <CrossImage></CrossImage>
          </div>
          <InputForm></InputForm>
        </div>
      </div>
    </div>
  );
}
