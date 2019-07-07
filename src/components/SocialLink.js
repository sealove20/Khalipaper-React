import React from "react";

export default function SocialLink(props) {
  return (
    <img
      src={props.socialImg}
      className="foot-links"
      alt={`${props.socialName} icon`}
    />
  );
}
