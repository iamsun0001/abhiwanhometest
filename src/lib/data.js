import { Item } from "./model";
import { connectToDb } from "./utils";
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Item.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get posts");
  }
};
