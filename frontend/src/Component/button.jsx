import React from "react";

export default function Button({
  title,
  color,
  href = "#",
  variant = "primary",
}) {
  let style;
  if (variant === "primary") {
    style = {
      backgroundColor: "blue",
      color: color,
      padding: "5px",
    };
  } else if (variant === "secondary") {
    style = {
      backgroundColor: "red",
      color: color,
      padding: "10px",
      outline: "none",
    };
  } else if (variant === "outline") {
    style = {
      backgroundColor: "transparent",
      color: color,
      padding: "5px",

      outline: "3px solid black",
      outlineOffset: "5px",
    };
  }

  return (
    <>
      <button href={href} style={style}>
        {title}
      </button>
    </>
  );
}
