import React, { useState } from "react";

const Usestate2 = () => {
  const [image, setImage] = useState(true);
  const [password, setPassword] = useState("password");

  return (
    <div>
      {image ? <img src="/vite.svg" /> : "no image found"}
      <button
        onClick={() => {
          setImage(!image);
        }}
      >
        {image ? "Hide" : "Show"}
      </button>
      <br />
      <br />

      {/* password  */}

      <input type={password ? "text" : "password"} />

      <button
        onClick={() => {
          setPassword(!password);
        }}
      >
        {password ? "Hide" : "Show"}
      </button>

      <div></div>
    </div>
  );
};

export default Usestate2;
