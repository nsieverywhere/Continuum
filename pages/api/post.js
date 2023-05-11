import connectMongo from "../../utils/connectdb";
import Post from "../../models/postmodel";

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
          // response
          res.send("continuum server");
          break;
        case "POST":
        const { title, blog, ownerid, owner } = JSON.parse(req.body);
        await connectMongo();
        console.log(owner)

        // "en-US";
        const time = new Date().toLocaleString(); 

        const posts = Post.create({
          title,
          blog,
          date: time,
          ownerid: ownerid,
          owner: owner,
        });
    
        res.status(200).json({ message: "done" });
        console.log("Post Created");
    
          break;
        default:
          res.setHeader("Allow", ["GET", "POST"]);
          res.status(405).end(`Method ${method} Not Allowed`);
      }
    }
    