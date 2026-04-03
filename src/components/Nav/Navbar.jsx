import React from "react";
import styles from "./Nav.module.css"

function Navbar() {
  return (
    <>
      <div className={styles.topBar}>
        <div>
          ⭐️ Get 5% Off your first order,{" "}
          <span className={styles.promo}>Promo: ORDER5</span>
        </div>

        <div className={styles.right}>
          <span>
            📍 Regent Street, London -{" "}
            <span className={styles.change}>Change Location</span>
          </span>

          <div className={styles.cart}>
            🛒 23 Items | GBP 79.89 ⬇️
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Order<span>UK</span>
        </div>

        <ul className={styles.navLinks}>
          <li className={styles.active}>Home</li>
          <li>Browse Menu</li>
          <li>Special Offers</li>
          <li>Restaurants</li>
          <li>Track Order</li>
        </ul>

        <button className={styles.login}>Login/Signup</button>
      </nav>
    </>
  );
}

export default Navbar;