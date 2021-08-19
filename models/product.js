import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    product_id: {
      type: Number,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
