import styles from "../styles/Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightToBracket,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <>
      <nav
        className={` navbar navbar-expand-lg navbar-light ${styles.navbar}   `}
      >
        <Link className={` navbar-brand    `} href="/">
          <h4 className={` ${styles.logo} `}>Continuum</h4>
        </Link>
        <Image
          src="/image/continuum.png"
          width={50}
          height={50}
          alt="Continuum Logo"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarNav">
          <ul class=" navbar-nav ms-auto">
            <li class="nav-item active">
              <Link className={`nav-link  ${styles.links}   `} href="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className={`nav-link  ${styles.links}   `} href="/blog">
                Blogs
              </Link>
            </li>
          </ul>
          <ul className={`nav navbar-nav navbar-right  ${styles.auth}   `}>
            <li>
              <Link
                className={`nav-link  ${styles.links}   `}
                href="/auth/signup"
              >
                <FontAwesomeIcon
                  className={`${styles.linkicon}`}
                  icon={faUser}
                  style={{ color: "#146C94" }}
                />
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link  ${styles.links}   `}
                href="/auth/login"
              >
                <FontAwesomeIcon
                  className={`${styles.linkicon}`}
                  icon={faRightToBracket}
                  style={{ color: "#146C94" }}
                />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
