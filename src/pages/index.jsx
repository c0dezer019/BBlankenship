import React from 'react';
import Head from 'next/head';
import { Box, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import styledTypo from '../styles/MaterialUI/styledTypo';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styles from '../styles/sass/home.module.css';
import muiStyles from '../styles/MaterialUI/muiStyles';

const Home = () => {
  const classes = styledTypo();
  const box = muiStyles();

  const h1 = classNames(classes.root, styles.h1);
  const h2 = classNames(classes.root, styles.h2);
  const h3 = classNames(classes.root, styles.h3);
  const h4 = classNames(classes.root, styles.h4);

  return (
    <Box className="body" maxWidth="xl">
      <Head>
        <title>Brian Blankenship</title>
      </Head>
      <StyledContainer flex>
        <Grid container className={box.grid} id="text-container" spacing={6}>
          <Grid item xl={12}>
            <p className={styles.intro}>
              I am
              <span> Brian Blankenship</span>
              , a
            </p>
          </Grid>
          <Grid item xl={12} id="heading-1">
            <Typography className={h1} variant="h6">Software Engineer,</Typography>
          </Grid>
          <Grid item xl={12} id="heading-2">
            <Typography className={h2} id="T2" variant="h5">Thinker,</Typography>
          </Grid>
          <Grid item xl={12} id="heading-3">
            <Typography className={h3} id="T3" variant="h4">Problem solver,</Typography>
          </Grid>
          <Grid item xl={12} id="heading-4">
            <Typography className={h4} id="T4" variant="h3">Educator</Typography>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default Home;
