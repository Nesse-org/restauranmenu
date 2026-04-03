import ProductCard from "./ProductCard";

function Section({ title, products }) {
  return (
    <div className="section">
      <h2>{title}</h2>

      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Section;