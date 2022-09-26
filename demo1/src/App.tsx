import React from "react";

type Props = {};

export default function App({}: Props) {
  let result = "";
  result = getResult();
  return <div>App</div>;
}

function getResult() {
  return 1;
}
