import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterProduct from "./views/RegisterProduct";
import RevenueAnalysis from "./views/RevenueAnalysis";
import InventoryManagement from "./views/InventoryManagement";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RevenueAnalysis />} />
        <Route path="/register-product" element={<RegisterProduct />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
