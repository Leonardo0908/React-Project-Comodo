import React from "react";
import { Grid, Box } from "@material-ui/core";
import "./Home.css";

function Home() {
    return(
        <>
           <Grid container xs={12} direction="column" className="fundoHome" >
                <Grid xs={12} className="box1" >
                    <Box>
                        <h1> Aplicação para calcular pintura de um cômodo </h1>
                    </Box>
                </Grid>
                <Grid xs={12} >
                    <Box>
                    <ul className="ul1" >
                    <li>Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes</li>
                    
                    <li>O total de área das portas e janelas deve ser no máximo 50% da área de parede</li>

                    <li> A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta</li>
                    
                    <li>Cada janela possui as medidas: 2,00 x 1,20 mtos</li>

                    <li>Cada porta possui as medidas: 0,80 x 1,90</li>

                    <li>Cada litro de tinta é capaz de pintar 5 metros quadrados</li>

                    <li> Não considerar teto nem piso.</li>

                    <ul>
                        <li> As variações de tamanho das latas de tinta são:</li>
                        <li> 0,5 L</li>
                        <li>2,5 L</li>
                        <li>3,6 L</li>
                        <li>18 L</li>
                    </ul>

                </ul>
                    </Box>
                    <Box className="p1" >
                        <ul>
                            <li>Cada Parede têm um botão, todas as vezes que for alterador algum valor sendo Largura, Altura, Porta ou Janela têm que usar o botão calcular da parede em questão.  </li>
                            <li>Sempre que ocorrer um erro um alerta sera emitido e sera adicionando 0 para área da Parede. </li>
                            <li>Depois de estar pronto o calculo das paredes é só clicar no botão calcular a direita e esta Pronto </li>
                            <li>Pode ser calcular a quantidade de parede que a pessoa desejar </li>
                        </ul>
                    </Box>
                    <Box className="box2" >
                        <h2> Agora só clicar em Application acima Para começar </h2>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;