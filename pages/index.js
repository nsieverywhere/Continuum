import Head from "next/head";
import styles from "../styles/index.module.css";
import Cards from "../components/cards";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Continuum | Home</title>
      </Head>      
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
          <div class="card-group">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <Link href="/posts/">
            <h4 className={styles.subheading}>View all the topics</h4>
          </Link>
        </div>
      </div>
    </>
  );
}
