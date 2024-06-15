import { Schema, model, models } from "mongoose";

const CartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
      },
    ],
  },
  { timestamps: true }
);

const Cart = models.Cart || model("Cart", CartSchema);

export default Cart;
