import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import SpecialOffers from "./pages/SpecialOffers/SpecialOffers";
import TrackOrder from "./pages/TrackOrder/TrackOrder";

function App() {
  const burgers = [
    { id: 1, name: "The classics for 3", price: "GBP 5.10", image: "src/assets/Rectangle 46.png" },
    { id: 2, name: "The classics for 3", price: "GBP 3.10", image: "src/assets/Rectangle 46.png" },
    { id: 3, name: "The classics for 3", price: "GBP 6.50", image: "src/assets/Rectangle 46.png" },
    { id: 4, name: "The classics for 3", price: "GBP 4.20", image: "src/assets/Rectangle 46.png" },
    { id: 5, name: "The classics for 3", price: "GBP 5.80", image: "src/assets/Rectangle 46.png" },
    { id: 6, name: "The classics for 3", price: "GBP 4.90", image: "src/assets/Rectangle 46.png" }
  ];

  const fries = [
    { id: 1, name: "The classics for 3", price: "GBP 2.00", image: "src/assets/Rectangle 46 (1).png" },
    { id: 2, name: "The classics for 3", price: "GBP 2.50", image: "src/assets/Rectangle 46 (1).png" },
    { id: 3, name: "The classics for 3", price: "GBP 3.00", image: "src/assets/Rectangle 46 (1).png" },
    { id: 4, name: "The classics for 3", price: "GBP 3.50", image: "src/assets/Rectangle 46 (1).png" },
    { id: 5, name: "The classics for 3", price: "GBP 3.20", image: "src/assets/Rectangle 46 (1).png" },
    { id: 6, name: "The classics for 3", price: "GBP 4.00", image: "src/assets/Rectangle 46 (1).png" }
  ];

  const drinks = [
    { id: 1, name: "The classics for 3", price: "GBP 1.50", image: "src/assets/Rectangle 46 (3).png" },
    { id: 2, name: "The classics for 3", price: "GBP 1.50", image: "src/assets/Rectangle 46 (5).png" },
    { id: 3, name: "The classics for 3", price: "GBP 1.50", image: "src/assets/Rectangle 46 (2).png" },
    { id: 4, name: "The classics for 3", price: "GBP 2.50", image: "src/assets/Rectangle 46 (6).png" },
    { id: 5, name: "The classics for 3", price: "GBP 2.00", image: "src/assets/Rectangle 46 (7).png" },
    { id: 6, name: "The classics for 3", price: "GBP 1.20", image: "src/assets/Rectangle 46 (2).png" }
  ];

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route
        path="/restaurant"
        element={
          <Restaurant
            burgers={burgers}
            fries={fries}
            drinks={drinks}
          />
        }
      />
      <Route path="/SpecialOffers" element={<SpecialOffers />} />
      <Route path="/TrackOrder" element={<TrackOrder />} />
    </Routes>
  );
}

export default App;