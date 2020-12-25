import React from 'react';
import Head from 'next/head';
import { Box } from '@material-ui/core';

const Home = () => (
  <Box className="homeBody" maxWidth="xl" height="100%">
    <Head>
      <title>Brian Blankenship</title>
    </Head>
    <h1>Hello</h1>
  </Box>
);

export default Home;
