import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import "./Wall.css";
import DoorsWindows from "../doorsWindows/DoorsWindows";

function Walls1( {value, calculate }: any | number) {

    const [value1, setValue1] = useState(0); // Valor área de Portas
    const [value2, setValue2] = useState(0); // Valor área de Janelas

    const [width, setWidth] = useState("");  // Largura
    const [height, setHeight] = useState(""); // Altura

    let [wallArea1, setWallArea1] = useState(0);

    calculate = () => {

        wallArea1 = (parseFloat(width.replace(",",".")) *  parseFloat(height.replace(",",".")));
        wallArea1 -= ( value1 + value2 )
        
        
        if( wallArea1 > 50){
            alert("Parede 1 \n\n Não poder ter mais que 50 Metro quadrado !!!")
            wallArea1 = 0; 
            
        }else if( wallArea1 < 1 ){
            alert("Parede 1 \n\n Não poder ter menos que 1 Metro quadrado !!!")
            wallArea1 = 0; 
        }
            
        value(wallArea1)
    }

    return(
        <>
            <Grid>
                        <Box>
                            <h2>1º Parede</h2>
                            <TextField
                                className="textFild"
                                value={width}
                                onChange={e => setWidth(e.target.value)}
                                autoComplete="off"
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
                                autoComplete="off"
                                id='altura'
                                label='altura'
                                variant='outlined'
                                margin='normal'
                                type="number"
                                style={{ backgroundColor: "#FFEFD5" }}
                                fullWidth />

                            <DoorsWindows value1={setValue1} value2={setValue2} />

                            <Button onClick={calculate} className="button" >
                                Calcular
                            </Button>

                        </Box>

                    </Grid>
                   
        </>
    );
}

export default Walls1;