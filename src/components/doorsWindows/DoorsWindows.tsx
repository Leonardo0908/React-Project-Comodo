import React from "react";
import { Grid, Button } from '@mui/material';
import "./DoorsWindows.css";

function DoorsWindows() {
    return (
        <>
            <Grid container direction="row" >

                <h4>Doors</h4>

                <Button>
                    <h3>-</h3>
                </Button>

                <Button>
                    <h3>+</h3>
                </Button>
                
                <h4>Windows</h4>

                <Button>
                    <h3>-</h3>
                </Button>

                <Button>
                    <h3>+</h3>
                </Button>

            </Grid>
            

                
         
        </>
    );
}

export default DoorsWindows;