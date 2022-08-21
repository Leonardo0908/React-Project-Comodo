import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import "./Wall.css";
import DoorsWindows from "../doorsWindows/DoorsWindows";

function Walls1( {valor }: any | number) {

    const [value1, setValue1] = useState(0); // Valor área de Portas
    const [value2, setValue2] = useState(0); // Valor área de Janelas

    const [width, setWidth] = useState("");  // Largura
    const [height, setHeight] = useState(""); // Altura

    let [wallArea1, setWallArea1] = useState(0);

    function calcular() {

        setWallArea1(parseFloat(width.replace(",",".")) *  parseFloat(height.replace(",",".")))
        wallArea1 =- ( value1 + value2)
        valor(wallArea1)
        
    }

    return(
        <>
            <Grid>
                        <Box>
                            <h2>1º Parede</h2>
                            <TextField
                                value={width}
                                onChange={e => setWidth(e.target.value)}
                                id='larura'
                                label='largura'
                                variant='outlined'
                                margin='normal'
                                type="number"
                                style={{ backgroundColor: "#FFEFD5" }}
                                fullWidth />

                            <TextField
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                                id='altura'
                                label='altura'
                                variant='outlined'
                                margin='normal'
                                type="number"
                                style={{ backgroundColor: "#FFEFD5" }}
                                fullWidth />

                            <DoorsWindows value1={setValue1} value2={setValue2} />

                            <Button onClick={calcular} >
                                Calcular
                            </Button>

                        </Box>

                    </Grid>
                   
        </>
    );
}

export default Walls1;