import React from 'react'
import { Tabs, Tab, Link, Typography, Box, Container, Grid, Button, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import AppsIcon from '@material-ui/icons/Apps';
import ProjectGrid from './ProjectGrid'
import { findAllByDisplayValue, render } from '@testing-library/react';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function ProjectTab(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.changeList(newValue);
    };
    return (
        <Box mx={3}>
            <Paper className={classes.root} elevation={3}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    variant='fullWidth'
                >
                    <Tab icon={<AppsIcon />} label="All" />
                    <Tab icon={<CodeIcon />} label="Hackathon" />
                    <Tab icon={<FavoriteIcon />} label="My Favorites" />
                </Tabs>
            </Paper>
        </Box>
    )
}