import React from "react";

const Button = ({ filter }) => {
  return (
    <div>
      <button type="button" onClick={() => filter("Chinese")}>
        Chinese
      </button>
    </div>
  );
};

export default Button;
