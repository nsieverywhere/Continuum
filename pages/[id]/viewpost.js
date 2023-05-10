import Portalnav from "../../components/portalnav";
import styles from "../../styles/viewpost.module.css";
import { useRouter } from "next/router";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";


const Viewpost = ({user}) => {
    const router = useRouter();
    const data = router.query;

    // const { asPath, pathname } = useRouter();
    // console.log(asPath)

    return (
        <div className={styles.container}>
            <div className="row">
                <Portalnav userid={user._id}/>

            <div className={` ${styles.main}`}>
            <p>View all your post</p>
          
        </div>
            </div>
        </div>);
}
 
export default Viewpost;


export const getServerSideProps = async (userid) => {
    // getting id from userid object
    await connectMongo();

  let userData = await User.findOne({ _id: userid.params.id });

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };

}

