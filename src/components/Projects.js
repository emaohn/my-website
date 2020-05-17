import React from 'react'
import {Tabs, Tab, Link, Typography, Box, Container, Grid, Button, AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function Projects() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <div>
            <Box p={5}>
            <ThemeProvider theme={theme}>
                <Grid container direction='column' alignItems='center'>
                    <Grid container item direction='column' xs={12} md={8}>
                        <Grid item>
                            <Typography gutterBottom variant='h2'>Projects</Typography>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.root}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                    variant='fullWidth'
                                >
                                    <Tab label="All" />
                                    <Tab label="Hackathon" />
                                    <Tab label="My Favorites" />
                                </Tabs>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
            </Box>
        </div>
    )
}