import Portalnav from "../../components/portalnav";
import styles from "../../styles/viewpost.module.css";
import { useRouter } from "next/router";
import connectMongo from "../../utils/connectdb";
import User from "../../models/usermodel";

const Viewpost = ({ user }) => {
  const router = useRouter();
  const data = router.query;

  // const { asPath, pathname } = useRouter();
  // console.log(asPath)

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <Portalnav userid={user._id} />
        <div className={` ${styles.main}`}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

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
};
