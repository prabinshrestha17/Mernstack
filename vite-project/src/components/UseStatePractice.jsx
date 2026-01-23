import React, { useState } from "react";

const UseStatePractice = () => {
  const [number, setNumber] = useState(10);

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 10);
        }}
      >
        Addition
      </button>

      {number}

      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Subtraction
      </button>
    </div>
  );
};

export default UseStatePractice;
