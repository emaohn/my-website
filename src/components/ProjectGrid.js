import React from 'react'
import { Tabs, Tab, Link, Typography, Box, Container, Grid, Button, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';
import Project from './Project'
export default function ProjectGrid(props) {
    const projs = props.list.map(proj => {
        return (
            <Grid item xs={12} sm={6} lg={4}>
                <Box m={3}>
                    <Project data={proj} />
                </Box>
            </Grid>
        )
    })
    return (
        <Grid container item>
            {projs}
        </Grid>
    )
}