import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import "./Wall.css";
import DoorsWindows from "../doorsWindows/DoorsWindows";

function Walls3({ value, calculate }: any | number) {

    const [value1, setValue1] = useState(0); // Valor área de Portas
    const [value2, setValue2] = useState(0); // Valor área de Janelas

    const [width, setWidth] = useState("");  // Largura
    const [height, setHeight] = useState(""); // Altura

    let [wallArea3, setWallArea3] = useState(0);

    calculate = () => {

        wallArea3 = (parseFloat(width.replace(",", ".")) * parseFloat(height.replace(",", ".")));
        wallArea3 -= (value1 + value2)


        if (wallArea3 > 50) {
            alert("Parede 1 \n\n Não poder ter mais que 50 Metro quadrado !!!")
            wallArea3 = 0;

        } else if (wallArea3 < 1) {
            alert("Parede 1 \n\n Não poder ter menos que 1 Metro quadrado !!!")
            wallArea3 = 0;
        }

        value(wallArea3)
    }

    return (
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

                    <DoorsWindows value1={setValue1} value2={setValue2} />

                    <Button onClick={calculate} >
                        Calcular
                    </Button>

                </Box>

            </Grid>

        </>
    );
}

export default Walls3;