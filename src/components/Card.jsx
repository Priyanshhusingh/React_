import React from "react";

function Card({ children, background }) {
  return (
    <div className={`${background} p-6 rounded-lg shadow-md`}>{children}</div>
  );
}

export default Card;
