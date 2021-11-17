import * as React from "react";
import "./MenuItem.less";
import { BrowserRouter as Router, Link } from "react-router-dom";

// export interface MenuItem {
//   name: string;
//   url: string;
// }

interface MenuItemProps {
  headname: string;
  // links: Array<MenuItem>;
  name1: string;
  name2: string;
  name3: string;
  name4?: string;
  headlink: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  headname,
  name1,
  name2,
  name3,
  headlink,
  link1,
  link2,
  link3,
}) => {
  return (
    <>
      {/* <div>{headname}</div>
      <div className="Menu__Menu1--content">
        {links.map((link) => {
          return <Link to={link.url}>{link.name}</Link>;
        })}
      </div> */}
      <Link to={headlink}>
        <div className="Menu__Menu1">
          {headname}
          <div className="Menu__Menu1--content">
            <Link to={link1}>
              {" "}
              <div className="item1">{name1}</div>{" "}
            </Link>
            <Link to={link2}>
              <div className="item2">{name2}</div>{" "}
            </Link>
            <Link to={link3}>
              <div className="item3">{name3}</div>{" "}
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};
