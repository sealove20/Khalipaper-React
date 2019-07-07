import React from "react";

export default function Section(props) {
  return (
    <div className="section white center height">
      <div className="row container">{props.children}</div>
    </div>
  );
}
