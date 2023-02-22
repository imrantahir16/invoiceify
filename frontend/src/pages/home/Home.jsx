import styles from "./home.module.css";
import image from "../../assets/89367.jpg";
const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.heading}>
          Easiest <span style={{ color: "rgb(75, 145, 241)" }}>Invoicing</span>{" "}
          for businesses
        </h1>
        <div className={styles.paragraph}>
          <p>
            Free and Open Source Invoicing application made with MongoDB,
            Express, React & Nodejs
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={image} alt="invoicing app mockup" />
        </div>
      </section>
    </div>
  );
};
export default Home;
