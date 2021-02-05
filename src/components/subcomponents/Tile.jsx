import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GridListTile } from '@material-ui/core';
import muiStyles from '../../styles/material_ui/muiStyles';
import styles from '../../styles/sass/contact.module.css';

const Tile = ({ data }) => {
  const [url] = useState(data.url);
  const classes = muiStyles();
  const methImg = classNames('contactMethodImage', styles.contactImage);

  const handleClick = e => {
    e.preventDefault();
    window.open(`${ url }`, '_blank');
  };

  return (
    <GridListTile className={ classes.gridListTile } cols={ 1 }>
      <a className={ styles.contactLink } href="#" onClick={ handleClick }>
        <img className={ methImg } src={ data.image } alt="Contact" />
      </a>
    </GridListTile>
  );
};

Tile.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Tile;
