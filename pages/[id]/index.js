import { useRouter } from "next/router";
import styles from "../../styles/Portal.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Link from "next/link";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEye,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Portalnav from "../../components/portalnav";

const Portal = ({ user }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [info, setInfo] = useState("");

  // works if i sent a query from the login page(previous page)
  // const router = useRouter();
  // const { userid } = router.query;

  function handler(e) {
    e.preventDefault();

    const postData = async () => {
      const data = {
        title: title,
        blog: post,
        ownerid: user._id,
        owner: user.fname,

      };
      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((response) => {
        response.json().then((data) => {
          if (data.message == "done") {
            setInfo("Done");
            setTitle("");
            setPost("");
            window.setTimeout(() => {
              setInfo("");
            }, 2000);
          } else {
            setInfo("Something went wrong");

          }
        })
      })
    }

  postData(); 

  };


  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        {/* passing user ID to the navbar: Portalnav after fetching from the db
         for global usage in app*/}
        <Portalnav userid={user._id} />
        <div className={` ${styles.main}`}>
          <h3 className={styles.welcome}>Welcome, {user.fname}</h3>
          <small>what would you like to post?</small>

          <form onSubmit={handler}>
            <div  className={`form-group ${styles.title}`}>
              <label for="exampleFormControlInput1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={`form-group ${styles.content}`}>
              <label for="exampleFormControlTextarea1">Blog Content</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              ></textarea>
            </div>
            <select class="custom-select">
              <option selected>Category</option>
              <option value="1">Technology</option>
              <option value="2">Art</option>
              <option value="3">Politics</option>
              <option value="4">Business</option>
            </select> <br/>
            <p>{info}</p>
            <button type="submit" class= {`btn btn-primary ${styles.btn}`}>Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Portal;

export const getServerSideProps = async (userid) => {
  // here userid is a object containing serveral data and
  // it is gotten back from the api after success
  await connectMongo();
  console.log("dB connected");

  let userData = await User.findOne({ _id: userid.params.id });
  // gets a single user information and stores in userData

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };
};
