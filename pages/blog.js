import Cards from "../components/cards";
import styles from "../styles/Blog.module.css";
import Head from "next/head";

const Blog = () => {
  return (<>
    <Head>
      <title>Continuum | Blogs</title>
    </Head>
    <div className={styles.container}>
    <h2>All your favourite gists, here for you...</h2>
      <Cards/>
      </div>;

  </>)
};

export default Blog;
