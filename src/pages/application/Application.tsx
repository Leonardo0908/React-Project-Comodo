import React, { useEffect, useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import Walls1 from "../../components/walls/Wall1";
import Walls2 from "../../components/walls/Wall2";
import Walls3 from "../../components/walls/Wall3";
import Walls4 from "../../components/walls/Wall4";
import lata from "../../assets/img/lata.jpg";
import "./Application.css";

function Application() {

    const [wallArea1, setWallArea1] = useState(0); // Área Parede
    const [wallArea2, setWallArea2] = useState(0);
    const [wallArea3, setWallArea3] = useState(0);
    const [wallArea4, setWallArea4] = useState(0);

    const [tinGG, setTinGG] = useState(0); // Latas de tintas 18 L
    const [tinG, setTinG] = useState(0);  // 3,6 L
    const [tinM, setTinM] = useState(0);  // 2,5 L
    const [tinP, setTinP] = useState(0);  // 0,5 L

    const [final, setFinal] = useState(0);

    const Calculate = () => {
        setFinal(wallArea1 + wallArea2 + wallArea3 + wallArea4);
    }

    useEffect(() => {
        if (final !== 0) {
            setTinGG(final / 90)
            setTinG((final % 90) / 18)
            setTinM(((final % 90) % 18) / 12.5)
            setTinP((((final % 90) % 18) % 12.5) / 2.5)
        }
    }, [final])

    return (
        <>
            <Grid container direction="row" xs={12} className="grid1" >

                <Grid item xs={4} className='grid2' >
                    <Box >
                        <Walls1 value={setWallArea1} Calcular={Calculate} />
                    </Box>
                </Grid>
                <Grid item xs={4} className='grid2' >
                    <Box>
                        <Walls2 value={setWallArea2} Calcular={Calculate} />
                    </Box>
                </Grid>
                <Grid item xs={4} className='grid3' >
                    <Box>
                        <h1>1º Resultado</h1>
                        <h2> Área Parede 1 = {wallArea1.toFixed(2)}</h2>

                        <h2> Área Parede 2 = {wallArea2.toFixed(2)}</h2>

                        <h2> Área Parede 3 = {wallArea3.toFixed(2)}</h2>

                        <h2> Área Parede 4 = {wallArea4.toFixed(2)}</h2>

                        <Button onClick={Calculate} className="button" >
                            Calcular
                        </Button>

                        <h2> Final = {final.toFixed(2)}</h2>
                    </Box>
                </Grid>

                <Grid item xs={4} className='grid2' >
                    <Box >
                        <Walls3 value={setWallArea3} Calcular={Calculate} />
                    </Box>
                </Grid>
                <Grid item xs={4} className='grid2' >
                    <Box>
                        <Walls4 value={setWallArea4} Calcular={Calculate} />
                    </Box>
                </Grid>
                <Grid item xs={4} className='grid3' >
                    <Box>
                        <h1>3º Resultado</h1>

                        <h2> <img src={lata} alt="Lata" width="70px"  /> Lata 18L = {tinGG.toFixed(0)}</h2>
                        <h2> <img src={lata} alt="Lata" width="70px"  /> Lata 3,6L = {tinG.toFixed(0)}</h2>
                        <h2> <img src={lata} alt="Lata" width="70px"  />  Lata 2,5L = {tinM.toFixed(0)}</h2>
                        <h2> <img src={lata} alt="Lata" width="70px"  />  Lata 0,5L = {tinP.toFixed(0)}</h2>

                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default Application;