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
                <Box mb={5}>
                    <Grid container spacing={5}>
                        <Grid container justify='center' item s={12} md={5} lg={3}>
                            <AboutIcon img={props.img} />
                        </Grid>
                        <Grid item xs s md >
                            <Box textAlign='left'>
                                <Typography variant='h4'><Box mb={3}>{props.img}</Box></Typography>
                                <Typography variant='subtitle1'><Box className='subtext'>{props.text}</Box></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}