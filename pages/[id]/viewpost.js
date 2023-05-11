import Portalnav from "../../components/portalnav";
import styles from "../../styles/viewpost.module.css";
// import { useRouter } from "next/router";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Post from "../../models/postmodel";
import Link from "next/link";

const Viewpost = ({ user, posts }) => {
  // const router = useRouter();
  // const data = router.query;

  // const { asPath, pathname } = useRouter();
  // console.log(asPath)

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <Portalnav userid={user._id} />
        <div className={` ${styles.main}`}>
          <table className="table">
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
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{post.title}</td>
                    <td>{post.blog.slice(0, 100)}</td>
                    <td>
                      <Link
                        href={{
                          pathname: `/${user._id}/edit/`,
                        }}
                      >
                        <button className={` ${styles.editbtn}  `}>Edit</button>
                      </Link>
                      <Link
                        href={{
                          pathname: `/${user._id}/deletepost/`,
                        }}
                      >
                        <button
                          className={`btn btn-danger ${styles.deletebtn}  `}
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
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
  console.log(postData);

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
      posts: JSON.parse(JSON.stringify(postData)),
    },
  };
};
