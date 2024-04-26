// 'use server'
import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";
import styles from "./ItemList.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Filter from "../Filter/Filter";
const ItemList = async () => {
  const posts = await getPosts();

  console.log("post from item list start");
  console.log(posts);
  console.log("post from item list end");
  return (
    <div className={styles.container}>
      <Filter items={posts}></Filter>
      <ProgressBar items={posts}></ProgressBar>
      {posts.map((post) => (
        <div key={post._id} className={styles.divContainer}>
          <div
            style={{ backgroundColor: `${post.selectedColor}` }}
            className={styles.singleItem}
          >
            <div>
            <h2>Title</h2>
            <span>{post.title}</span>
            </div>
            <div>
            <h2>Subtitle</h2>
            <span>{post.subtitle}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post._id} />
              <button className={styles.delete}>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
