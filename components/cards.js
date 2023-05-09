import styles from "../styles/cards.module.css";
import Link from "next/link";

const Cards = () => {
    return ( 
   <div className="col-lg-4 col-md-6 ">
    <Link  className={` ${styles.links}  `} href="/blog/id">
      <div className={`card ${styles.card}  `}>
        {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Posted By: </small>
        </div>
      </div>
    </Link>
  </div>  );
}
 
export default Cards;