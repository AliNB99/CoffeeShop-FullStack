import { Schema, model, models } from "mongoose";

const FavoritesSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    favorites: [
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

const Favorites = models.Favorites || model("Favorites", FavoritesSchema);

export default Favorites;
