import styles from "../styles/cards.module.css";
import Link from "next/link";

const Cards = ({post}) => {
    return ( 
   <div className="col-lg-4 col-md-6 ">
    <Link  className={` ${styles.links}  `} href="/blog/id">
      <div className={`card ${styles.card}  `}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.blog}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Posted By: {post.owner} </small>
        </div>
      </div>
    </Link>
  </div>  );
}
 
export default Cards;