import React from "react";

import "./styles.css";

import backParallax1 from "./imgs/wiz1.jpg";
import backParallax2 from "./imgs/wiz2.jpg";
import backParallax3 from "./imgs/wiz3.jpg";
import produto1 from "./imgs/prod1.jpg";
import produto2 from "./imgs/prod2.jpg";
import produto3 from "./imgs/prod3.jpg";
import gif from "./imgs/NyoI.gif";

import Header from "./components/Header";
import BackgroundParallax from "./components/BackgroundParallax";
import Section from "./components/Section";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header name={"Khalipaper"} />
      <BackgroundParallax imgBackground={backParallax1} />
      <Section>
        <h2 id="missao-titulo" className="brown-text lighten-1 ">
          Nossa missão
        </h2>
        <p id="missao" className="flow-text">
          Em 2018 , o amor pelo desenho , pincéis e material de papelaria fez
          nascer a khalipaper, com o objetivo de compartilhar essa paixão com
          seus clientes para que ele possa colocar em prática todo o seu
          potencial. A Khalipaper é uma loja online que trabalha com produtos da
          melhor qualidade e valoriza o comprometimento e a responsabilidade.
        </p>
        <img src={gif} alt="pen gif" id="gif" className="hide-on-small-only" />
      </Section>
      <BackgroundParallax imgBackground={backParallax2} />
      <Section>
        <p id="nossos-produtos">Trabalhamos com produtos de melhor qualidade</p>
        <div className="row">
          <div className="col s12 m4 shad z-depth-1">
            <Card titleName={"Artes"} imgUrl={produto1} />
          </div>
          <div className="col s12 m4 shad z-depth-5">
            <Card titleName={"Papelaria"} imgUrl={produto2} />
          </div>
          <div className="col s12 m4 shad z-depth-1">
            <Card titleName={"Cultura"} imgUrl={produto3} />
          </div>
        </div>
      </Section>
      <BackgroundParallax imgBackground={backParallax3} />
      <Footer />
    </>
  );
}

export default App;
