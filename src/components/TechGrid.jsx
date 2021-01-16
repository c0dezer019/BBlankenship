import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Container, Grid, Typography } from '@material-ui/core';

const TechGrid = ({ category, items }) => (
  <Container>
    <Typography variant="h6">
      { category }
    </Typography>
    <Grid container className="techStack" id={ category }>
      { items.map(name => (
        <Grid item key={ `_${name}`} xl={ 2 }><Chip color="primary" label={ name } variant="outlined" /></Grid>
      )) }
    </Grid>
  </Container>
);

Grid.propTypes = {
  cat: PropTypes.string.isRequired,
  items: PropTypes.shape.isRequired,
};

export default TechGrid;
