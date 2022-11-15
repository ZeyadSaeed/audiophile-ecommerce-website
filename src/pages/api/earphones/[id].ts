import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/ProductModel";
import dbConnect from "util/dbConnect";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const earphones = await Product.findOne({
      slug: req.query.id,
      category: "earphones",
    });
    res.status(200).json(earphones);
  } catch (err) {
    res.status(400).json({ message: "Can't get the data from the database" });
  }
}

export default handler;
