import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((n) => n + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={addCount}>
        Add
      </button>
    </>
  );
};
