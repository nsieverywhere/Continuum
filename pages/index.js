import Head from "next/head";
import styles from "../styles/index.module.css";
import Cards from "../components/cards";
import Link from "next/link";
import connectMongo from "../utils/connectdb";
import Post from "../models/postmodel";


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Continuum | Home</title>
      </Head>      
      <div className="container-fluid">
      <div className="row">
        <div  className={styles.heroimage}>
          <div className={styles.herotext} >
            <h1>Welcome to Continuum</h1>
            <p>Let the World hear it</p>
            <Link href="/blog/">
              <button>View Blogs</button>
            </Link>
          </div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.info}>Read the Latest on Continuum</h2>
          <div className="card-group">
            {posts.slice(0,3).reverse().map((post)=>{
              return <Cards post={post} />
              
            })}
           
          </div>
          <Link href="/blog/">
            <h4 className={styles.subheading}>View all the topics</h4>
          </Link>
        </div>
        </div>
        </div>
    </>
  );
}

export const getServerSideProps = async () => {
  await connectMongo();
  console.log("dB connected");

  let postData = await Post.find();
  // gets all the posts

  return {
    props: {
      posts: JSON.parse(JSON.stringify(postData)),
    },
  };
};
