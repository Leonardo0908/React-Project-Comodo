import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./DoorsWindows.css";

function DoorsWindows({ value1, value2 }: any | number ) {

    const por = 1.52; // valor fixo área da porta
    const jan = 2.4; // valor fixo área da janela 

    const [doors, setDoors] = useState(0);  // Portas;
    const [windows, setWindows] = useState(0);   // Janelas

    // Menos Porta
    function LessDoor() {
        if ( doors > 0 ) {
            setDoors(doors - 1);
            value1((doors - 1) * por )
        }
    }

    // Mais Porta
    function MoreDoor() {
        if ( doors < 10 ) {
            setDoors(doors + 1);
            value1((doors + 1) * por )
        }
    }

    // Menos Janela
    function LessWindow() {
        if( windows > 0 ) {
            setWindows(windows - 1)    
            value2((windows - 1) * jan )    
        }    
    }

    // Mais Janela 
    function MoreWindow() {
        if( windows < 10 ) {
            setWindows(windows + 1)
            value2((windows + 1) * jan )
        }  
    }

    return (
        <>
            <Grid container direction="row" className="part1" >

                <h4>Porta</h4>

                <Button onClick={LessDoor} className="but" >
                    <RemoveIcon />
                </Button>
                <h1>{doors}</h1>
                <Button onClick={MoreDoor} className="but" >
                    <AddIcon />
                </Button>

                <h4>Janela</h4>

                <Button onClick={LessWindow} className="but" >
                    <RemoveIcon />
                </Button>
                    <h1>{windows}</h1>
                <Button onClick={MoreWindow} className="but" >
                    <AddIcon />
                </Button>

            </Grid>
        </>
    );
}

export default DoorsWindows;