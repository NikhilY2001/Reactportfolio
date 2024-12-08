import React, { useRef } from "react";

function Aap() {
  const inputRef = useRef(null);

  function handleClick() {
    // Access and update input value
    inputRef.current.value = "Hello, Refs!";
  }

  return (
    <div>
      <h1>Using Refs to Change Input Value</h1>
      <input type="text" ref={inputRef} placeholder="Type something" />
      <button onClick={handleClick}>Set Value</button>
    </div>
  );
}

export default Aap;
