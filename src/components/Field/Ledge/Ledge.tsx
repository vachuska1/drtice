import * as React from "react";
import "./Ledge.less";

export const Ledge = () => {
  return (
    <div className="Ledge">
      <div className="Ledge__left">
        <div className="Ledge__info">Info</div>
        <div className="Ledge__help Ledge__help--1">
          <div className="Ledge__icon Ledge__icon--1"></div>
          <div className="Ledge__name Ledge__name--1">Help Centre</div>
        </div>
        <div className="Ledge__help Ledge__help--2 ">
          <div className="Ledge__icon Ledge__icon--2"></div>
          <div className="Ledge__name Ledge__name--2">Contact</div>
        </div>
        <div className="Ledge__icons">
          <div className="Ledge__icons Ledge__icons--instagram"></div>
          <div className="Ledge__icons Ledge__icons--pinterest"></div>
          <div className="Ledge__icons Ledge__icons--youtube"></div>
          <div className="Ledge__icons Ledge__icons--facebook"></div>
        </div>
      </div>
      <div className="Ledge__right">
        <p className="Ledge__right--copyright">Copyright ©2021</p>
        <p className="Ledge__right--conditional">Všeobecné obchodní podmínky</p>
        <p className="Ledge__right--name">Horten a.s.</p>
        <p className="Ledge__right--corporation">Č. společnosti</p>
      </div>
    </div>
  );
};
