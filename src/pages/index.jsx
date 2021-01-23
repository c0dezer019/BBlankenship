import React from 'react';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import IntroGrid from '../components/IntroGrid';
import StyledContainer from '../styles/MaterialUI/StyledContainer';

const Home = () => (
  <Box className="body" maxWidth="xl">
    <Head>
      <title>Brian Blankenship</title>
    </Head>
    <StyledContainer flex>
      <IntroGrid />
    </StyledContainer>
  </Box>
);

export default Home;
