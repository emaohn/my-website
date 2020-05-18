import React from 'react'
import { Grow, Tabs, Tab, Link, Typography, Box, Container, Grid, Button, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ProjectGrid from './ProjectGrid'
import { findAllByDisplayValue, render } from '@testing-library/react';
import ProjectTab from './ProjectTab'

const ProjectList = [
    {
        title: 'Koso',
        description: 'An all-in-one project management app that allows users to breakdown their project into agendas, todo lists, and notes. This was the first app I made and put on the App Store.',
        tech: 'Swift',
        img: require('../static/Koso.png'),
        btnText: 'View on App Store',
        link: 'https://apps.apple.com/us/app/koso/id1423489655',
        hackathon: false,
        favorite: true
    },
    {
        title: 'Fetch',
        description: 'An app that uses AR to identify and add items in store to a virtual shopping cart that makes shopping experiences for shoppers and employees easier. First place winner at MIT Blueprint 2019',
        tech: 'Swift / Web',
        img: require('../static/fetch.png'),
        btnText: 'View on Devpost',
        link: 'https://devpost.com/software/fetch-5exjfu',
        hackathon: true,
        favorite: true
    },
    {
        title: 'Shawa',
        description: 'An app that helps save water by preventing users from taking long showers using music. Winner of best environmental sustainability waste reduction hack at Tech Together Boston 2019.',
        tech: 'Swift',
        img: require('../static/shawa.jpeg'),
        link: 'https://devpost.com/software/shawa',
        hackathon: true,
        btnText: 'View on Devpost',
        favorite: false
    },
    {
        title: 'Cerberus',
        description: 'Smart home security and management device that can be controlled and monitored with paired iOS app. Winner of best hardware hack, best UI, and best usage of Cloud at HackWPI.',
        tech: 'Swift / Arduino / Web',
        img: require('../static/cerberus.jpg'),
        link: 'https://youtu.be/uIitPL-Zco4',
        hackathon: true,
        btnText: 'View on Youtube',
        favorite: true
    },
    {
        title: 'Auxilia',
        description: 'Mulit-platform application crowdsourcing to gather community support and donation money towards non-government funded issues. Second place winner at MAHacks.',
        img: require('../static/auxilia.png'),
        link: 'https://github.com/emaohn',
        tech: 'Swift / Web',
        hackathon: true,
        btnText: 'View on GitHub',
        favorite: false
    },
    {
        title: 'KeepPrivate',
        description: 'KeepPrivate keeps users accountable by providing hundreds of tips regarding safe and appropriate behavior on the Internet and Social Media.',
        tech: 'Swift',
        img: require('../static/keepprivate.png'),
        link: 'https://apps.apple.com/us/app/keepprivate/id1437201924',
        hackathon: false,
        btnText: 'View on App Store',
        favorite: true
    },
    {
        title: 'SimplyReading',
        description: 'SimplyReading makes reading difficult texts much easier by simplifying the language using a custom metric that we created. Made at TreeHacks 2020',
        img: require('../static/simplyreading.png'),
        link: 'https://devpost.com/software/simplyreading',
        tech: 'Python / React',
        btnText: 'View on DevPost',
        hackathon: true,
        favorite: false
    },
    {
        title: 'OpenWhen',
        description: 'An app simulating \"open when...\" cards that allows you to send heartwarming messages and be there for your friends even when far away. Made at BostonHacks 2019',
        tech: 'SwiftUI',
        img: require('../static/openwhen.png'),
        link: 'https://devpost.com/software/openwhen-h7x9et',
        btnText: 'View on Devpost',
        hackathon: true,
        favorite: false
    },
    {
        title: 'SwoleApp',
        description: 'An iOS app with a partner Apple watch app that monitors your weight lifting movements helps you maintin good form.Made at HackUMass VI',
        tech: 'Swift, SwiftUI',
        img: require('../static/swole.png'),
        link: 'https://github.com/emaohn/SwoleApp',
        btnText: 'View on GitHub',
        hackathon: true,
        favorite: false
    },
    {
        title: 'Impact',
        description: 'An "action -> consequence" based app that encourage people to make positive impacts on earth by awarding and deducting points based on a variety of data. Made at HackMIT 2019',
        tech: 'Swift, Web',
        img: require('../static/impact.png'),
        link: 'https://devpost.com/software/impact-pq2mah',
        btnText: 'View on Devpost',
        hackathon: true,
        favorite: false
    },
    {
        title: 'Messages',
        description: 'Messages helps people get out of awkward situations by sending custom fake text notifications at any given time. Made at my first hackathon, HackUMass V.',
        tech: 'Swift',
        img: require('../static/messages.png'),
        link: 'https://github.com/emaohn/SelfMessage',
        btnText: 'View on GitHub',
        hackathon: true,
        favorite: false
    },
    {
        title: 'SplitBill',
        description: 'An app that makes splitting bills with your large groups of people easy and intuitive. Made at Make School Summer Academy.',
        tech: 'Swift',
        img: require('../static/splitbill.png'),
        link: 'https://github.com/emaohn/SplitBill',
        btnText: 'View on GitHub',
        hackathon: true,
        favorite: false
    }
]
export default class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ProjectList
        }
    }

    handleOnTabToggled = (tab) => {
        switch (tab) {
            case 0: this.setState({ list: ProjectList }); break;
            case 1:
                let hacks = ProjectList.filter((project) => project.hackathon)
                this.setState({
                    list: hacks
                });
                break;
            case 2:
                let favs = ProjectList.filter((project) => project.favorite)
                this.setState({
                    list: favs
                });
                break;
            default: break
        }
    }

    render() {
        return (
            <div>
                <Box p={5}>
                    <ThemeProvider theme={theme}>
                        <Grid container direction='column' alignItems='center' justify='center'>
                            <Grid container item direction='column' xs={12} md={8}>
                                <Grid item>
                                    <Box mb={5}>
                                        <Typography gutterBottom variant='h2'>Projects</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <ProjectTab  changeList={this.handleOnTabToggled} />
                                </Grid>
                                <Grid item>
                                    <ProjectGrid list={this.state.list}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </Box>
            </div>
        )
    }
}