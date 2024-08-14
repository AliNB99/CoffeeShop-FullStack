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

    rate: {
      type: Number,
      required: true,
      default: 2,
    },

    images: [String],

    discount: Number,

    advantages: [String],

    disadvantages: [String],

    specifications: [{ title: String, value: String }],

    status: {
      type: String,
      default: "available",
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
