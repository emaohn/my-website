import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import AboutIcon from './AboutIcon'

export default function(props) {
    let img = '../static/idea.png';
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Box m={5} >
                    <Grid container spacing={5}>
                        <Grid container item xs={12} s={2} md={3}>
                            <AboutIcon img={props.img} />
                        </Grid>
                        <Grid item xs s md >
                            <Box textAlign='left'>
                                <Typography variant='p'>{props.text}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}
