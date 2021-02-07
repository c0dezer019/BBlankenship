import React from 'react';
import PropTypes from 'prop-types';
import { GridList } from '@material-ui/core';
import Tile from './subcomponents/Tile';
import muiStyles from '../styles/material_ui/muiStyles';

const GridTiles = ({ data, source }) => {
  const classes = muiStyles();

  return (
    <GridList className={ classes.gridList } cols={ 2 }>
      { data.map((value, i) => (
        <Tile data={ value } key={ `${ i }_tile` } source={ source } />
      )) }
    </GridList>
  );
};

GridList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  source: PropTypes.string.isRequired,
};

export default GridTiles;
