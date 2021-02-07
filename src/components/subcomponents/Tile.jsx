import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GridListTile } from '@material-ui/core';
import muiStyles from '../../styles/material_ui/muiStyles';
import styles from '../../styles/sass/icons.module.css';

const Tile = ({ data, source }) => {
  const [url] = useState(data.url);
  const reg = /[ .\-]/g;
  const imgStyle = source === 'tech_icons' ? styles.tech_icons :
    source === 'social_media' ? styles.social_media_icons : null;

  const txtStyle = classNames(styles.text, styles[data.name.replace(reg, '').toLowerCase()]);
  const iconClass = classNames(imgStyle, styles[data.name.replace(reg, '').toLowerCase()]);
  const classes = muiStyles();

  const handleClick = e => {
    e.preventDefault();
    window.open(`${ url }`, '_blank');
  };

  return (
    <GridListTile className={ classes.gridListTile } cols={ 2 }>
      { data.url ? (
        <a href="#" onClick={ handleClick }>
          <img className={ iconClass } src={ data.image } alt={ data.name } />
        </a>
      ) : data.image ? (
        <div>
          <img className={ iconClass } src={ data.image } alt={ data.name } />
        </div>
      ) : (
        <p className={ txtStyle }>{ data.name }</p>
      ) }
    </GridListTile>
  );
};

Tile.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  source: PropTypes.string.isRequired,
};

export default Tile;
