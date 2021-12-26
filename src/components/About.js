import React from 'react'
import { Link, Typography, Box, Container, Grid, Paper, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import MeComponent from './MeComponent'
import SkillGraph from './SkillGraph'
import pdf from '../Resume.pdf'

export default function About() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box p={5} mx='auto'>
                    <Grid item container alignItems='center'>
                        <Grid item xs={12}>
                            <Box mb={6}>
                                <Typography gutterBottom variant='h2'>About</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={3} alignItems='center' justify='center'>
                        <Grid item xs={10} md={8} lg={3} xl={4} direction='column' justify='center' >
                                <Grid item>
                                    <Box item px={1}>
                                        <img id='avatar' src={require('../static/avatar.jpeg')} />
                                    </Box>
                                </Grid>
                                <Grid container item>
                                    <Box my={5} px={1} justifyContent='center'>
                                        <Typography gutterBottom variant='subtitle1'>
                                            <Box className='subtext'>
                                                I'm a third year computer science major (+ math minor) at University of Massachusetts Amherst. I've previously interned at Google and Asana and will be returning to Asana as a full time software engineer in the fall of 2022. I'm currently the co-president of <Link target="_blank" rel="noopener noreferrer" href='https://buildumass.com/'>Build UMass</Link>, a tech consulting club atUMass helping local businesses and organizations build technical solutions.
                                            </Box>
                                        </Typography>
                                        <Button onClick={() => window.open(pdf)}>Download Resume</Button>
                                    </Box>
                                </Grid>
                        </Grid>
                        <Grid item sm={8} lg={7} xl={6} justify='flex-start'>
                            <MeComponent
                                img='Developer'
                            />
                            <MeComponent
                                img='Hacker'
                            />
                            <MeComponent
                                img='Collaborator'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}
