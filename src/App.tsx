import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterProduct from "./views/RegisterProduct";
import RevenueAnalysis from "./views/RevenueAnalysis";
import InventoryManagement from "./views/InventoryManagement";
import NotFound from "./views/NotFound";
import "./styles/App.css";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<RevenueAnalysis />} />
          <Route path="/register-product" element={<RegisterProduct />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
