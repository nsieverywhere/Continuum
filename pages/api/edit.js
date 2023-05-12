import connectMongo from "../../utils/connectdb";
import Post from "../../models/postmodel";
const mongoose = require("mongoose");

export default async function handler(req, res) {
  await connectMongo();
  console.log("db connected");

  const { method } = req;

  switch (method) {
    case "GET":
      // response
      res.send("continuum server");
      break;
    case "POST":
      const { title, blog, id } = JSON.parse(req.body);
      await connectMongo();
      let ids = new mongoose.Types.ObjectId(id);
      mongoose.connection.db.collection("posts").updateOne({ _id: ids }, { $set: { title: title, blog: blog } });

      res.status(200).json({ message: "done" });
      console.log("Post Updated");

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

 
}
