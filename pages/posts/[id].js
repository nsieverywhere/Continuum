import { useRouter } from "next/router";
import connectMongo from "../../utils/connectdb";
import Post from "../../models/postmodel";
import styles from "../../styles/blogpost.module.css";
import Link from "next/link";
import Image from "next/image";

const Blogpost = ({ content }) => {
  const router = useRouter();
  // let userid = router.query;
  // console.log(userid)

  return (
    <div className={`container-fluid ${styles.contain}  `}>
      <div className="row">
        <div className="col-lg-8">
          <div className={`card ${styles.card}  `}>
          <Image
              className={`card-img-top ${styles.cardimage}  `}
              src="/image/continuum_hero.jpg"
              width={500}
              height={400}
              alt="image title"
              />
            <div className="card-body">
              <h5 className= {`card-title ${styles.posttitle}  `}>{content.title}</h5>
              <p   className= {`card-text ${styles.posttext}  `}>{content.blog}</p>
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
