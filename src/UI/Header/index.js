import React from "react";
import { Fragment } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, Grid, AppBar, InputBase } from "@material-ui/core";
import { Button, Box } from "@material-ui/core";
import Midbar from "./Midbar";
const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      background: "linear-gradient(to bottom, #00af70, #37c13d)",
    },
    headerButton: {
      backgroundColor: "rgba(0,0,0,.12)",
      boxShadow: "0px 0px",
      height: 32,
      margin: 10,
    },
    search: {
      margin: 10,
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "rgba(0,0,0,.15)",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,.25)",
      },
      maxWidth: 200,
      maxHeight: 32,
      [theme.breakpoints.only("xs")]: {
        display: "none",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      maxWidth: 200,
    },
  };
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Grid container>
        <Grid container item xs={4}>
          <Button
            className={classes.headerButton}
            color="inherit"
            variant="contained"
          >
            Login/Resgister
          </Button>
        </Grid>
        <Grid container item xs={4} justifyContent="center">
          <Button
            className={classes.headerButton}
            color="inherit"
            variant="contained"
          >
            CEB
          </Button>
        </Grid>

        <Grid container item xs={4}>
          <Button
            className={classes.headerButton}
            color="inherit"
            variant="contained"
          >
            test
          </Button>

          <Button
            className={classes.headerButton}
            color="inherit"
            variant="contained"
          >
            ตะกร้า
          </Button>

          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
