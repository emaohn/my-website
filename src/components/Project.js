import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Tabs, Tab, Link, Typography, Box, Container, Grid, Button, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        height:'100%'
    },
    media: {
        height: 300,
    },
});

export default function Project(props) {
    const classes = useStyles();
    return (
        <Grid item>
        <Card className={classes.root} elevation={3}>
            <CardMedia
                className={classes.media}
                image={props.data.img}
                title={props.data.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    {props.data.tech}
                </Button>
                <Button target="_blank" rel="noopener noreferrer" href={props.data.link} variant='outlined' size="small" color="primary">
                    {props.data.btnText}
                </Button>
            </CardActions>
        </Card>
        </Grid>
    )
}