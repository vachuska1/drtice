import * as React from "react";
import "../Header.less";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="Logo"></div>
    </Link>
  );
};
