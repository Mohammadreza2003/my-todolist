import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [getEmail, setGetEmail] = useState("");
  const [getPassword, setGetPassword] = useState("");
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
    <div class="container">
      <form>
        <h2>Welcome</h2>
        <br></br>
        <input type="email" placeholder="Email" onChange={onchangeEmail} />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={onchangePassword}
        />
        <br></br>
        <button className={"button"} onClick={handleClick}>
          Login
        </button>
        <br></br>
        <br></br>
        <p className={"p"}>
          Nem user ?
          <Link className={"Link"} to="/Signup">
            {" "}
            Signup
          </Link>
        </p>
      </form>
      <div className={"drops"}>
        <div className={"drop drop-1"}></div>
        <div className={"drop drop-2"}></div>
      </div>
    </div>
  );
}
export default Login;
