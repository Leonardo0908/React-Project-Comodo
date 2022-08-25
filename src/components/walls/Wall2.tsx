import React, { useState } from "react";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import "./Wall.css";
import DoorsWindows from "../doorsWindows/DoorsWindows";

function Walls2({value, calculate }: any | number) {

    const [value1, setValue1] = useState(0); // Valor área de Portas
    const [value2, setValue2] = useState(0); // Valor área de Janelas

    const [width, setWidth] = useState("");  // Largura
    const [height, setHeight] = useState(""); // Altura

    let [wallArea2, setWallArea2] = useState(0);

    calculate = () => {

        wallArea2 = (parseFloat(width.replace(",",".")) *  parseFloat(height.replace(",",".")));
        wallArea2 -= ( value1 + value2 )
        
        
        if( wallArea2 > 50){
            alert("Parede 1 \n\n Não poder ter mais que 50 Metro quadrado !!!")
            wallArea2 = 0; 
            
        }else if( wallArea2 < 1 ){
            alert("Parede 1 \n\n Não poder ter menos que 1 Metro quadrado !!!")
            wallArea2 = 0; 
        }
            
        value(wallArea2)
    }

    return(
        <>
            <Grid>
                        <Box>
                            <h2>2º Parede</h2>
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

export default Walls2;