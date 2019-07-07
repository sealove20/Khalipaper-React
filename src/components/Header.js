import React from "react";
import instaImg from "../imgs/instagram.png";

export default function Header(props) {
  return (
    <nav>
      <div className="nav-wrapper red lighten-1">
        <a href="#" className="brand-logo">
          {props.name}
        </a>
        <a href="https://www.instagram.com/khalipaper/">
          <img
            src={instaImg}
            className="right hide-on-small-only"
            id="insta"
            alt="insagram icon"
          />
        </a>
      </div>
    </nav>
  );
}
