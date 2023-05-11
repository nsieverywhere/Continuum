import styles from "../styles/cards.module.css";
import Link from "next/link";

const Cards = ({post}) => {
    return ( 
   <div className="col-lg-4 col-md-6 ">
        <Link className={` ${styles.links}  `}
          href={{
            pathname: `/posts/${post._id}`,
            // query: { postid: post._id },
          }}
           >
      <div className={`card ${styles.card}  `}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
                {post.blog.substring(0, 200) + "..."}
          </p>
        </div>
        <div className="card-footer">
              <small className="text-muted">Posted By: {post.owner} on {post.date}</small>
        </div>
      </div>
    </Link>
  </div>  );
}
 
export default Cards;