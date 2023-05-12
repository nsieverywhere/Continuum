import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
const bcrypt = require("bcrypt");
// const saltRounds = 10;

export default async function handler(req, res) {
  await connectMongo();
  console.log("db connected");

  const { username, password } = JSON.parse(req.body);
      let usernames = username.toLowerCase();

  User.find({ username: usernames })
    .then(function (docs) {
      if (docs[0] == undefined) {
        res.status(400).json({ message: "User does not exist" });
      } else {
        bcrypt.compare(password, docs[0].password, function (err, result) {
          if (result == true) {
            res
              .status(200)
              .json({ userid: docs[0]._id, message: "Signing in" });
            // sending the user id back to the front end as userid
          } else {
            res.status(400).json({ message: "Password is incorrect." });
          }
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
