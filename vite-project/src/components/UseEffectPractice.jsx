import React, { useEffect, useState } from "react";

const UseEffectPractice = () => {
  const handleClick = () => {
    const a = "This is a normal function ";
    console.log(a);
  };

  useEffect(() => {
    const a = "Courses will ne render here ";
    console.log(a);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseEffectPractice;
