import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  function handler(e) {
    e.preventDefault();
    const loginData = async () => {
      const data = {
        username: username,
        password: password,
      };
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
            setInfo("Signing in...");
            router.push({
              pathname: `/portal/${data.userid}/`,
              // query: {
              //   userid: data.userid,
              // },
            });
          }
        });
      });
    };
    loginData();
  }

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
          {info}
        </form>
        <small>
          Don't have an account?
          <Link href="/auth/signup">Signup </Link>
        </small>
      </div>
    </div>
  </>
  );
};

export default Login;
