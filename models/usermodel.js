import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: String,
  fname: String,
  lname: String,
});

const User = models.User || model("User", userSchema);

export default User;
