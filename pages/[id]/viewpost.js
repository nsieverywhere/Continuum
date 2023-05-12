import Portalnav from "../../components/portalnav";
import styles from "../../styles/viewpost.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Post from "../../models/postmodel";
import Link from "next/link";
import { useState } from "react";
import Table from "../../components/table";

const Viewpost = ({ user, posts }) => {
  // const router = useRouter();
  // const data = router.query;

  // const { asPath, pathname } = useRouter();
  // console.log(asPath)


  const [prompt, setPrompt] = useState(false);
  const [postid, setPostid] = useState("");
  const [info, setInfo] = useState("");

  const promptDelete = (id) => {
    setPrompt(!prompt);
    setPostid(id);
  };

  const deletePost = () => {
    setPrompt(!prompt);

    const deletePostData = async (postid) => {
      const data = {
        id: postid
      };

      const response = await fetch("/api/delete", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((response) => {
        response.json().then((data) => {
          if (data.message == "post does not exist") {
            setInfo("post does not exist");
            window.setTimeout(() => {
              setInfo("");
            }, 2000);
          }  else {
            setInfo("Post deleted");
            window.setTimeout(() => {
              setInfo("");
            }, 2000);
          }
        });
      });
    };
    deletePostData(postid);
    // location.reload();
  };

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <Portalnav userid={user._id} />
        <div className={` ${styles.main}`}>
          {/* <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {posts.map((post) => {
              return (
                <>
                  <tbody key={post._id}>
                    <tr key={post._id}>
                      <th key={post._id} scope="row">
                        #
                      </th>

                      <td key={post._id}>{post.title} </td>
                      <td key={post._id}>{post.blog.slice(0, 100)}</td>
                      <td key={post._id}>
                        <Link
                          href={{
                            pathname: `/${user._id}/edit/`,
                          }}
                        >
                          <button className={` ${styles.editbtn}  `}>
                            Edit
                          </button>
                        </Link>
                        <button
                          className={`btn btn-danger ${styles.deletebtn}  `}
                          onClick={() => {
                            let id = post._id;

                            promptDelete(id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
          {info} */}

          <Table promptDelete={promptDelete} info={info} user={user} posts= {posts} />

          {prompt && (
            <div>
              <div className={` ${styles.overlay}`}> </div>
              <div className={` ${styles.popup}`}>
                <h5>Are you sure you want to delete this post?</h5>
                <button
                  className={`btn btn-danger ${styles.deletebtn}  `}
                  onClick={promptDelete}
                >
                  Cancel
                </button>
                <button
                  className={`btn btn-success  ${styles.confirmbtn} ${styles.popupbtn}  `}
                  onClick={() => {
                    

                    deletePost();
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Viewpost;

export const getServerSideProps = async (userid) => {
  // getting id from userid object
  await connectMongo();

  let userData = await User.findOne({ _id: userid.params.id });
  let postData = await Post.find({ ownerid: userid.params.id });
  // console.log(postData);

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
      posts: JSON.parse(JSON.stringify(postData)),
    },
  };
};
