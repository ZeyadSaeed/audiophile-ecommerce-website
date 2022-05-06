import { CheckoutInfoInterface } from "@/types/checkoutTypes";
import { Schema, model, models } from "mongoose";

const checkoutSchema: Schema = new Schema<CheckoutInfoInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  eMoney: {
    type: Boolean,
    required: true,
  },
  cashOnDelivery: {
    type: Boolean,
    required: true,
  },
  eMoneyNumber: String,
  eMoneyPIN: String,
});

export default models.Checkout || model("Checkout", checkoutSchema);
