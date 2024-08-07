import { model, models, Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    userInfo: {
      type: Object,
      required: true,
    },

    productInfo: {
      type: Object,
      required: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
