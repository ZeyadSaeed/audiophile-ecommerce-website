import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "util/dbConnect";
import User from "../../models/UserModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const user = new User({
        deviceId: req.body.deviceId,
      });

      user.save();
      res.status(201).json({ user });
    } catch (err) {
      res.status(500).send("unexpected error");
    }
  }
}

export default connectDB(handler);
