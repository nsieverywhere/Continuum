import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h4>
              Continuum{" "}
              <Image
                src="/image/continuum.png"
                width={50}
                height={50}
                alt="Continuum Logo"
              />
            </h4>
          </div>
          <div className="col-lg-6">
            <h6>Follow us on:</h6>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Continuum, All rights reserved 2023. Developed by Nsikan Simon-Okon.</p>
    </footer>
  );
};

export default Footer;
