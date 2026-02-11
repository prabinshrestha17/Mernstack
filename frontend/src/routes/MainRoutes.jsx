import { Outlet, Route, Routes } from "react-router-dom";
import About from "../components/users/About";
import Dashboard from "../components/dashboard/Dashboard";
import ForgotPassword from "../components/auth/ForgotPassword";
import Home from "../components/users/Home";
import Login from "../components/auth/Login";
import Navbar from "../components/users/Navbar";
import ProductCreate from "../components/dashboard/ProductCreate";
import Register from "../components/auth/Register";
import ResetPassword from "../components/auth/ResetPassword";
import UpdateProfile from "../components/dashboard/UpdateProfile";
import Store from "../components/users/Store";
import Order from "../components/users/Order";
import Products from "../components/users/Products";
import MyProducts from "../components/dashboard/MyProducts";
import UpdateProduct from "../components/dashboard/UpdateProduct";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/order/:id/:price" element={<Order />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/user/reset-password"
            element={<ResetPassword />}
          ></Route>

          <Route path="/dashboard" element={<Outlet />}>
            <Route index element={<Dashboard />}></Route>

            <Route path="update-profile" element={<UpdateProfile />}></Route>
            <Route path="create-product" element={<ProductCreate />}></Route>
            <Route path="my-products" element={<MyProducts />}></Route>
            <Route
              path="update-product/:id"
              element={<UpdateProduct />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
