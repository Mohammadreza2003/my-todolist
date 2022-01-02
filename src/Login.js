import React, { useState,useContext } from "react";
import "./Darkmode.css";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { themeContext } from "./App";
function Login() {
  const [getEmail, setGetEmail] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const theme = useContext(themeContext)
  const onchangeEmail = (e) => {
    setGetEmail(e.target.value);
  };
  const onchangePassword = (e) => {
    setGetPassword(e.target.value);
  };
  const history = useHistory();
  const handleClick = () => {
    if (getEmail.length > 0 && getPassword.length > 0) {
      let num = Math.floor(Math.random() * 100000 + 1);
      var local = num.toString();
      localStorage.setItem("auth-token", local);
      history.push("/");
    }
  };

  return (
    <div className={("background-conteaner ") + (theme.darkMode === "dark" ? " background-darkmode" : " ")}>
      <form>
        <h2 className={(" h2") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>Welcome</h2>
        <br></br>
        <input type="email" placeholder="Email" onChange={onchangeEmail} />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={onchangePassword}
        />
        <br></br>
        <button className={("button ") + (theme.darkMode === "dark" ? " buttonDark" : " ")} onClick={handleClick}>
          Login
        </button>
        <br></br>
        <br></br>
        <p className={(" p") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>
          Nem user ?
          <Link className={(" Link") + (theme.darkMode === "dark" ? " linkDarkMode" : " ")} to="/Signup">
            {" "}
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
