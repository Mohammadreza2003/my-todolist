import React, { useContext, useState } from 'react';
import "./Settings.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { themeContext } from "./App";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
function Settings() {
  const theme = useContext(themeContext)
  const [currentDarkMode, setCurrentDarkMode] = useState(theme.darkMode);
  const handleChange = (event) => {
    setCurrentDarkMode(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }} className={(" contean") + (theme.darkMode === "dark" ? " contean-darkmode" : " ")}>
      <div className={("back-to-home ") + (theme.darkMode === "dark" ? "  borderDarkMode" : " ")}>
        <Link className={"Lik"} to="/">
          <FontAwesomeIcon icon={faChevronLeft} className={"back"} />
          <p className={("Home ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>Home</p>
        </Link>
        <h1 className={("h1 ") + (theme.darkMode === "dark" ? " h1-DarkMode" : " ")}>Setting</h1>
        <Link className={"logout"} to="/login">
          <p className={("text-logout ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>Log out</p>
        </Link>
      </div>
      <br />
      <div className={"backgroundForm"}>
        <p className={("Theme ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>Theme:</p>
        <FormControl className={"form"}>
          <InputLabel id="demo-simple-select-label">Light</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentDarkMode}
            label="Light"
            onChange={handleChange}
          >
            <MenuItem value={"light"}><spam className={theme.darkMode === "dark" ? " textDark" : " "}>Light</spam></MenuItem>
            <br />
            <MenuItem value={"dark"}><spam className={theme.darkMode === "dark" ? " textDark" : " "}>Dark</spam></MenuItem>
          </Select>
        </FormControl>
        {currentDarkMode !== theme.darkMode && (
          <button className={"but"} onClick={() => { theme.setdarkMode(currentDarkMode) }}>Save</button>
        )}
      </div>
    </Box>
  );
}
export default Settings;