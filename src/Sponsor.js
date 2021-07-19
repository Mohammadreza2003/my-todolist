import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sponser.css";

function Sponsor() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/")
      .then((response) => {
        const data = response.data.data;
        setSponsors(data);
        console.log(response.data.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <>
    <h2 className={"h2"}>Project sponsors</h2>
    <div className={"cont"}>
      {sponsors.map((sponsor) => (
        <div className={"sponsors"}>
          <img className={"img"} src={sponsor.avatar} />
          <br />
          {sponsor.first_name + " "}
          {sponsor.last_name}
          <br />
          {sponsor.email}
        </div>
      ))}
    </div>
    </>
  );
}

export default Sponsor;
