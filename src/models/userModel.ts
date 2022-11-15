import { Schema, model, models } from "mongoose";
import Product from "./ProductsModel";

export const userSchema = new Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },
    cartProducts: [
      {
        quantity: {
          type: Number,
          min: 0,
        },

        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: Product,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", userSchema);
