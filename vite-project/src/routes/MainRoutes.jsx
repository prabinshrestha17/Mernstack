import { Outlet, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Courses from "../components/Courses";
import DynamicRoute from "../components/DynamicRoute";
import Navbar from "../components/Navbar";
import Test from "../components/Test";
import UseStatePractice from "../components/UseStatePractice";
import UsestatePractice2 from "../components/UsestatePractice2";
import Usestatepassword from "../components/Usestatepassword";
import NotfoundPage from "../components/NotfoundPage";
import UseEffectPractice from "../components/UseEffectPractice";
import About2 from "../components/About2";
import About3 from "../components/About3";

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello from home routes</div>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route
          path="/usestate"
          element={<UseStatePractice></UseStatePractice>}
        ></Route>

        <Route path="/image" element={<UsestatePractice2 />}></Route>
        <Route path="/password" element={<Usestatepassword />}></Route>
        <Route path="useeffect" element={<UseEffectPractice />}></Route>

        <Route path="/about" element={<Outlet />}>
          <Route index element={<About></About>}></Route>
          <Route path="about2" element={<About2 />}></Route>
          <Route path="about3" element={<About3 />}></Route>
        </Route>
        <Route path="*" element={<NotfoundPage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
