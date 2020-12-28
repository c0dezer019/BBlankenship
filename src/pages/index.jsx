import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import styledTypo from '../../styles/MaterialUI/styledTypo';

const Home = () => {
  const classes = styledTypo();

  return (
    <Box className="body" maxWidth="xl" height="100%">
      <Head>
        <title>Brian Blankenship</title>
      </Head>
      <p>Welcome, user.</p>
      <p>
        I am
        <span> Brian Blankenship</span>
        , a
      </p>
      <div className="headings" id="1">
        <Typography className={classes.root} variant="h3">Software Engineer,</Typography>
      </div>
      <div className="headings" id="2">
        <Typography className={classes.root} variant="h4">Thinker,</Typography>
      </div>
      <div className="headings" id="3">
        <Typography className={classes.root} variant="h5">Problem solver,</Typography>
      </div>
      <p>and</p>
      <div className="headings" id="4">
        <Typography className={classes.root} variant="h6">Teacher.</Typography>
      </div>
    </Box>
  );
};

export default Home;
