import Head from "next/head";
import styles from "../styles/index.module.css";
import Cards from "../components/cards";
import Link from "next/link";

export default function Home() {
  return (<>
    <Head>
        <title>Continuum | Home</title>
    </Head>
    <div className={styles.container}>
      <div className="row">
      <h2>Read the Latest on Continuum</h2>
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
