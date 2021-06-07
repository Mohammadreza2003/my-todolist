import React from "react";
import "./app.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} component={Login} />
          <Route exact path={"/"} component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
