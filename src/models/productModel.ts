import { ProductType } from "@/types/product";
import { Schema, model, models } from "mongoose";

const imageSchema = {
  mobile: String,
  tablet: String,
  desktop: String,
};

export const productSchema: Schema = new Schema<ProductType>({
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: imageSchema,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryImage: {
    type: imageSchema,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  includes: [
    {
      quantity: Number,
      item: String,
    },
  ],
  gallery: {
    first: {
      type: imageSchema,
      required: true,
    },
    second: {
      type: imageSchema,
      required: true,
    },
    third: {
      type: imageSchema,
      required: true,
    },
  },
  others: [
    {
      slug: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: imageSchema,
        required: true,
      },
    },
  ],
});

export default models.Product || model("Product", productSchema);
