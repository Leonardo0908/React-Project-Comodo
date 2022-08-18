import React from "react";
import { Grid, TextField, Box } from "@material-ui/core";
import "./Walls.css";

function Walls1() {
    return(
        <>
            <Grid>
                        <Box>
                            <h2>1º Parede</h2>
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

                        </Box>
                    </Grid>
                   
        </>
    );
}

export default Walls1;