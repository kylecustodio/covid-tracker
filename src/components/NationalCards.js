import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const NationalCards = ({ data }) => {
    const cards = [
        {
            title: 'Total Cases',
            data: data.positive,
        },
        {
            title: 'New Cases',
            data: data.positiveIncrease,
        },
        {
            title: 'Total Deaths',
            data: data.death,
        },
        {
            title: 'New Deaths',
            data: data.deathIncrease
        },
    ];

    return(
        <Grid container justify='center' spacing={3}>
            {cards.map(card => (
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                                {card.title}
                            </Typography>
                            <Typography variant='h5' component='h2'>
                                {Number(card.data).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default NationalCards;