import React from 'react'
import "../../App.css";
import Navbar from '../../components/Nav/Navbar'

function Restaurant({ burgers, fries, drinks }) {
  return (
    <div>
     <Navbar />
  
  <div className="banner">
  <div className="banner-left">
    <p className="tag">I’m lovin’ it!</p>

    <h1>McDonald's East London</h1>

    <div className="banner-info">
      <div className="info-item">
        <span>📋</span>
        <p>Minimum Order: 12 GBP</p>
      </div>

      <div className="info-item">
        <span>🚚</span>
        <p>Delivery in 20-25 Minutes</p>
      </div>
    </div>

    <button className="open-btn">
      🕒 Open until 3:00 AM
    </button>
  </div>

  <div className="banner-right">
    <img src="/src/assets/burger.png" alt="burger" />

    <div className="rating-box">
      <h2>3.4</h2>
      <div className="stars">⭐⭐⭐☆</div>
      <p>1,360 reviews</p>
    </div>
  </div>
</div>
   
  );

      <div className="search">
        <h2>All Offers from McDonald's East London</h2>
       
        <div className="search-box">   
          <input type="text" placeholder="🔍 Search from menu..." />
        </div>
      </div>
      
      <h2 style={{ padding: "20px" }}>Burgers</h2>
      <div className="grid">
        {burgers.map((item) => (
          <div className="card" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p className="desc">
                1 McChicken™, 1 Big Mac™, fries, drink
              </p>
              <b>{item.price}</b>
            </div>

            <div className="img-box">
              <img src={item.image} alt="" />
              <button className="add">+</button>
            </div>
          </div>
        ))}
      </div>
     
      <h2 style={{ padding: "20px" }}>Fries</h2>
      <div className="grid">
        {fries.map((item) => (
          <div className="card" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p className="desc">
                Crispy and tasty fries
              </p>
              <b>{item.price}</b>
            </div>

            <div className="img-box">
              <img src={item.image} alt="" />
              <button className="add">+</button>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ padding: "20px" }}>Cold Drinks</h2>
      <div className="grid">
        {drinks.map((item) => (
          <div className="card" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p className="desc">
                Fresh cold напиток
              </p>
              <b>{item.price}</b>
            </div>

            <div className="img-box">
              <img src={item.image} alt="" />
              <button className="add">+</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
export default Restaurant