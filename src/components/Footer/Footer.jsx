import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.stats}>
        <div>
          <h2>546+</h2>
          <p>Registered Riders</p>
        </div>
        <div>
          <h2>789,900+</h2>
          <p>Orders Delivered</p>
        </div>
        <div>
          <h2>690+</h2>
          <p>Restaurants Partnered</p>
        </div>
        <div>
          <h2>17,457+</h2>
          <p>Food Items</p>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.left}>
          <h1 className={styles.logo}>Order<span>UK</span></h1>

          <div className={styles.apps}>
            <img src="/appstore.png" alt="appstore" />
            <img src="/googleplay.png" alt="googleplay" />
          </div>

          <p className={styles.company}>
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          <h3>Get Exclusive Deals in your Inbox</h3>

          <div className={styles.subscribe}>
            <input type="text" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
          </div>

          <p className={styles.note}>
            we wont spam, read our email policy
          </p>

          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
            <FaSnapchatGhost />
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div>
            <h4>Legal Pages</h4>
            <p>Terms and conditions</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Modern Slavery Statement</p>
          </div>

          <div>
            <h4>Important Links</h4>
            <p>Get help</p>
            <p>Add your restaurant</p>
            <p>Sign up to deliver</p>
            <p>Create a business account</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>

        <div>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Pricing</span>
          <span>Do not sell or share my personal information</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;