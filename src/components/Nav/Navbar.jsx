import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

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

        <div className={styles.navLinks}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Home</NavLink>
          <NavLink to="/SpecialOffers" className={({ isActive }) => isActive ? styles.active : styles.link}>Special Offers</NavLink>
          <NavLink to="/restaurant" className={({ isActive }) => isActive ? styles.active : styles.link}>Restaurants</NavLink>
          <NavLink to="/TrackOrder" className={({ isActive }) => isActive ? styles.active : styles.link}>Track Order</NavLink>
        </div>

        <button className={styles.login}>Login/Signup</button>
      </nav>
    </>
  );
}

export default Navbar;