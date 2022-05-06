import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "util/dbConnect";
import User from "../../../../models/UserModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    await User.updateOne(
      { deviceId: req.query.id },
      {
        $pull: {
          cartProducts: {
            _id: req.body.id,
          },
        },
      }
    );

    res.status(200).send("Deleted.");
  }
}
export default connectDB(handler);
