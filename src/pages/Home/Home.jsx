import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/Group 10.png";
import img2 from "../../assets/Group 11.png";
import img3 from "../../assets/Group 12.png";
import burger from "../../assets/burger.png";
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import oqat1 from '../../assets/oqat1.png'
import oqat2 from '../../assets/oqat2.png'
import oqat3 from '../../assets/oqat3.png'
import oqat4 from '../../assets/oqat4.png'
import oqat5 from '../../assets/oqat5.png'
import oqat6 from '../../assets/oqat6.png'
import rasm1 from '../../assets/rasm1.png'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.png'
import rasm4 from '../../assets/rasm4.png'
import rasm5 from '../../assets/rasm5.png'
import rasm6 from '../../assets/rasm6.png'




function Hero() {


const foods = [
  { img: oqat1, title: "Burger" },
  { img: oqat2, title: "Salad" },
  { img: oqat3, title: "Pasta" },
  { img: oqat4, title: "Pizza" },
  { img: oqat5, title: "Sandwich" },
  { img: oqat6, title: "Soup" },
]

const brands = [
  { img: rasm1, title: "McDonald's" },
  { img: rasm2, title: "KFC" },
  { img: rasm3, title: "Domino's" },
  { img: rasm4, title: "Subway" },
  { img: rasm5, title: "Burger King" },
  { img: rasm6, title: "Pizza Hut" },
]
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
      <section className={styles.foodSection}>
  <h1 className={styles.foodTitle}>
    Popular Categories 🤩
  </h1>

  <div className={styles.foodWrapper}>
    {foods.map((item, i) => (
      <div key={i} className={styles.foodCard}>
        <img src={item.img} alt={item.title} />

        <div className={styles.foodTitleBox}>
          <p>{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>


<section className={styles.brandSection}>
  <h1 className={styles.brandTitle}>
    Popular Restaurants 🍔
  </h1>

  <div className={styles.brandWrapper}>
    {brands.map((item, i) => (
      <div key={i} className={styles.brandCard}>
        <img src={item.img} alt={item.title} />

        <div className={styles.brandText}>
          <p>{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      <Footer />
    </div>
  );
}

export default Hero;