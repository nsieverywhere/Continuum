import { useRouter } from "next/router";
import styles from "../../styles/Portal.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faEye,faGear,faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
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
