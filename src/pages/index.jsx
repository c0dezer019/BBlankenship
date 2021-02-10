import React from 'react';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import classNames from 'classnames';
import IntroGrid from '../components/IntroGrid';
import StyledContainer from '../styles/material_ui/StyledContainer';
import muiStyles from '../styles/material_ui/muiStyles';

const Home = () => {
  const classes = muiStyles();
  const root = classNames('pageContainer', classes.root);

  return (
    <Box className={root} maxWidth="xl">
      <Head>
        <title>Brian Blankenship</title>
      </Head>
      <StyledContainer paddingLeft="15%" flex col>
        <IntroGrid />
      </StyledContainer>
    </Box>
  );
};

export default Home;
