import * as React from "react";
import "./BtOne.less";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./src/images/flag/RS1-1.jpg" },
  { url: "./src/images/flag/RS1-2.jpg" },
  { url: "./src/images/flag/RS1-3.jpg" },
];

const images2 = [
  { url: "./src/images/flag/RS2-1.jpg" },
  { url: "./src/images/flag/RS2-2.jpg" },
  { url: "./src/images/flag/RS2-3.jpg" },
];

const images3 = [
  { url: "./src/images/flag/RS3-1.jpg" },
  { url: "./src/images/flag/RS3-2.png" },
];

export const BtOne = () => {
  return (
    <div className="Tiskarny">
      <div className="Tiskarny__text">
        <p className="Tiskarny__text--header">
          3D tiskárny pro tisk jednopatrových budov
        </p>
        <p className="Tiskarny__text--ledge">S-6044</p>
        <p id="one">Tiskové rozměry: 3,5 х 3,1 х 1 m</p>
        <p id="two">
          Nejekonomičtější model stavební 3D tiskárny, který vám umožňuje
          organizovat výrobu celé řady malých architektonických prvků (venkovní
          nábytek, ploty, betonové výrobky, architektonické prvky, výrobky pro
          terénní úpravy atd). Jedná se o podnikateli a malými podniky velmi
          žádaný model a příležitost, jak s malými náklady vstoupit na trh a
          zavést si vlastní stavební výrobu 3D výrobků.
        </p>
        <p id="three">
          Stavební tiskárna АМТ S-6044 je nejkompaktnější z modelové řady 3D
          tiskáren. Patří do kategorie profesionálního vybavení. Všechny
          komponenty 3D tiskárny jsou vysoce kvalitní a zařízení je určeno pro
          vysoké zatížení. Stavební 3D tiskárna S-6044 je konstrukčně
          jednoduché, ale extrémně spolehlivé zařízení. Záruční doba je 12
          měsíců.
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
        <p className="Tiskarny__text--ledge">S-6044 LONG</p>
        <p id="one">Tiskové rozměry: 7,5 х7,1 х 1,05 m</p>
        <p id="two">
          Nejekonomičtější model stavební 3D tiskárny s tiskovou plochou 53 m2,
          který vám umožňuje organizovat výrobu celé řady malých
          architektonických prvků (venkovní nábytek, ploty, betonové výrobky,
          architektonické prvky, výrobky pro terénní úpravy atd). Jedná se o
          podnikateli a malými podniky velmi žádaný model a příležitost, jak s
          malými náklady vstoupit na trh a zavést si vlastní stavební výrobu 3D
          výrobků.
        </p>
        <p id="three">
          Stavební tiskárna АМТ S-6044 je nejkompaktnější z modelové řady 3D
          tiskáren. Patří do kategorie profesionálního vybavení. Všechny
          komponenty 3D tiskárny jsou vysoce kvalitní a zařízení je určeno pro
          vysoké zatížení. Stavební 3D tiskárna S-6044 je konstrukčně
          jednoduché, ale extrémně spolehlivé zařízení. Záruční doba je 12
          měsíců.
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
        <br />
        <p className="Tiskarny__text--ledge">S-6045M</p>
        <p id="one">Tiskové rozměry: 3,5 х 3,1 х 1 m</p>
        <p id="two">
          Model S-6045 M má reprezentativní výstavní vzhled a zvýšenou rychlost
          tisku. Doporučeno pro vzdělávací a výzkumné instituce, stavební
          laboratoře, stavební společnosti jako předváděcí zařízení pro
          demonstraci stavebního 3D tisku zákazníků. Dodává se se třemi různými
          tryskami tiskové hlavy.
        </p>
        <p id="three">
          Stavební 3D tiskárna АМТ S-6045 М je maloformátová portálová 3D
          tiskárna s vylepšeným designem. Od ostatních maloformátových modelů se
          liší rozložením pojezdu a vozíku, což umožnilo zvýšit rychlost tisku
          stavebních prvků se stabilní kvalitou.
        </p>
        <div>
          <SimpleImageSlider
            width={"70%"}
            height={"100vh"}
            images={images3}
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
