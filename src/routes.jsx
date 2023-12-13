import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Dashboard from "./containers/home/Dashboard";
import Home from "./containers/home/Home";
import ProductDetail from "./components/product/ProductDetail";
import Login from "./containers/account/Login";
import Cart from "./containers/cart/Cart"
import ProductJewelery from "./components/product/ProductJewelery";
import ProductElectronics from "./components/product/ProductElectronics";
import ProductMen from "./components/product/ProductMen";
import ProductWomen from "./components/product/ProductWomen";
import SingUp from "./containers/account/SingUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/electronics" element={<ProductElectronics />} />
        <Route path="/jewelery" element={<ProductJewelery />} />
        <Route path="/men's clothing" element={<ProductMen />} />
        <Route path="/women's clothing" element={<ProductWomen />} />
      </Routes>
    </BrowserRouter>
  );
}
