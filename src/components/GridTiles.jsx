import React from 'react';
import PropTypes from 'prop-types';
import { GridList } from '@material-ui/core';
import Tile from './subcomponents/Tile';
import muiStyles from '../styles/material_ui/muiStyles';

const GridTiles = ({ data }) => {
  const classes = muiStyles();

  return (
    <GridList className={ classes.gridList } cols={ 3 }>
      { data.map((method, i) => (
        <Tile data={ method } key={ `${ i }_tile` } />
      )) }
    </GridList>
  );
};

GridList.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default GridTiles;