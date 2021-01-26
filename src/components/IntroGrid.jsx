import React from 'react';
import { Grid } from '@material-ui/core';
import IntroGridItems from './subcomponents/IntroGridItems';
import muiStyles from '../styles/material_ui/muiStyles';

const IntroGrid = () => {
  const classes = muiStyles();

  return (
    <Grid container className={ classes.grid } id="text-container" spacing={ 6 }>
      <IntroGridItems />
    </Grid>
  );
};

export default IntroGrid;
