import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className='Nav1' >
        <Toolbar variant="dense">

          <Box mx={1} >
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Box>

          <Box mx={1} >
            <Typography variant="h6" color="inherit">
              Application
            </Typography>
          </Box>


        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;