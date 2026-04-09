function Fries({ products }) {
  return (
    <div className="section">
      <h2>Fries</h2>

      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />

            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>

            <button className="add">+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fries;