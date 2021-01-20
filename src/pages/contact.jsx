import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import StyledContainer from '../styles/MaterialUI/StyledContainer';

const Contact = () => (
  <Box className="body" maxWidth="xl">
    <Head>
      <title>Contact</title>
    </Head>
    <StyledContainer id="contentContainer">
      <h1>Call me</h1>
    </StyledContainer>
  </Box>
);

export default Contact;
