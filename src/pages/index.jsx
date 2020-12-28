import React from 'react';
import Head from 'next/head';
import { Box, Grid, Typography } from '@material-ui/core';

const Home = () => (
  <Box className="body" maxWidth="xl" height="100%">
    <Head>
      <title>Brian Blankenship</title>
    </Head>
    <p>Welcome, user.</p>
    <p>
      I am
      <span> Brian Blankenship</span>
    </p>
    <Typography variant="h2">Software Engineer.</Typography>
    <Typography variant="h3">Thinker.</Typography>
    <Typography variant="h4">Problem solver.</Typography>
    <Typography variant="h5">Teacher.</Typography>
  </Box>
);

export default Home;
