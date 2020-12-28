import React from 'react';
import { Box } from '@material-ui/core';
import Head from 'next/head';

const About = () => (
  <Box className="body" maxWidth="xl">
    <Head>
      <title>About</title>
      <meta name="description" content="About Brian Blankenship" />
    </Head>
    <div>
      <h1>Hello</h1>
    </div>
  </Box>
);

export default About;
