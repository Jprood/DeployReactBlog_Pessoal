import React from 'react';
import './Footer.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerConponent

    if (token != "") {
        footerConponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="box1">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className="titulo-footer">Formas de contato </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.instagram.com/jp_rood/" target="_blank">
                            <InstagramIcon className="icons" />
                        </a>
                        <a href="https://github.com/Jprood" target="_black">
                            <GitHubIcon className="git" />
                        </a>
                        <a href="https://www.linkedin.com/in/joao-pedro-rocha/" target="_blank">
                            <LinkedInIcon className="icons" />
                        </a>
                    </Box>
                </Box>
                <Box className="box2">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="company">Jprood©</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (

        <>
            {footerConponent}
        </>

    )
}

export default Footer
