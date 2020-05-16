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
                <Box p={15}>
                    <Grid container spacing={5}>
                        <Grid item md={6}>
                            <div id='avatar'>
                                <img src={require('../static/avatar.jpeg')}/>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant='h4'>About Me</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}