import { useRouter } from "next/router";
import styles from "../../styles/Portal.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEye,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Portalnav from "../../components/portalnav";

const Portal = ({ user }) => {
  // works if i sent a query from the login page(previous page)
  // const router = useRouter();
  // const { userid } = router.query;

  return (
    <div className={styles.container}>
      <div className="row">
        {/* passing user ID to the navbar: Portalnav after fetching from the db
         for global usage in app*/}
        <Portalnav userid={user._id} />

        <div className={` ${styles.main}`}>
          <h3 className={styles.welcome}>Welcome, {user.fname}</h3>
          <form>
            <div  className={`form-group ${styles.title}`}>
              <label for="exampleFormControlInput1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your blog title"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Blog Content</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Portal;

export const getServerSideProps = async (userid) => {
  // here userid is a object containing serveral data and
  // it is gotten back from the api after success
  await connectMongo();
  console.log("dB connected");

  let userData = await User.findOne({ _id: userid.params.id });
  // gets a single user information and stores in userData

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };
};
