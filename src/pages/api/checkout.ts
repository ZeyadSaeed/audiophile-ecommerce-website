import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "util/dbConnect";
import Checkout from "../../models/CheckoutModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const checkout = new Checkout({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country,
        eMoney: req.body.eMoney,
        cashOnDelivery: req.body.cashOnDelivery,
        eMoneyNumber: req.body.eMoneyNumber,
        eMoneyPIN: req.body.eMoneyPIN,
        orderedProducts: req.body.orderedProducts,
      });

      checkout.save();
      res.status(201).json({ message: "Checkout created successfully!" });
    } catch (err) {
      res.status(500).send("unexpected error");
    }
  }
}

export default handler;
