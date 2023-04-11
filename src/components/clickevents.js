import React from "react";

function Clickevents() {
  const handleClick = (e) => {
    console.log("Click event happened", e);
  };
  const handleAnotherClick = (name, e) => {
    console.log("btn clicked by Amjad", e);
  };
  return (
    <>
      {" "}
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleAnotherClick("amjad", e)}>click me</button>
    </>
  );
}

export default Clickevents;
