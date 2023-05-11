import { useRouter } from "next/router";
import connectMongo from "../../utils/connectdb";
import Post from "../../models/postmodel";
import styles from "../../styles/blogpost.module.css";
import Link from "next/link";

const Blogpost = ({ content }) => {
  const router = useRouter();
  // let userid = router.query;
  // console.log(userid)

  return (
    <div className={`container-fluid ${styles.contain}  `}>
      <div className="row">
        <div className="col-lg-8">
          <div className={`card ${styles.card}  `}>
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
              <h5 className="card-title">{content.title}</h5>
              <p className="card-text">{content.blog}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Posted By: {content.owner} on {content.date}
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={`card ${styles.card2}  `}></div>
        </div>
        <Link href="/blog/">
          <button className={` ${styles.goback}  `}>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Blogpost;

export const getServerSideProps = async (userid) => {
  await connectMongo();

  let content = await Post.find({ _id: userid.params.id });

  return {
    props: {
      content: JSON.parse(JSON.stringify(content[0])),
    },
  };
};
