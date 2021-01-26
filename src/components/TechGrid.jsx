import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@material-ui/core';
import StyledChip from '../styles/material_ui/StyledChip';
import muiStyles from '../styles/material_ui/muiStyles';

const TechGrid = ({ category, tech }) => {
  const classes = muiStyles();

  return (
    <Container className={classes.techGrid}>
      <Typography variant="h6">
        { category }
      </Typography>
      <Grid container className="techStack" id={ category } spacing={2}>
        { tech.map((name, i) => (
          <Grid className={ classes.techGridCell } item key={ i + 1 } xl={ 2 }>
            <StyledChip label={ name } variant="outlined" />
          </Grid>
        )) }
      </Grid>
    </Container>
  );
};

Grid.propTypes = {
  cat: PropTypes.string.isRequired,
  items: PropTypes.shape.isRequired,
};

export default TechGrid;
