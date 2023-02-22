import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Made with ❤ by Imran</p>
      <div className={styles.link}>
        <a
          href="https://www.linkedin.com/in/imran-tahir-4a1062132/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/imrantahir16"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};
export default Footer;
