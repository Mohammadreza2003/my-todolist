import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Darkmode.css";
import "./Sponser.css";
import { themeContext } from "./App";
function Sponsor() {
  const [sponsors, setSponsors] = useState([]);
  const theme = useContext(themeContext)
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/")
      .then((response) => {
        const data = response.data.data;
        setSponsors(data);
      })
      .catch((error) => { });
  }, []);
  return (
    <>
      <h2 className={(" h2") + (theme.darkMode === "dark" ? " h2DarkModeSponser" : " ")}>Project sponsors</h2>
      <div className={"cont"}>
        {sponsors.map((sponsor) => (
          <div className={(" sponsors") + (theme.darkMode === "dark" ? " sponsorsDarkMode" : " ")}>
            <img className={"img"} src={sponsor.avatar} />
            <br />
            <div>{sponsor.first_name + " " + sponsor.last_name}</div>
            <br />
            <div>{sponsor.email}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sponsor;
