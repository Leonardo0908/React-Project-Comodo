import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import Walls1 from "../../components/walls/Wall1";
import Walls2 from "../../components/walls/Wall2";
import Walls3 from "../../components/walls/Wall3";
import Walls4 from "../../components/walls/Wall4";
import "./Application.css";

function Application() {

    const [valor1, setValor1] = useState(0);
    

    return(
        <>
           <Grid container direction="row" xs={12}   >

                <Grid item xs={4} >
                    <Box >
                        <Walls1 valor={setValor1} />
                        <Walls2 />
                        <h1> {valor1} </h1>
                    </Box>
                </Grid>
                <Grid item xs={2} >
                    <Box >
                        
                    </Box>
                </Grid>

                <Grid item xs={4} >
                    <Box >
                        <Walls3 />
                        <Walls4 />
                    </Box>
                </Grid>
                
                
                
            </Grid>
        </>
    );
}

export default Application;