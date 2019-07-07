import React from "react";

export default function BackgroundParallax(props) {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={props.imgBackground} alt="Wiz Khalifa photo" />
      </div>
    </div>
  );
}
