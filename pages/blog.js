import Cards from "../components/cards";
import styles from "../styles/Blog.module.css";
import Head from "next/head";
import connectMongo from "../utils/connectdb";
import Post from "../models/postmodel";


const Blog = ({posts}) => {
  return (<>
    <Head>
      <title>Continuum | Blogs</title>
    </Head>
    <div className={styles.container}>
      <h2>All your favourite gists, here for you...</h2>
        <div className="card-group">
          {posts.map((post)=>{
            return <Cards post={post} />
            
          })}
        </div>
    </div>;

  </>)
};

export default Blog;

export const getServerSideProps = async () => {
  await connectMongo();
  console.log("dB connected");

  let postData = await Post.find();
  // gets all the posts

  postData.forEach((element) => {
    console.log(element.title)
  })

  return {
    props: {
      posts: JSON.parse(JSON.stringify(postData)),
    },
  };
};

