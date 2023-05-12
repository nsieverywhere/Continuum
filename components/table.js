import Link from "next/link";
import styles from "../styles/viewpost.module.css";

const Table = ({ info, user, posts, promptDelete }) => {
  return (
    <>
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
                          query: {postid: post._id}
                      }}
                    >
                      <button className={` ${styles.editbtn}  `}>Edit</button>
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
      {info}
    </>
  );
};

export default Table;
