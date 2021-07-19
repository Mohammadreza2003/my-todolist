import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

function Singup() {
  const [getEmail, setGetEmail] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [getName, setGetName] = useState("");
  const [getLastName, setGetLastNmae] = useState("");
  const onchangeEmail = (e) => {
    setGetEmail(e.target.value);
  };
  const onchangePassword = (e) => {
    setGetPassword(e.target.value);
  };
  const onchangeName = (e) => {
    setGetName(e.target.value);
  };
  const onchangeLastName = (e) => {
    setGetLastNmae(e.target.value);
  };
  const history = useHistory();
  const handleClick = () => {
    if (
      getName === "" ||
      getLastName === "" ||
      getEmail === "" ||
      getPassword === ""
    ) {
      alert("It must be filled");
      return;
    }
    const user = {
      name: getName,
      lastName: getLastName,
      email: getEmail,
      password: getPassword,
    };
    console.log(user);
    history.push("/Home");
  };

  return (
    <div class="container">
      <form>
        <h2>Welcome</h2>
        <br></br>
        <input type="name" placeholder="Name" onChange={onchangeName} />
        <br></br>
        <input
          type="lastName"
          placeholder="Lastname"
          onChange={onchangeLastName}
        />
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
          Signup
        </button>
      </form>
      <div className={"drops"}>
        <div className={"drop drop-1"}></div>
        <div className={"drop drop-2"}></div>
      </div>
    </div>
  );
}

export default Singup;
