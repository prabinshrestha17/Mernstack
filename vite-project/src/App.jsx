import React from "react";
import About from "./components/About";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const a = "Hello world";
  console.log(a);

  return (
    <div>
      <MainRoutes></MainRoutes>
    </div>
  );
};

export default App;
