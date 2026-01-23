import React, { useState } from "react";

const UsestatePractice2 = () => {
  const [show, setShow] = useState(true);

  const a = 10;
  const b = 34;
  const compare = a !== b;

  return (
    <div>
      {show == true && <img src="/vite.svg" />}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default UsestatePractice2;
