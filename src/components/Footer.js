import React from "react";

import SocialLink from "./SocialLink";

import instaImg from "../imgs/instagram.png";
import faceImg from "../imgs/facebook.png";
import twitterImg from "../imgs/twitter.png";
import githubImg from "../imgs/github.png";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Khalipaper</h5>
            <p className="grey-text text-lighten-4">
              Acesse nossas redes sociais e fique por dentro de sorteios e
              promoções
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <SocialLink socialImg={instaImg} socialName={"instagram"} />
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <SocialLink socialImg={faceImg} socialName={"facebook"} />
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <SocialLink socialImg={twitterImg} socialName={"twitter"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2019 Sealove
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/sealove20"
          >
            <SocialLink socialImg={githubImg} socialName={"github"} />
          </a>
        </div>
      </div>
    </footer>
  );
}
