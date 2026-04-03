import Header from "./components/Nav/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Section from "./components/Section";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Royal Cheese Burger",
      price: "23.10 GBP",
      image: "src/assets/Group 23.png"
    },
    {
      id: 2,
      name: "Big Mac Combo",
      price: "23.10 GBP",
      image: ""
    },
    {
      id: 3,
      name: "French Fries",
      price: "23.10 GBP",
      image: ""
    }
  ];

  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Section title="Burgers" products={products} />
    </div>
  );
}

export default App;