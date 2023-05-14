import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Portalnav.module.css";
import {
  faPlus,
  faEye,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

// receive userid from index page as props
const Portalnav = ({ userid }) => {
  const { data: session } = useSession();
  const router = useRouter();
  // const userid = router.query.userid;


  return (
    <div className={` ${styles.navbar}`}>
      <ul className={styles.navbarnav}>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            href={{
              pathname: `/${userid}/`,
            }}
          >
            <FontAwesomeIcon icon={faPlus} className={` ${styles.navicon}`} />
            <p className={styles.linktext}>Create Post</p>
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            href={{
              pathname: `/${userid}/viewpost/`,
            }}
          >
            <FontAwesomeIcon icon={faEye} className={` ${styles.navicon}`} />
            <p className={styles.linktext}> View Post</p>
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            href={{
              pathname: `/${userid}/settings/`,
            }}
          >
            <FontAwesomeIcon icon={faGear} className={` ${styles.navicon}`} />
            <p className={styles.linktext}> Settings</p>
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link className={styles.navlink} href="/api/auth/signout">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className={` ${styles.navicon}`}
            />
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              className={styles.linktext}
            >
              Logout
            </a>
          </Link>
          
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Portalnav;
