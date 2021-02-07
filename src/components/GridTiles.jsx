import React from 'react';
import { GridList } from '@material-ui/core';
import Tile from './subcomponents/Tile';
import muiStyles from '../styles/material_ui/muiStyles';

const GridTiles = ({ data, source }) => {
  const classes = muiStyles();
  const iconStyle = source === 'tech_icons' ? classes.gridListTech : classes.gridListSocial;
  const tiles = [];

  Object.entries(data).map((el, i) => tiles.push(<Tile data={ el[1] } key={ `${ i }_tile` } source={ source } />));

  return (
    <GridList className={ iconStyle } cols={ 2 }>
      { tiles }
    </GridList>
  );
};

export default GridTiles;
