import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import Avatar from '@material-ui/core/Avatar'
import { CardMedia } from '@material-ui/core';

export default function About() {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Box py={10} px={15}>
                    <Grid container alignItems='center'>
                        <Grid item xs={12}>
                            <Box mb={15}>
                                <Typography variant='h2'>About</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item md={4}>
                            <Box>
                                <img id='avatar' src={require('../static/avatar.jpeg')}/>
                            </Box>
                            <Box mt={5}>
                                <Typography variant='p'>I'm a rising sophomore at University of Massachusetts Amherst double majoring in computer science and mathematical computation.</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={8} justify='flex-start'>
                            <p>HELLOOOOOO</p>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}