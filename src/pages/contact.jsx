import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import useStyles from '../styles/MaterialUI/muiStyles';

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} maxWidth="xl">
      <Head>
        <title>Contact</title>
      </Head>
      <StyledContainer id="contentContainer" flex col>
        <h1>Call me</h1>
      </StyledContainer>
    </Box>
  );
};

export default Contact;
