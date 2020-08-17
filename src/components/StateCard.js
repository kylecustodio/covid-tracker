import React from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@material-ui/core';

const StateCard = ({ title, data }) => {
    if (typeof (data) == 'undefined') {
        return (
            <Card>
                <CardContent>
                    <CircularProgress />
                </CardContent>
            </Card>
        );
    }
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' component='h2' gutterBottom>
                    {title}
                </Typography>
                <Typography color='textSecondary'>
                    Total Cases: {Number(data.positive).toLocaleString()}
                </Typography>
                <Typography color='textSecondary'>
                    New Cases: {Number(data.positiveIncrease).toLocaleString()}
                </Typography>
                <Typography color='textSecondary'>
                    Total Deaths: {Number(data.death).toLocaleString()}
                </Typography>
                <Typography color='textSecondary'>
                    New Deaths: {Number(data.deathIncrease).toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StateCard;