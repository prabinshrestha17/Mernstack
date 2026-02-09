import { Outlet, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import ForgotPassword from "../components/ForgotPassword";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import ProductCreate from "../components/ProductCreate";
import Register from "../components/Register";
import ResetPassword from "../components/ResetPassword";
import UpdateProfile from "../components/UpdateProfile";
import Store from "../components/Store";
import Order from "../components/Order";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<ProductCreate />}></Route>
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
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
