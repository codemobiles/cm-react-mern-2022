import React from "react";

type Props = {};

export default function App({}: Props) {
  let result = "";
  result = getResult();
  return <div>Result: {result}</div>;
}

function getResult() {
  return "ok";
}
