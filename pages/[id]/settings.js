import Portalnav from "../../components/portalnav";
import styles from "../../styles/Setting.module.css";
import { useRouter } from "next/router";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";



const Settings = ({user}) => {
    const router = useRouter();
    const data = router.query;

    return ( <div className={styles.container}>
        <div className="row">
        <Portalnav  userid={user._id}/>
            
        <div className={` ${styles.main}`}>
        <p>The settings page</p>
      
    </div>
        </div>
    </div> );
}
 
export default Settings;


export const getServerSideProps = async (userid) => {
    await connectMongo();
    console.log("dB connected");

  let userData = await User.findOne({ _id: userid.params.id });

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };

}