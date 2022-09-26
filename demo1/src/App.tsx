import React from "react";

type Props = {};

export default function App({}: Props) {
  // // implicit declaration
  // let count1 = 0;

  // explicit declaration
  let count1: number = 0;

  return (
    <div>
      App
      <span>Count1: {count1}</span>
      <br />
      <button
        onClick={() => {
          count1 = count1 + 1;
          console.log(count1);
        }}
      >
        Add
      </button>
      <button onClick={() => alert("Counter1: " + count1)}>Show</button>
    </div>
  );
}
