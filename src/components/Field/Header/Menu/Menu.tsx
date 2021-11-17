import * as React from "react";
import "./Menu.less";
import { MenuItem } from "./MenuItem/MenuItem";

export const Menu: React.FC = () => {
  // const [click, setClick] = useState(true);

  // const Doublechange = () => {
  // setClick(!click);
  // };

  return (
    <div className="Menu">
      <MenuItem
        // headname="o Spole4nosti"
        // links={[{ name: "neco", url: "/neco" }]}
        headname={"Drtiče"}
        name1={"Válcové drtiče"}
        name2={"Jednohřídelové drtiče"}
        name3={"Vícehřídelové drtiče"}
        name4={"Speciální drtiče"}
        headlink={"/Drtice"}
        link1={"válcovedrtice"}
        link2={"jednohridelovedrtice"}
        link3={"vicehridelovedrtice"}
        link4={"specialnidrtice"}
      />
      <MenuItem
        headname={"Granulátory"}
        name1={"Diskové granulátory"}
        name2={"Válcové granulátory"}
        name3={"Cyklické granulátory"}
        headlink={"/Granulatory"}
        link1={"diskovegranulatory"}
        link2={"valcovegranulatory"}
        link3={"cyklickegranulatory"}
      />
      <MenuItem
        headname={"Stavební 3D tiskárny AMT"}
        name1={"3D tiskárny pro halovou výrobu"}
        name2={"3D tiskárny pro tisk jednopatrových budov"}
        name3={"3D tiskárny vícepatrových budov"}
        headlink={"/3Dtiskarny"}
        link1={"/Hala"}
        link2={"/Jednopatrove"}
        link3={"/Vicepatrove"}
      />
    </div>
  );
};
