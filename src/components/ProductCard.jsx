function ProductCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt="" />

      <div>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>

      <button className="add">+</button>
    </div>
  );
}

export default ProductCard;