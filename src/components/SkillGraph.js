import React, { PureComponent } from 'react';
import {Typography, Box, Container, Grid, Paper, Button} from '@material-ui/core';

import { PieChart } from 'react-minimal-pie-chart';

export default function SkillGraph() {
    return (
        <Box m={3}>
            <PieChart
                data = {[
                    { title: 'Java', value: 30, color: '#38AFAD' },
                    { title: 'Swift', value: 20, color: '#9AF7F7' },
                    { title: 'JS', value: 15, color: '#84E7E6' },
                    { title: 'React', value: 10, color: '#64CFCE' },
                    { title: 'HTML', value: 10, color: '#2D908E' },
                    { title: 'CSS', value: 10, color: '#22726F' },
                    { title: 'Python', value: 5, color: '#16534F' }
                ]}
                animate={true}
                animationDuration={700}
                animationEasying='ease-out'
                lineWidth={50}
                label={(data) => data.dataEntry.title}
                labelPosition={80}
                labelStyle={{
                    fontSize: '5px',
                    fontColor: 'FFFFFA'
                }}
            />
        </Box>
    )
}


