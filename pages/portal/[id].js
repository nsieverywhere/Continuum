import { useRouter } from "next/router";
import styles from "../../styles/Portal.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEye,
  faGear
 
} from "@fortawesome/free-solid-svg-icons";


const Protal = ({ user }) => {
  const router = useRouter();
  const userid = router.query.userid;

  return (
    <div className={styles.container}>
      <div className="row">
        <div className={` ${styles.navbar}`}>
          <ul className={styles.navbarnav}>
            <li className={styles.navitem}>
              <Link className={styles.navlink} href="/auth/signup">
              <FontAwesomeIcon
                  icon={faPlus}
                  className={` ${styles.navicon}`}
                />
                <p className={styles.linktext}>Create Post</p>  
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link className={styles.navlink} href="/auth/signup">
              <FontAwesomeIcon
                  icon={faEye}
                  className={` ${styles.navicon}`}
                />
                <p className={styles.linktext}> View Post</p>  
                </Link>
            </li>
            <li className={styles.navitem}>
              <Link className={styles.navlink} href="/auth/signup">      
              <FontAwesomeIcon
                  icon={faGear}
                  className={` ${styles.navicon}`}
                />
                <p className={styles.linktext}> Settings</p>
              </Link>
            </li>
          </ul>
          <div >
          </div>
        </div>
        <div className={` ${styles.main}`}>
          <h3 className={styles.welcome}>Welcome, {user.fname}</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an un
            known printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </div>
      </div>
      </div>
  );
};

export default Protal;

export const getServerSideProps = async (userid) => {
  await connectMongo();
  console.log("dB connected");

  let userData = await User.findOne({ _id: userid.params.id });

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };
};
