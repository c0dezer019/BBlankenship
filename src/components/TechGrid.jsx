import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@material-ui/core';
import StyledChip from '../styles/MaterialUI/StyledChip';
import useStyles from '../styles/MaterialUI/styledGrid';

const TechGrid = ({ category, tech }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h6">
        { category }
      </Typography>
      <Grid container className="techStack" id={ category } spacing={2}>
        { tech.map((name, i) => (
          <Grid className={ classes.cell } item key={ i + 1 } xl={ 2 }>
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
