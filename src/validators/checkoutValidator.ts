import { CheckoutErrorsInterface } from "@/types/checkoutTypes";
import Joi from "joi";

export const checkoutValidation = (checkoutInfo: CheckoutErrorsInterface) => {
  const checkoutSchema = Joi.object({
    name: Joi.string().min(3).max(55).required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ tlds: { allow: false } }),
    phoneNumber: Joi.string().min(5).max(55).required(),
    address: Joi.string().min(5).max(255).required(),
    zipCode: Joi.string().min(5).max(255).required(),
    city: Joi.string().min(5).max(55).required(),
    country: Joi.string().min(5).max(55).required(),
    eMoneyNumber: Joi.string().min(5).max(255).required(),
    eMoneyPIN: Joi.string().min(5).max(255).required(),
  });

  return checkoutSchema.validate(checkoutInfo);
};
