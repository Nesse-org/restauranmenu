function Banner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <p>I’m lovin’ it!</p>
        <h1>McDonald's East London</h1>

        <div className="banner-info">
          <span>Minimum Order: 12 GBP</span>
          <span>Delivery 20-25 Minutes</span>
        </div>

        <button className="open">Open until 3:00 AM</button>
      </div>

      <div className="banner-right">
        <img src="src/assets/burger.png" alt="" />

        <div className="rating-box">
          <h2>3.4 ⭐</h2>
          <p>1360 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;