import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import NationalCards from './components/NationalCards';

function App() {
  const [nationalStats, setNationalStats] = useState([]);

  useEffect(() => {
    getNationalStats();
  }, []);

  const getNationalStats = async () => {
    const response = await fetch(`https://api.covidtracking.com/v1/us/current.json`);
    const data = await response.json();
    setNationalStats(data[0]);
  }

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Typography variant='h2'>
          <Box textAlign='center' m={1}>
            National Data
          </Box>
        </Typography>
        <NationalCards data={nationalStats} />
      </Container>
    </div>
  );
}

export default App;
