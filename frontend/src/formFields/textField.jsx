import React from "react";

const TextField = (props) => {
  return (
    <div className={`form-group mb-4 ${props.className}`}>
      <label htmlFor={props.id}>
        <b>
          {props.lable} <span className="text-danger">{`${props.span}`}</span>
        </b>
      </label>
      <div className="input-div">
        <input
          type={props.type}
          className="form-control"
          id={`${props.id}`}
          placeholder={`${props.placeholder}`}
          defaultValue={props.value}
          onChange={props.onChange}
        />
        <small className="text-danger"></small>
      </div>
    </div>
  );
};

export default TextField;
