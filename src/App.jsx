import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import SpecialOffers from "./pages/SpecialOffers/SpecialOffers";
import TrackOrder from "./pages/TrackOrder/TrackOrder";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/SpecialOffers" element={<SpecialOffers />} />
      <Route path="/TrackOrder" element={<TrackOrder />} />
    </Routes>
  );
}

export default App;