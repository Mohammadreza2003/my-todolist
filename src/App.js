import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/Signup"} component={Signup} />
          <Route path={"/login"} component={Login} />
          <PrivateRoute path={"/"}>
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}
const isLogin = () => !!localStorage.getItem("auth-token");
const PrivateRoute = ({ children, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) => {
        if (!isLogin()) {
          return <Redirect to={{ pathname: "/login" }} />;
        } else {
          return children;
        }
      }}
    />
  );
};

export default App;
