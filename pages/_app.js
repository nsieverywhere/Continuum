import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
config.autoAddCss = false;
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>Continuum</title>
        <link rel="icon" href="/favicon.ico" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
