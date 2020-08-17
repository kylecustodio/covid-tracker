import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
    return(
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Typography variant='h6'>
                        COVID-19 Tracker
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;