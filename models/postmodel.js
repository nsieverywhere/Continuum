import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  title: String,
  body: String,
  date: String,
  Ownerid: String,
});

const Post = models.Post || model("Post", postSchema);

export default Post;
