import { useRouter } from "next/router";
import styles from "../../styles/Portal.module.css";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";
import Link from "next/link";

const Protal = ({ user }) => {
  const router = useRouter();
  const userid = router.query.userid;

  return (
    <div className={styles.container}>
      <h3 className={styles.welcome}>Welcome, {user.fname}</h3>
      <div className="row">
        <div className="col-lg-2">
          <div>
            <Link href="/auth/signup">Signup </Link>
          </div>
          <div>
            <Link href="/auth/signup">Signup </Link>
          </div>
        </div>
        <div className="col-lg-10">content</div>
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
