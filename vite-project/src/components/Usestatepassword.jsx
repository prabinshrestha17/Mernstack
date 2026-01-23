import React, { useState } from "react";

const Usestatepassword = () => {
  const [value, setValue] = useState("password");

  //input types in html
  //1. text, password, email, number, date, checkbox, radio
  return (
    <div>
      <input type={value} />
      <button
        onClick={() => {
          setValue("text");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setValue("password");
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default Usestatepassword;
