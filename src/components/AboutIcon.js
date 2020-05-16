import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';

export default function AboutIcon(props) {
    if (props.img === 'book') {
        return (
            <Box>
                <img className='about-icon' src={require('../static/book1.png')}/>
            </Box>  
        )
    } else if (props.img === 'code') {
        return (
            <Box>
                <img className='about-icon' src={require('../static/code_tag.png')}/>
            </Box>  
        )
    } else if (props.img === 'idea') {
        return (
            <Box>
                <img className='about-icon' src={require('../static/idea.png')}/>
            </Box>  
        )
    }
}