import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import muiStyles from '../../styles/material_ui/muiStyles';
import styles from '../../styles/sass/home.module.css';

const IntroGridItems = () => {
  const classes = muiStyles();
  const h1 = classNames(classes.typography, styles.h1);
  const h2 = classNames(classes.typography, styles.h2);
  const h3 = classNames(classes.typography, styles.h3);
  const h4 = classNames(classes.typography, styles.h4);

  return (
    <>
      <Grid item xl={ 12 }>
        <p className={ styles.intro }>
          I am
          <span> Brian Blankenship</span>
          , a
        </p>
      </Grid>
      <Grid item xl={ 12 } id="heading-1">
        <Typography className={ h1 } variant="h6">Software Engineer,</Typography>
      </Grid>
      <Grid item xl={ 12 } id="heading-2">
        <Typography className={ h2 } id="T2" variant="h5">Thinker,</Typography>
      </Grid>
      <Grid item xl={ 12 } id="heading-3">
        <Typography className={ h3 } id="T3" variant="h4">Problem solver,</Typography>
      </Grid>
      <Grid item xl={ 12 } id="heading-4">
        <Typography className={ h4 } id="T4" variant="h3">Educator</Typography>
      </Grid>
    </>
  );
};

export default IntroGridItems;
