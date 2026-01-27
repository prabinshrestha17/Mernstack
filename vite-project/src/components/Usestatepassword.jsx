import React, { useState } from "react";

const Usestatepassword = () => {
  const [password, setPassword] = useState("password");
  return (
    <div>
      <input type={password} />
      <button
        onClick={() => {
          setPassword("text");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setPassword("password");
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default Usestatepassword;
