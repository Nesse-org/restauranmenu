function ProductCard({ item }) {
  return (
    <div className="card">
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
  );
}

export default ProductCard;