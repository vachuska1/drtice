import * as React from "react";
import { Content } from "./Content/Content";
import "./Field.less";
import { Header } from "./Header/Header";
import { Ledge } from "./Ledge/Ledge";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { BookmarkOne } from "./Content/BookmarkOne/BookmarkOne";
import { BookmarkTwo } from "./Content/BookmarkTwo/BookmarkTwo";
import { BookmarkThree } from "./Content/BookmarkThree/BookmarkThree";
import { BtOne } from "./Content/BookmarkThree/BtOne/BtOne";
import { BtThree } from "./Content/BookmarkThree/BtThree/BtThree";
import { BtTwo } from "./Content/BookmarkThree/BtTwo/BtTwo";

export const Field = () => {
  return (
    <>
      <BrowserRouter>
        <div className="field">
          <Header />
          <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/Drtice" component={BookmarkOne} />
            <Route path="/Granulatory" component={BookmarkTwo} />
            <Route path="/3Dtiskarny" component={BookmarkThree} />
            <Route path="/Hala" component={BtOne} />
            <Route path="/Jednopatrove" component={BtTwo} />
            <Route path="/Vicepatrove" component={BtThree} />
          </Switch>
          <Ledge />
        </div>
      </BrowserRouter>
    </>
  );
};
