import React from 'react';
import Head from 'next/head';
import { Box, Grid, Typography } from '@material-ui/core';
import styledTypo from '../../styles/MaterialUI/styledTypo';
import styles from '../../styles/sass/home.module.css';

const Home = () => {
  const classes = styledTypo();

  return (
    <Box className={styles.body} maxWidth="xl">
      <Head>
        <title>Brian Blankenship</title>
      </Head>
      <Grid container id="text-container">
        <Grid item xl={1}>
          &nbsp;
        </Grid>
        <Grid item xl={11}>
          <p className={styles.intro}>
            I am
            <span> Brian Blankenship</span>
            , a
          </p>
        </Grid>
        <Grid item xl={2}>
          &nbsp;
        </Grid>
        <Grid item xl={10} id="heading-1">
          <Typography className={classes.root} id="test" variant="h3">Software Engineer,</Typography>
        </Grid>
        <Grid item xl={5}>
          &nbsp;
        </Grid>
        <Grid item xl={7} id="heading-2">
          <Typography className={classes.root} variant="h4">Thinker,</Typography>
        </Grid>
        <Grid item xl={6}>
          &nbsp;
        </Grid>
        <Grid item xl={6} id="heading-3">
          <Typography className={classes.root} variant="h5">Problem solver,</Typography>
        </Grid>
        <Grid item xl={7}>
          &nbsp;
        </Grid>
        <Grid item xl={5}>
          <p className={styles.and}>and</p>
        </Grid>
        <Grid item xl={8}>
          &nbsp;
        </Grid>
        <Grid item xl={4} id="heading-4">
          <Typography className={classes.root} variant="h6">Professional Coffee Drinker.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
