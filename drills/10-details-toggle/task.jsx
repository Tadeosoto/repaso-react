import { useState } from "react";

export const DetailsToggle = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && <p>Details</p>}
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
    </>
  );
};
