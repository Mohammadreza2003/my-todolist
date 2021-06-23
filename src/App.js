import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/Home"} component={Home} />
          <Route path={"/Signup"} component={Signup} />
          <Route exact path={"/"} component={Login}></Route>
      
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
