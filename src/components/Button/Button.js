import React from "react";
import "./Button.scss";

function Button(props) {
  if (props.type === "link") {
    return (
      <a href={props.href} className="jb-button jb-button-link">
        {props.value}
      </a>
    );
  }
  return (
    <input
      className="jb-button"
      type={props.type || "button"}
      value={props.value}
      disabled={props.disabled || false}
    />
  );
}

export default Button;
