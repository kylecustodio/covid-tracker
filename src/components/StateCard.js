import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const StateCard = ({ title, cases }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' component='h2' gutterBottom>
                    {title}
                </Typography>
                <Typography color='textSecondary'>
                    Total Cases: {Number(cases).toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StateCard;