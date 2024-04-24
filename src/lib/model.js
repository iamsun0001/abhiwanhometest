import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    selectedColor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
export const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
