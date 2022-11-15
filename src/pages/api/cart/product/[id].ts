import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "util/dbConnect";
import User from "../../../../models/UsersModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

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
export default handler;
