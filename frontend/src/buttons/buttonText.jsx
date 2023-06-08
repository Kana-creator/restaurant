import React from "react";

const ButtonText = (props) => {
  return (
    <div className={`form-grop my-4 `}>
      <button
        type={props.type}
        className={props.className}
        style={props.style}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};

export default ButtonText;
