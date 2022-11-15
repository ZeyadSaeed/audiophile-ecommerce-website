import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "util/dbConnect";
import User from "../../../models/UserModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const product = await User.findOne({
        deviceId: req.body.deviceId,
        "cartProducts.product": req.body.productId,
      });

      if (product) {
        await User.updateOne(
          { deviceId: req.body.deviceId },
          {
            $inc: {
              "cartProducts.$[product].quantity": req.body.quantity,
            },
          },
          {
            arrayFilters: [
              {
                "product.product": req.body.productId,
              },
            ],
          }
        );

        res.status(200).send("Updated.");
        return;
      }

      await User.updateOne(
        { deviceId: req.body.deviceId },
        {
          $push: {
            cartProducts: {
              quantity: req.body.quantity,
              product: req.body.productId,
            },
          },
        }
      );

      res.status(201).send("Done.");
    } catch (err) {
      console.log(err);
      res.status(500).send("Unexpected error");
    }
  }
}

export default handler;
