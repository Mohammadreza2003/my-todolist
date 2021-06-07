import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [getEmail, setGetEmail] = useState();
  const [getPassword, setGetPassword] = useState();
  const onchangeEmail = (e) => {
    setGetEmail(e.target.value);
  };
  const onchangePassword = (e) => {
    setGetPassword(e.target.value);
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
        <button
          className={"button"}
          onClick={() => {
            if (getEmail === "test@gmail.com" && getPassword === "test123456") {
            }
          }}
        >
          Login
        </button>
      </form>
      <div className={"drops"}>
        <div className={"drop drop-1"}></div>
        <div className={"drop drop-2"}></div>
      </div>
    </div>
  );
}

export default Login;
