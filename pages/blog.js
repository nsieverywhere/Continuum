import Cards from "../components/cards";
import styles from "../styles/Blog.module.css";
import Head from "next/head";
import connectMongo from "../utils/connectdb";
import Post from "../models/postmodel";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Continuum | Blogs</title>
      </Head>
      <div className={`container-fluid  `}>
        <div className="row">
          <div className={styles.heroimage}>
            <div className={styles.herotext}>
              <h1>All your favourite gists, here for you...</h1>
            </div>
          </div>
          <div className="card-group">
            {posts
              .slice(0)
              .reverse()
              .map((post) => {
                return <Cards post={post} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  await connectMongo();

  let postData = await Post.find();
  // gets all the posts

  return {
    props: {
      posts: JSON.parse(JSON.stringify(postData)),
    },
  };
};
