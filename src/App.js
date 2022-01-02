import React, { useState } from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Settings from "./Settings";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
export const themeContext = React.createContext()
function App() {
  const [theme, setTheme] = useState("");
  return (
    <>
      <themeContext.Provider value={{ darkMode: theme, setdarkMode: setTheme }}>
        <BrowserRouter>
          <Switch>
            <Route path={"/Signup"} component={Signup} />
            <Route path={"/login"} component={Login} />
            <PrivateRoute path={"/Settings"}>
              <Settings />
            </PrivateRoute>
            <PrivateRoute path={"/"}>
              <Home />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </themeContext.Provider>
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
