import React from 'react'
import {Divider, IconButton, Link, Typography, Box, Container, Grid, Paper, Button, TableFooter} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return(
        <div>
            <ThemeProvider theme={theme} >
                <Box py={5}>
                    <Grid container direction ='row' alignItems='center' justify='center'>
                        <Grid item>
                            <IconButton target="_blank" rel="noopener noreferrer" href='https://github.com/emaohn' aria-label='github' size='large'>
                                <GitHubIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/emmieohnuki/' aria-label='LinkedIn' size='large'>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/emmieohnuki' aria-label='Facebook' size='large'>
                                <FacebookIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/emmieohn/' aria-label='Instagram' size='large'>
                                <InstagramIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container direction ='column' alignItems='center' justify='center'>
                        <Grid item>
                            <Divider />
                            <Box mt={1}>
                                <Typography gutterBottom variant='overline'>
                                    Emmie Ohnuki ©2020
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}