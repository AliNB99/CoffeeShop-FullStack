import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "USER",
    },

    status: {
      type: String,
      default: "authorized",
    },

    cart: {
      selectedItems: [Object],
      counterItems: { type: Number, default: 0 },
      totalPrice: { type: Number, default: 0 },
    },

    avatar: String,
    firstName: String,
    lastName: String,
    address: String,
    phone: String,
    bankInfo: String,
    postalCode: String,
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
