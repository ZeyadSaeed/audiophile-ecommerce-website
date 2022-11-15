import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "util/dbConnect";
import User from "../../../models/UserModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "GET") {
    const cartProducts = await User.findOne({ deviceId: req.query.id })
      .populate("cartProducts.product")
      .select("cartProducts -_id");

    res.status(200).json(cartProducts);
  }

  // DELETE ALL CART PRODUCTS
  if (req.method === "DELETE") {
    await User.updateOne({ deviceId: req.query.id }, { cartProducts: [] });

    res.status(204).send("Deleted.");
  }

  if (req.method === "PUT") {
    if (req.body.type === "INCREMENT") {
      await User.updateOne(
        { deviceId: req.query.id },
        {
          $inc: {
            "cartProducts.$[product].quantity": 1,
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
    }
    if (req.body.type === "DECREMENT") {
      await User.updateOne(
        { deviceId: req.query.id },
        {
          $inc: {
            "cartProducts.$[product].quantity": -1,
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
    }
    res.status(200).send("Updated.");
  }
}
export default handler;
