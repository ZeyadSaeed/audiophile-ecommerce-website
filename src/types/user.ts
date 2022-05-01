import { Document } from "mongoose";
import { ProductType } from "@/types/product";

export interface UserType extends Document {
  deviceId: string;
  cartProducts: [ProductType];
}
