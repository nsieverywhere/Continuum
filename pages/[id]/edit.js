import Portalnav from "../../components/portalnav";
import styles from "../../styles/viewpost.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Post from "../../models/postmodel";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Viewpost = ({ user, posts }) => {
  const [title, setTitle] = useState(posts.title);
  const [post, setPost] = useState(posts.blog);
  const [info, setInfo] = useState("");
  const [postid, setPostid] = useState("");

  const router = useRouter();
  // const singlepostid = router.query.postid;

  function handler(e) {
    e.preventDefault();

    alert("function call");
  }

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        {/* passing user ID to the navbar: Portalnav after fetching from the db
       for global usage in app*/}
        <Portalnav userid={user._id} />
        <div className={` ${styles.main}`}>
          <h3 className={styles.welcome}>Edit this post</h3>

          <form onSubmit={handler}>
            <div className={`form-group ${styles.title}`}>
              <label htmlFor="exampleFormControlInput1">Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <br />
            <div className={`form-group ${styles.content}`}>
              <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                required
              ></textarea>
            </div>
            <select className="custom-select">
              <option defaultValue>Category</option>
              <option value="1">Technology</option>
              <option value="2">Art</option>
              <option value="3">Politics</option>
              <option value="4">Business</option>
            </select>{" "}
            <br />
            <p>{info}</p>
            <button type="button" className={`btn btn-dark ${styles.btn} ${styles.gobackbtn}`} onClick={() => router.back()}>
              Go Back
            </button>
            <button type="submit" className={`btn btn-primary ${styles.btn}`}>
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Viewpost;

export const getServerSideProps = async (userid) => {
  await connectMongo();

  let userData = await User.findOne({ _id: userid.params.id });
  let postData = await Post.find({ _id: userid.query.postid });
  let post = postData[0];

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
      posts: JSON.parse(JSON.stringify(post)),
    },
  };
};
