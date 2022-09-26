import React from "react";

export default function App() {
  let count = 0;
  let result = "i am result";

  result = getResult();

  // JSX
  return (
    <div>
      <h1>App</h1>
      <span>CodeMobiles {count} </span>
      <span>{result}</span>
    </div>
  );
}

function getResult() {
  return 1;
}
