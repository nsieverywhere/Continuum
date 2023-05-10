import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Portal.module.css";
import { useRouter } from "next/router";
import { faPlus, faEye, faGear, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

// receive userid from index page as props
const Portalnav = ({ userid }) => {
    // const router = useRouter();
    // const userid = router.query.userid;
  
    return ( 
        <div className={` ${styles.navbar}`}>
          <ul className={styles.navbarnav}>
            <li className={styles.navitem}>
                <Link className={styles.navlink} 
                    href={{
                    pathname: `/${userid}/`,
                   
                    }}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        className={` ${styles.navicon}`}
                        />
                        <p className={styles.linktext}>Create Post</p>  
                </Link>
            </li>
            <li className={styles.navitem}>
                    <Link className={styles.navlink}
                        href={{
                            pathname: `/${userid}/viewpost/`,
                            
                            }}
                    >
              <FontAwesomeIcon
                  icon={faEye}
                  className={` ${styles.navicon}`}
                />
                <p className={styles.linktext}> View Post</p>  
                </Link>
            </li>
            <li className={styles.navitem}>
            <Link className={styles.navlink}
             href={{
              pathname: `/${userid}/settings/`,
              
              }}
            >      
              <FontAwesomeIcon
                  icon={faGear}
                  className={` ${styles.navicon}`}
                />
                <p className={styles.linktext}> Settings</p>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link className={styles.navlink} href="/auth/login">      
              <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className={` ${styles.navicon}`}
                />
                <p className={styles.linktext}> Logout</p>
              </Link>
            </li>
          </ul>
          <div >
          </div>
        </div>
    );
}
 
export default Portalnav;