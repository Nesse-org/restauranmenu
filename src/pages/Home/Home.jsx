import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/Group 10.png";
import img2 from "../../assets/Group 11.png";
import img3 from "../../assets/Group 12.png";
import burger from "../../assets/burger.png";
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
function Hero() {
  return (
   
    <div className={`${styles.hero} ${styles.container}`}>
       <Navbar />

      <div className={styles.banner}>
        <div>
          <h1>McDonald's East London</h1>
          <p>Minimum Order: 12 GBP</p>
          <p>Delivery 20-25 min</p>
        </div>

        <div className={styles.rating}>
          <h2>3.4 ⭐</h2>
          <img className={styles.smallImg} src={burger} alt="" />
          <p>1360 reviews</p>
        </div>
      </div>

      <div>
        <h1 className={styles.title}>
          Up to -40% 🎊 Order.uk exclusive deals
        </h1>

        <div className={styles.categories}>

    </div>

        <div className={styles.sectionImg}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;