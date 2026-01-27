import { Route, Routes } from "react-router-dom";
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

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello from home routes</div>}></Route>
        <Route
          path="/about"
          element={<About productName="Lenovo " price="90,000"></About>}
        ></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route
          path="/usestate"
          element={<UseStatePractice></UseStatePractice>}
        ></Route>

        <Route path="/image" element={<UsestatePractice2 />}></Route>
        <Route path="/password" element={<Usestatepassword />}></Route>
        {/* <Route path="/test/:id" element={<Test />}></Route> */}
        <Route path="*" element={<NotfoundPage />}></Route>
        <Route path="useeffect" element={<UseEffectPractice />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
