import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
const bcrypt = require("bcrypt");
const saltRounds = 10;

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // response
      res.send("continuum server");
      break;
    case "POST":
      const { email, username, password, fname, lname } = JSON.parse(req.body);
      let usernames = username.toLowerCase();
      await connectMongo();
      console.log("db connected");

      User.find({ email: email }).then(function (docs) {
        if (docs[0] == undefined) {
          bcrypt.hash(password, saltRounds, function (err, hash) {
            const user = User.create({
              usernames,
              email,
              password: hash,
              fname,
              lname,
            });
          });
          res.status(200).json({ message: "signed up" });
          console.log("User created");
        } else {
          console.log("User already exist, sign in");
          res.status(400).json({ message: "user exist" });
        }
      });

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
