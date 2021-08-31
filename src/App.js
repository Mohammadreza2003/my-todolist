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
          <PublicRoute path={"/Home"} component={Home} />
          <Route path={"/Signup"} component={Signup} />
          <PrivateRoute exact path={"/"} component={Login}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}
const isLogin = () => !!localStorage.getItem("auth-token");
const PublicRoute = ({ component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return <Redirect to={"/Home"} />;
        else {
          return React.createElement(component, props);
        }
      }}
    />
  );
};
const PrivateRoute = ({ render, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return render(props);
        else return <Redirect to={"/"} />;
      }}
    />
  );
};

export default App;
