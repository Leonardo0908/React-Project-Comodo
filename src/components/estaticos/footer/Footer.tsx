import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid, Box } from '@material-ui/core';
import "./Footer.css";

function Footer() {
    return (
        <>
            <Grid container xs={12} className="fundo" >
                <Grid item xs={4}>
                    <Box>
                        <a href="https://github.com/Leonardo0908" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                        </a>
                        <a href="https://www.instagram.com/leonardo_e_s_rodrigues/" target="_blank">
                            <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/leosouzarodrigues/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                        </a>
                    </Box>
                </Grid>
                <Grid item xs={4}  >
                    <Box className="fot" >
                        <Typography style={{ color: "white" }} >© 2022 Copyright:</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;