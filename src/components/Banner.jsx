function Banner() {
  return (
    <div className="banner">
      <div>
        <h1>McDonald's East London</h1>
        <p>Minimum Order: 12 GBP</p>
        <p>Delivery 20-25 min</p>
      </div>

      <div className="rating">
        <h2>3.4 ⭐</h2>
         <img className="smallImg" src="src/assets/burger.png" alt="" />
        <p>1360 reviews</p>
      </div>
    </div>
  );
}

export default Banner;