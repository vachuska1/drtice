import * as React from "react";
import "./BookmarkThree.less";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./src/images/flag/RS2.jpg" },
  { url: "./src/images/flag/RS1.jpg" },
  { url: "./src/images/flag/RS3.jpg" },
  { url: "./src/images/flag/RS4.jpg" },
  { url: "./src/images/flag/RS5.jpg" },
];

export const BookmarkThree = () => {
  return (
    <div className="Tiskarny">
      <div className="Tiskarny__text">
        <p className="Tiskarny__text--header">
          Společnost HORTEN je distributorem stavebních tiskáren AMT
        </p>
        <p>
          Stavební 3D tiskárny jsou počítačem řízená zařízení pro vrstvené
          ukládání betonu nebo směsí na bázi betonu a jiných stavebních
          materiálů a směsí. Výsledkem 3D tisku stavebních směsí jsou stavební
          objekty jako například domy nebo jejich části (stěnové a stropní
          prvky) a různé architektonické prvky ve skutečné velikosti. Tiskárna
          netiskne celý objem stěn jako najednou, ale jen vnější a vnitřní stěny
          – bednění o tloušťce 3 až 8 cm s možnými výztuhami. Prázdný prostor
          mezi stěnami se vylívá výplňovým materiálem podle účelu použití
          stavební konstrukce.
        </p>
        <p className="Tiskarny__text--ledge">
          Tiskneme s betonem, geopolymerem, sádrou, hlínou a s pomocí dalších
          speciálních směs
        </p>
        <div>
          <SimpleImageSlider
            width={"70%"}
            height={"100vh"}
            images={images}
            showBullets={false}
            showNavs={true}
          />
        </div>
        <p>
          <Link to="/Hala">Tiskárny pro halovou výrobu</Link>
        </p>
        <p>
          <Link to="/Jednopatrove">Tiskárny pro tisk jednopatrových budov</Link>
        </p>
        <p>
          <Link to="/Vicepatrove">Tiskárny vícepatrových budov</Link>
        </p>
      </div>
    </div>
  );
};
