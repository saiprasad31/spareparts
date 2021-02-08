import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10em",
  },
  submit: {
    marginTop: "1.5em",
  },
}));

const Location = (props) => {
  const classes = useStyles();
  const { location, locationError, handleSubmit, setLocation } = props;
  console.log(handleSubmit);
  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.root}
      >
        <TextField
          id="outlined-basic"
          label="Enter Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          error={locationError}
          helperText={locationError ? "Location not valid" : null}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.submit}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Location;
