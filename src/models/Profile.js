import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    history: [
      {
        products: [
          {
            productId: Number,
            quantity: Number,
            name: String,
            price: Number,
            image: String,
          },
        ],
        payment: {
          totalPrice: Number,
          date: {
            type: Date,
            default: () => Date.now(),
          },
          orderNumber: Math.floor(Math.random() * 36 * Math.pow(10, 5)),
        },
      },
    ],
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", ProductSchema);

export default Profile;
