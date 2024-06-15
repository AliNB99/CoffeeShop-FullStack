import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  role: {
    type: String,
    default: "USER",
  },

  name: String,
  lastName: String,
  phone: String,
  bankInfo: String,
});

const User = models.User || model("User", userSchema);

export default User;
