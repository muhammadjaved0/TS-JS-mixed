import React from "react";
import "./App.css";
import Test from "./test";

function App() {
  // const test = "typeScript";
  const add = (a: any, b: any) => {
    return a + b;
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
