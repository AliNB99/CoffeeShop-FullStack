import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    images: [String],

    discount: Number,

    advantages: [String],

    disadvantages: [String],

    specifications: [{ title: String, value: String, name: String }],

    status: {
      type: String,
      default: "available",
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
