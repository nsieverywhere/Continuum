import connectMongo from "../../utils/connectdb";
import Post from "../../models/postmodel";
const mongoose = require("mongoose");
// import { ObjectId } from 'mongodb'


export default async function handler(req, res) {
  await connectMongo();
  console.log("db connected");

  const { id } = JSON.parse(req.body);
  console.log(id)

  // const postId = new ObjectId(id);
  // console.log(postId)

  let ids = new mongoose.Types.ObjectId(id);
  console.log(ids)
  
  mongoose.connection.db.collection("posts").deleteOne({ _id: ids })
  res.status(200).json({ message: "Post deleted" });
  
}
