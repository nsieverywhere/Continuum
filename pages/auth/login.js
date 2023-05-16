import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  const loginData = async (data) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        if (data.message == "User does not exist") {
          setInfo("user does not exist");

          window.setTimeout(() => {
            setInfo("");
          }, 2000);
        } else if (data.message == "Password is incorrect.") {
          setInfo("Password is incorrect.");
          window.setTimeout(() => {
            setInfo("");
          }, 2000);
        } else {
          setInfo("Signing In, please wait...");

          router.push({
            pathname: `/${data.userid}/`,
            // when logging in, an object is sent to the next page.
            // query: {
            //   userid: data.userid,
            // },
            // as: "/userid/",
          });
        }
      });
    });
  };

  function handler(e) {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    loginData(data);
  }

  function emailLogin(email) {
    const data = {
      email: email,
    };

    loginData(data);
  }

  if (session) {
    emailLogin(session.user.email);

    if (info == "user does not exist") {
      window.setTimeout(() => {
        signOut();
        setInfo("")

      }, 2000);
    }

    return (
      <div className={styles.container}>
        <h1>{info}</h1>
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <title>Continuum | Login</title>
        </Head>

        <div className={styles.container}>
          <div className={styles.form}>
            <h5>Login to Portal</h5>

            <form onSubmit={handler}>
              <label>Username: </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Password: </label>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.submitbtn} type="submit">
                Login
              </button>
              <button
                className={styles.googlebtn}
                onClick={() => signIn("google")}
              >
                <FontAwesomeIcon className={styles.googleicon} icon={faG} />
                Login with Google
              </button>
              {info}
            </form>
            <small>
              Don't have an account?
              <Link className={styles.signuplink}  href="/auth/signup">Signup </Link>
            </small>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
