"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Item } from "./model";

export const addItem = async (prevState, formData) => {
  const { title, subtitle, selectedColor } = formData;
  console.log("this is form data from action");
  console.log(formData);
  console.log(title, subtitle, selectedColor);
  console.log("this is form data from action");
  try {
    connectToDb();
    const newPost = new Item({
      title,
      subtitle,
      selectedColor,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/list");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Item.findByIdAndDelete(id);
    console.log("deleted from db");
    // revalidatePath("/blog");
    revalidatePath("/home");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
