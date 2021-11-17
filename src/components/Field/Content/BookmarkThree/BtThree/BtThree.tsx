import * as React from "react";
import "./BtThree.less";
import SimpleImageSlider from "react-simple-image-slider";
import { BrowserRouter as Router, Link } from "react-router-dom";

const images = [
  { url: "./src/images/flag/RS4-1.jpg" },
  { url: "./src/images/flag/RS4-2.jpg" },
  { url: "./src/images/flag/RS4-3.jpg" },
  { url: "./src/images/flag/RS4-4.jpg" },
];
const images2 = [{ url: "./src/images/flag/RS5-1.jpg" }];

export const BtThree = () => {
  return (
    <div className="Tiskarny">
      <div className="Tiskarny__text">
        <p className="Tiskarny__text--header">3D tisk vícepatrových budov</p>
        <p className="Tiskarny__text--ledge">S-300</p>
        <p id="one">Tiskové rozměry: 11,5 х 11 х 6 m</p>
        <p id="two">
          Stavební 3D tiskárny 3D S-300 umožňují tisk 1 - 2 podlažních budov
          vysokých až 6,0 m.
        </p>
        <p id="three">
          Model АМТ S-300 je velkoformátová portálová 3D tiskárna. Výhodou této
          3D tiskárny je vysoká produktivita práce (až 2,5 m3 zpracované
          stavební směsi za hodinu), velká pracovní plocha, jednoduchá údržba a
          ovládání. 3D tiskárna S-300 pro je určena pro tisk stavebních objektů
          o rozloze až 120 m2, přímo na vybudovaném základu. Tiskárna S-300 je v
          základní sestavě je vybavena elektrozdvihy s výškou 6 metrů, což
          umožňuje výstavbu 2patrových budov, a je vybavena tiskovou hlavou s
          přímým tokem stavební směsi pro rychlý tisk. Součástí základní sestavy
          je i zařízení pro výrobu a dopravu betonu, speciálně navržené pro tuto
          tiskárnu. Výkon zařízení a rychlost čerpání stavební směsi je
          koordinována s výkonem tiskové hlavy. Záruka na zařízení je 12 měsíců.
        </p>
        <p id="three">
          Základní sestava 3D tiskárny S-300 je připravena pro okamžité nasazení
          a obsahuje vysokotlaký čistič, a mísící zařízení s čerpadlem
          stavebních směsí. Sestava obsahuje řídicí počítač s předinstalovaným
          licencovaným softwarem. Všechny 3D tiskárny procházejí důslednou
          výrobní kontrolou a testováním ve výrobním závodě. Specialisté výrobce
          poskytují školení zaměřené na navrhování 3D stavebních prvků a
          objektů, přípravu stavebních směsí a ovládání tiskárny{" "}
        </p>
        <p id="three">
          Stavební tiskárna S-300 pracuje s transportním betonem i betonem ze
          suchých směsí, s cementem řady CEM 42,5 a 52,5, s velikostí kameniva
          až do 6 mm.{" "}
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
        <br />
        <br />
        <p className="Tiskarny__text--ledge">S-500</p>
        <p id="one">Tiskové rozměry: 11,5 х 11 х 15 m</p>
        <p id="two">
          Stavební 3D tiskárny 3D S-500 umožňují tisk budov až do výšky 80 m.
        </p>
        <p id="three">
          Model АМТ S-500 je velkoformátová portálová 3D tiskárna. Tato 3D
          tiskárna je určena pro tisk stavebních objektů o rozloze až 120 m2, na
          přání zákazníka lze pracovní plochu tiskárny zvětšit na 11 x 31 metrů,
          tj. až 340 m2. Tiskárna S-500 je v základní sestavě je vybavena
          elektrozdvihy s výškou 16 metrů, což umožňuje výstavbu 5-ti patrových
          budov. Výšku pracovní plochy tiskárny lze zvýšit až na 80 metrů (!).
          Elektrozdvihy se v takovém případě připevňují k fasádě v intervalech
          až 7 metrů a jsou instalovány na základně sestávající z podpěr
          opatřených šrouby, aby byla zachována stabilita celé konstrukce. je
          vybavena tiskovou hlavou s přímým tokem stavební směsi pro rychlý
          tisk. Součástí základní sestavy je i zařízení pro výrobu a dopravu
          betonu, speciálně navržené pro tuto tiskárnu. Výkon zařízení a
          rychlost čerpání stavební směsi je koordinována s výkonem tiskové
          hlavy. Záruka na zařízení je 12 měsíců.
        </p>
        <p id="three">
          Základní sestava 3D tiskárny S-500 je připravena pro okamžité nasazení
          a obsahuje vysokotlaký čistič, a mísící zařízení s čerpadlem
          stavebních směsí. Sestava obsahuje řídicí počítač s předinstalovaným
          licencovaným softwarem. Všechny 3D tiskárny procházejí důslednou
          výrobní kontrolou a testováním ve výrobním závodě. Specialisté výrobce
          poskytují školení zaměřené na navrhování 3D stavebních prvků a
          objektů, přípravu stavebních směsí a ovládání tiskárny.
        </p>
        <p id="three">
          Stavební tiskárna S-500 pracuje s transportním betonem i betonem ze
          suchých směsí, s cementem řady CEM 42,5 a 52,5, s velikostí kameniva
          až do 6 mm.
        </p>
        <div>
          <SimpleImageSlider
            width={"70%"}
            height={"100vh"}
            images={images2}
            showBullets={false}
            showNavs={true}
          />
        </div>
        <br />
        <p>
          <Link to="/3Dtiskarny">Stavební 3D tiskárny AMT</Link>
        </p>
      </div>
    </div>
  );
};
