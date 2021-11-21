import React from 'react';
import "./Settings.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'
function Settings() {
  const [theme, setTheme] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setTheme(event.target.value);
  };

  return (

    <Box sx={{ minWidth: 120 }}>
      <h1 className={"h1"}>Setting</h1>
      <Link className={"Lik"} to="/">
        {" "}
        <ChevronLeftIcon className={"back"}/>
      </Link>
      <p className={"Home"}>Home</p>
      <br/>
      <div className={"backgroundForm"}>
      <p className={"Theme"}>Theme:</p> 
        <FormControl className={"form"}>
          <InputLabel id="demo-simple-select-label">light</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={theme}
            label="Dark or light"
            onChange={handleChange}
          >
            <MenuItem value={"dark"}>Light</MenuItem>
            <br/>
            <MenuItem value={"light"}>Dark</MenuItem>
          </Select>
        </FormControl>
        <button className={"but"} onClick={() => { }}>Save</button>
      </div>


    </Box>

  );
}
export default Settings;