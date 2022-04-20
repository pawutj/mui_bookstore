import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles, Grid, AppBar, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    midbarxs: {
      display: "none",
      [theme.breakpoints.only("xs")]: {
        display: "flex",
      },
    },
    midbarmd: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
  };
});

export default function Midbar() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container item className={classes.midbarxs}>
        <Box>
          <Typography variant="h3">h1. Heading</Typography>
        </Box>
      </Grid>
      <Grid container item justifyContent="center" className={classes.midbarmd}>
        <Box>
          <Typography variant="h2">h1. Heading</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
