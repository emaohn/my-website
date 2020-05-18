import React from 'react'
import {Link, Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';

export default function AboutText(props) {
    switch(props.img) {
        case 'Developer':
            return (
                <Box textAlign='center'>
                    <Typography variant='h5'><Box mb={1}>{props.img}</Box></Typography>
                        <Typography variant='subtitle1'>
                            <Box className='subtext'>{props.text}
                            Ever since I first taught myself to code in 7th grade, I fell in love with the joy of building software that can reach a vast number of people all over the world. After attending Make School Summer Academy in SF back in 2018, I began making iOS apps and have made over 10 apps, 2 of which are on the app store and 4 of which have won hackathons. More recently, I began delving into web development and have picked up an interest in the more theoretical and algorithmic side of CS. You can view my projects.
                            </Box>
                        </Typography>
                </Box>
            );
            break;
        case 'Hacker':
            return(
                <Box textAlign='center'>
                    <Typography variant='h5'><Box mb={1}>{props.img}</Box></Typography>
                    <Typography variant='subtitle1'>
                        <Box className='subtext'>
                        Over the past two years I've attended over 10 hackathons, and have spent countless sleepless nights surrounded by amazing hackers working to build something great and impactful. I enjoy the thrill of brainstorming and implementing a solution to a larger issue within the 24-36 hours of the event and the challenge of problem solving and working with new technologies and people each time.
                        </Box>
                    </Typography>
                </Box>
            )
            break;
        case 'Collaborator':
            return(
                <Box textAlign='center'>
                    <Typography variant='h5'><Box mb={1}>{props.img}</Box></Typography>
                    <Typography variant='subtitle1'>
                        <Box className='subtext'>{props.text}
                        Through hackathons, clubs, summer programs, and jobs, I've gotten to know and collaborate with some of the most brilliant people who've inspired me to keep working hard and pursue my goals. With CS being such a diverse industry, I love that I can connect with and learn from people of all different skills and backgrounds. I also enjoy sharing my experiences and helping others grow and have served as a TA for AP Java as well as a programming instructor at <Link target="_blank" rel="noopener noreferrer" href='https://thecodewiz.com/westford-ma/'>Code Wiz</Link> and <Link href='https://www.ivy-seed.com/' target="_blank" rel="noopener noreferrer">Ivy Seed Academy</Link>.
                        </Box>
                    </Typography>
                </Box>
            )
            break;
        default:
            break;
    }
}