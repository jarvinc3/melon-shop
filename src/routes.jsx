import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Dashboard from "./containers/home/Dashboard";
import Home from "./containers/home/Home";
import ProductDetail from "./components/product/ProductDetail";
import Login from "./containers/account/Login";
import Cart from "./containers/cart/Cart"
import ProductJewelery from "./components/product/products list/ProductJewelery";
import ProductElectronics from "./components/product/products list/ProductElectronics";
import ProductMen from "./components/product/products list/ProductMen";
import ProductWomen from "./components/product/products list/ProductWomen";
import SingUp from "./containers/account/SingUp";
import Loader from "./components/loader/Loader";
import Products from "./containers/home/Products";
import Clothes from "./components/product/products containers/Clothes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/all products" element={<Products />} />
        <Route path="/electronics" element={<ProductElectronics />} />
        <Route path="/jewelery" element={<ProductJewelery />} />
        <Route path="/men's clothing" element={<ProductMen />} />
        <Route path="/women's clothing" element={<ProductWomen />} />
      </Routes>
    </BrowserRouter>
  );
}
