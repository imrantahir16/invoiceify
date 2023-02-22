import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} ${styles.withLogo}`}>
      <img
        className={styles.logo}
        src={
          "https://res.cloudinary.com/dcj24nzd9/image/upload/v1677023211/invoiceify/logo-no-background_e2ynme.png"
        }
        alt="invoiceify logo"
      />
      <a href="/login" className={styles.button}>
        Get Started
      </a>
    </div>
  );
};
export default Header;
