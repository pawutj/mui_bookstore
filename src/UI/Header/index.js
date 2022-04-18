import React from "react";
import { Fragment } from "react";
import { AppBar } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      background: "linear-gradient(to bottom, #00af70, #37c13d)",
    },
  };
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar variant="dense"></Toolbar>
    </AppBar>
  );
}
