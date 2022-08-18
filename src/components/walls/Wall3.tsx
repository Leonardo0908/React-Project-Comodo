import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";
import "./Wall.css";
import DoorsWindows from "../doorsWindows/DoorsWindows";

function Walls3() {
    return(
        <>
            <Grid>
                        <Box>
                            <h2>3º Parede</h2>
                            <TextField
                                id='larura'
                                label='largura'
                                variant='outlined'
                                margin='normal'
                                type="number"
                                style={{ backgroundColor: "#FFEFD5" }}
                                fullWidth />

                            <TextField
                                id='altura'
                                label='altura'
                                variant='outlined'
                                margin='normal'
                                type="number"
                                style={{ backgroundColor: "#FFEFD5" }}
                                fullWidth />

                            <DoorsWindows />

                        </Box>

                    </Grid>
                   
        </>
    );
}

export default Walls3;