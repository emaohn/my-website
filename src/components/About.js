import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import MeComponent from './MeComponent'

export default function About() {
    const text = {
        blurb: 'I\'m a computer science and mathematical computation double major at University of Massachusetts Amherst. I am currently a STEP Intern at Google and software engineer for BUILD UMass.',
        people: 'Through hackathons, clubs, summer programs, and jobs, I\'ve gotten to know and collaborate with some of the most brilliant people who\'ve inspired me to keep working hard and pursue my goals. With CS being such a diverse industry, I love that I can connect with and learn from people of all different skills and backgrounds. I also enjoy sharing my experiences and helping others grow and have served as a TA for AP Java as well as a programming instructor at Code Wiz and Ivy Seed Academy.',
        developer: 'Ever since I first taught myself to code in 7th grade, I fell in love with the joy of building software that can reach a vast number of people all over the world. After attending Make School Summer Academy in SF back in 2018, I began making iOS apps and have made over 10 apps, 2 of which are on the app store and 4 of which have won hackathons. More recently, I began delving into web development and have picked up an interest in the more theoretical and algorithmic side of CS.',
        hacker: 'Over the past two years I\'ve attended over 10 hackathons, and have spent countless sleepless nights surrounded by amazing hackers working to build something great and impactful. I enjoy the thrill of brainstorming and implementing a solution to a larger issue within the 24-36 hours of the event and the challenge of problem solving and working with new technologies and people each time.'
    }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Box py={5} px={15}>
                    <Grid container alignItems='center'>
                        <Grid item xs={12}>
                            <Box mb={10}>
                                <Typography gutterBottom variant='h2'>About</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={12} lg={4}>
                            <Box px={1}>
                                <img id='avatar' src={require('../static/avatar.jpeg')}/>
                            </Box>
                            <Box mt={5} px={1}>
                                <Typography gutterBottom variant='subtitle1'><Box className='subtext'>{text.blurb}</Box></Typography>
                            </Box>
                        </Grid>
                        <Grid item></Grid>
                        <Grid item s md xl justify='flex-start'>
                            <MeComponent 
                                img='Developer'
                                text={text.developer}
                            />
                            <MeComponent 
                                img='Hacker'
                                text={text.hacker}
                            />
                            <MeComponent 
                                img='Collaborator'
                                text={text.people}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}