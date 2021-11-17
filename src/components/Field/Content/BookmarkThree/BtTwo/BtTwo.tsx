import * as React from "react";
import "./BtTwo.less";
import SimpleImageSlider from "react-simple-image-slider";
import { BrowserRouter as Router, Link } from "react-router-dom";

const images = [
  { url: "./src/images/flag/RS2.jpg" },
  { url: "./src/images/flag/RS1.jpg" },
  { url: "./src/images/flag/RS3.jpg" },
  { url: "./src/images/flag/RS4.jpg" },
  { url: "./src/images/flag/RS5.jpg" },
];

export const BtTwo = () => {
  return (
    <div className="Tiskarny">
      <div className="Tiskarny__text">
        <p className="Tiskarny__text--header">3D tiskárny pro halovou výrobu</p>
        <p className="Tiskarny__text--ledge">S-6044 LONG 2</p>
        <p id="one">Tiskové rozměry: 7,5 х 7,1 х 2,7</p>
        <p id="two">
          Stavební 3D tiskárna středního formátu АМТ S-6044 LONG 2 vychází z 3D
          tiskárny S-6044 LONG, umožňuje tisk budov a staveb s plochou až do 53
          m2. Dílenská verze 3D tiskárny АМТ S-6044 LONG 2 je zároveň nejlepší
          volbou pro organizaci celoroční výroby 3D betonových výrobků.
        </p>
        <p id="three">
          3D stavební tiskárna středního formátu АМТ S-6044 LONG 2 se dodává ve
          dvou verzích (dílenské a exteriérové provedení). Tiskárna umožňuje
          tisk budov a staveb betonem na základě o rozloze až 53 m2.
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
        <p>
          <Link to="/3Dtiskarny">Stavební 3D tiskárny AMT</Link>
        </p>
      </div>
    </div>
  );
};
