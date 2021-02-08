import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import data from "../data/data.json";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5em",
  },
  model: {
    width: "10em",
    margin: "1em",
  },
  found: {
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

const SpareDetails = (props) => {
  const classes = useStyles();
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [idNumber, setIdNumber] = useState(null);

  const handleChange = (flag, e) => {
    const value = e.target.value;
    let currentModel = model;
    let currentYear = year;
    switch (flag) {
      case "model":
        setModel(value);
        currentModel = value;
        break;
      case "year":
        setYear(value);
        currentYear = value;
        break;
      default:
        return;
    }

    if (currentModel && currentYear) {
      setIdNumber(data[currentModel][currentYear]);
    }
  };

  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <FormControl className={classes.model}>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={model}
            onChange={(e) => handleChange("model", e)}
          >
            <MenuItem value={"alto800"}>Alto800</MenuItem>
            <MenuItem value={"ertiga"}>Ertiga</MenuItem>
            <MenuItem value={"k10"}>K10</MenuItem>
            <MenuItem value={"omni"}>Omni</MenuItem>
            <MenuItem value={"dezire"}>Dezire</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl className={classes.model}>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            onChange={(e) => handleChange("year", e)}
          >
            <MenuItem value={"2015"}>2015</MenuItem>
            <MenuItem value={"2016"}>2016</MenuItem>
            <MenuItem value={"2017"}>2017</MenuItem>
            <MenuItem value={"2018"}>2018</MenuItem>
            <MenuItem value={"2019"}>2019</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {idNumber && (
        <Grid item>
          <Typography variant="h4" className={classes.found}>
            Spare part found - "{idNumber}"
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SpareDetails;
