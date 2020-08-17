import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Grid, Container, Typography, Box, TextField } from '@material-ui/core';
import NationalCards from './components/NationalCards';
import StateCard from './components/StateCard';

function App() {
  const [nationalStats, setNationalStats] = useState([]);
  const [stateStats, setStateStats] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getNationalStats();
    getStateStats();
    getStateInfo();
  }, []);

  const getNationalStats = async () => {
    const response = await fetch(`https://api.covidtracking.com/v1/us/current.json`);
    const data = await response.json();
    setNationalStats(data[0]);
  }

  const getStateStats = async () => {
    const response = await fetch(`https://api.covidtracking.com/v1/states/current.json`)
    const data = await response.json();
    setStateStats(data);
  }

  const getStateInfo = async () => {
    const response = await fetch(`https://api.covidtracking.com/v1/states/info.json`)
    const data = await response.json();
    setStateInfo(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
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
        <Typography variant='h2'>
          <Box textAlign='center' m={1}>
            States and Territories
          </Box>
        </Typography>
        <Box textAlign='center' my={4}>
          <TextField label='Search' variant='outlined' fullWidth={true} value={search} onChange={updateSearch}/>
        </Box>
        <Grid container justify='center' spacing={3}>
          {stateInfo.filter(state => state.name.toLowerCase().includes(search.toLowerCase())).map(filteredState => (
            <Grid item xs={6} md={3}>
              <StateCard title={filteredState.name} data={stateStats[stateInfo.indexOf(filteredState)]} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
