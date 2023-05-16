import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Signup.module.css";
import Link from "next/link";
import Head from "next/head";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [info, setInfo] = useState("");

  function handler(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        username: username,
        email: email,
        password: password,
        fname: fname,
        lname: lname,
      };

      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((response) => {
        response.json().then((data) => {
          if (data.message == "signed up") {
            setInfo("Signed Up");
            router.push("/auth/login");
          } else {
            setInfo("User already exist.");
            window.setTimeout(() => {
              setInfo("");
            }, 2000);
          }
        });
      });
    };
    postData();
  }

  return (
    <>
    <Head>
        <title>Continuum | Login</title>
      </Head>
    <div className={styles.container}>
      <div className={styles.form}>
        <h5>Join Continuum</h5>

        <form onSubmit={handler}>
          <div className="form-group">
            <small>Email: </small>
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <small>Firstname: </small>
            <input
              className={styles.input}
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <small>Lastname: </small>
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <small>Username: </small>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <small>Password: </small>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles.submitbtn} type="submit">
            Signup
          </button>
          {info}
        </form>
        <small>
          Already have an account?
          <Link className={styles.loginlink} href="/auth/login">Login </Link>
        </small>
      </div>
    </div>
    </>
  );
};

export default Signup;
