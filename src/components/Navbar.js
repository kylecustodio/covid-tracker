import React from 'react';
import { AppBar, Container, Toolbar, Typography, Link } from '@material-ui/core';

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Typography variant='h6' style={{flex:1}}>
                        COVID-19 Tracker
                    </Typography>
                    <nav>
                        <Link variant='button' color='inherit' href='https://covidtracking.com/' target='_blank'>
                            Sources
                        </Link>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;