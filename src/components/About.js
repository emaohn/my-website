import React from 'react'
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import MeComponent from './MeComponent'

export default function About() {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Box py={10} px={15}>
                    <Grid container alignItems='center'>
                        <Grid item xs={12}>
                            <Box mb={5}>
                                <Typography gutterBottom variant='h2'>About</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item s={12} md={4} xl={3}>
                            <Box>
                                <img id='avatar' src={require('../static/avatar.jpeg')}/>
                            </Box>
                            <Box mt={5}>
                                <Typography gutterBottom variant='p'>I'm a rising sophomore at University of Massachusetts Amherst double majoring in computer science and mathematical computation.</Typography>
                            </Box>
                        </Grid>
                        <Grid item s={12} md={8} xl={9} justify='flex-start'>
                            <MeComponent 
                                img='book'
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vel libero fermentum posuere. Donec lobortis pharetra velit. Proin volutpat ligula quam, eu lobortis ligula hendrerit in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eleifend libero et metus vestibulum faucibus. Nunc scelerisque feugiat lectus, et tempus sem posuere porta. Mauris dui quam, tempor eu elementum non, accumsan in ipsum. Cras faucibus interdum mauris a ultrices. Nam ligula nunc, egestas id elementum quis, pretium sit amet sem. Nullam justo nisi, iaculis quis ullamcorper nec, ullamcorper et lacus. Vivamus venenatis dictum nisi, quis sodales ex faucibus in. Vivamus et lacinia mauris. Curabitur aliquam urna sit amet libero convallis, ac varius orci ultricies.
                                Duis sit amet porttitor nunc."
                            />
                            <MeComponent 
                                img='code'
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vel libero fermentum posuere. Donec lobortis pharetra velit. Proin volutpat ligula quam, eu lobortis ligula hendrerit in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eleifend libero et metus vestibulum faucibus. Nunc scelerisque feugiat lectus, et tempus sem posuere porta. Mauris dui quam, tempor eu elementum non, accumsan in ipsum. Cras faucibus interdum mauris a ultrices. Nam ligula nunc, egestas id elementum quis, pretium sit amet sem. Nullam justo nisi, iaculis quis ullamcorper nec, ullamcorper et lacus. Vivamus venenatis dictum nisi, quis sodales ex faucibus in. Vivamus et lacinia mauris. Curabitur aliquam urna sit amet libero convallis, ac varius orci ultricies.
                                Duis sit amet porttitor nunc."
                            />
                            <MeComponent 
                                img='idea'
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vel libero fermentum posuere. Donec lobortis pharetra velit. Proin volutpat ligula quam, eu lobortis ligula hendrerit in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eleifend libero et metus vestibulum faucibus. Nunc scelerisque feugiat lectus, et tempus sem posuere porta. Mauris dui quam, tempor eu elementum non, accumsan in ipsum. Cras faucibus interdum mauris a ultrices. Nam ligula nunc, egestas id elementum quis, pretium sit amet sem. Nullam justo nisi, iaculis quis ullamcorper nec, ullamcorper et lacus. Vivamus venenatis dictum nisi, quis sodales ex faucibus in. Vivamus et lacinia mauris. Curabitur aliquam urna sit amet libero convallis, ac varius orci ultricies.
                                Duis sit amet porttitor nunc."
                            />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}