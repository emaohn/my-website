import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import AboutIcon from './AboutIcon'
import AboutText from './AboutText'

export default function MeComponent(props) {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Box mb={2}>
                    <Grid container spacing={3}>
                        <Grid container justify='center' alignItems='center' item xs={12} md={3} lg={3}>
                            <AboutIcon img={props.img} />
                        </Grid>
                        <Grid item xs s md>
                            <AboutText img={props.img} />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}


