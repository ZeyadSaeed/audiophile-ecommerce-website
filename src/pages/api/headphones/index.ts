import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/productModel";
import connectDB from "util/dbConnect";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const headphones = await Product.find({ category: "headphones" });
    res.status(200).json(headphones);
  } catch (err) {
    res.status(400).json({ message: "Can't get the data from the database" });
  }
}

export default connectDB(handler);
