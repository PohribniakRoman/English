import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddWords from "./components/Add-words";
import Home from "./components/Home";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/add-words">
          <AddWords />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
