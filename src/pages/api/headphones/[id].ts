import dbConnect from "util/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/ProductsModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  try {
    const headphones = await Product.findOne({
      slug: req.query.id,
      category: "headphones",
    });
    res.status(200).json(headphones);
  } catch (err) {
    res.status(400).json({ message: "Can't get the data from the database" });
  }
}

export default handler;
