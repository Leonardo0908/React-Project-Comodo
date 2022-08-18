import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import "./DoorsWindows.css";

function DoorsWindows() {

    const [doors, setDoors] = useState(0);  // Portas;
    const [windows, setWindows] = useState(0);   // Janelas

    // Menos Porta
    function LessDoor() {
        setDoors(doors - 1);
    }

    // Mais Porta
    function MoreDoor() {
        setDoors(doors + 1);
    }

    // Menos Janela
    function LessWindow() {
            setWindows(windows - 1)
    }

    // Mais Janela 
    function MoreWindow() {
            setWindows(windows + 1) 
    }

    return (
        <>
            <Grid container direction="row" >

                <h4>Doors</h4>

                <Button onClick={LessDoor} >
                    <h3>-</h3>
                </Button>
                <h1>{doors}</h1>
                <Button onClick={MoreDoor} >
                    <h3>+</h3>
                </Button>

                <h4>Windows</h4>

                <Button onClick={LessWindow} >
                    <h3>-</h3>
                </Button>
                    <h1>{windows}</h1>
                <Button onClick={MoreWindow} >
                    <h3>+</h3>
                </Button>

            </Grid>




        </>
    );
}

export default DoorsWindows;