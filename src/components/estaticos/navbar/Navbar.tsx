import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className='Nav1' >
        <Toolbar variant="dense">

          <Link to="/home" className="cursor">
            <Box mx={1} >
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>
          <Link to="/application" className="cursor">
            <Box mx={1} >
              <Typography variant="h6" color="inherit">
                Application
              </Typography>
            </Box>
          </Link>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;