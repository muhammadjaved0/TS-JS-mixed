import React from "react";
import "./App.css";
import Test from "./test";

function App() {
  // const test = "typeScript";
  const add = (first: number, second: number) => {
    return first + second;
  };

  const result = add(21, 2);
  return (
    <>
      {result}
      <Test />
    </>
  );
}

export default App;
