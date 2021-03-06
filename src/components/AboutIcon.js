import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';

export default function AboutIcon(props) {
    if (props.img === 'Collaborator') {
        return (
            <Box>
                <img className='about-icon' src={require('../static/people.png')}/>
            </Box>  
        )
    } else if (props.img === 'Developer') {
        return (
            <Box>
                <img className='about-icon' src={require('../static/code_tag.png')}/>
            </Box>  
        )
    } else if (props.img === 'Hacker') {
        return (
            <Box>
                <img className='about-icon' src={require('../static/idea.png')}/>
            </Box>  
        )
    }
}