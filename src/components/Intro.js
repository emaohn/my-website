import React from 'react';
import Typical from 'react-typical'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Intro(props) {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box height='100%' width='100%'>
                    <Grid container direction='column' justify ='center' alignItems='center'>
                        <Grid container direction='row' justify ='center' alignItems='center'>
                            <Grid item xs={12}>
                                <Typography variant='h1' component='h2' gutterBottom>
                                    Hi, I'm Emmie Ohnuki.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h4' gutterBottom>
                                    I'm 
                                        <Typical
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={[' a CS student.', 1000, 
                                                    ' an iOS developer.', 1000, 
                                                    ' a web developer.', 1000, 
                                                    ' a hacker.', 1000,
                                                    ' a programming instructor.', 1000,
                                                    ' a software engineer', 1000
                                                ]}
                                        />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify ='center' alignItems='center'>
                            <Box m={8}>
                                <Grid item xs={12}>
                                    <Button
                                        size='large'
                                        variant='outlined'
                                        color='default'>
                                            <Link
                                                activeClass='active'
                                                className='toAbout'
                                                to='about'
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                            >
                                                Learn more about me
                                            </Link>
                                        </Button>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}