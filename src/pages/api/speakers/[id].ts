import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/productModel";
import connectDB from "util/dbConnect";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const speakers = await Product.findOne({
      slug: req.query.id,
      category: "speakers",
    });
    res.status(200).json(speakers);
  } catch (err) {
    res.status(400).json({ message: "Can't get the data from the database" });
  }
}

export default connectDB(handler);
