import * as React from "react";
import { Contact } from "./Contact/Contact";
import "./Header.less";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <Menu />
      <Contact />
    </div>
  );
};
