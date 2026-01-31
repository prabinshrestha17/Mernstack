import React, { useState } from "react";

const Usestatepractie = () => {
  const [value, setValue] = useState(1000);

  return (
    <div>
      <button
        onClick={() => {
          setValue(value + 100);
        }}
      >
        Add
      </button>
      {value}
      <button
        onClick={() => {
          setValue(value - 500);
        }}
      >
        Minus
      </button>
    </div>
  );
};

export default Usestatepractie;
