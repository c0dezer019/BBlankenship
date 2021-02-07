import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { GridListTile } from '@material-ui/core';
import muiStyles from '../../styles/material_ui/muiStyles';
import styles from '../../styles/sass/icons.module.css';

const Tile = ({ data, source }) => {
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const reg = /[ .\-]/g;
  const imgStyle = source === 'tech_icons' ? styles.tech_icons :
    source === 'social_media' ? styles.social_media_icons : null;

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(data, 'url') && Object.prototype.hasOwnProperty.call(data, 'image')) {
      setUrl(data.url);
      setImage(data.image);
    }

    if (Object.prototype.hasOwnProperty.call(data, 'name')) setName(data.name);
  });

  const txtStyle = classNames(styles.text, source === 'tech_icons' ?
    styles[data.name.replace(reg, '').toLowerCase()] : styles.contactIcon);
  const iconClass = classNames(imgStyle, source === 'tech_icons' ?
    styles[data.name.replace(reg, '').toLowerCase()] : styles.contactIcon);
  const classes = muiStyles();

  const handleClick = e => {
    e.preventDefault();
    window.open(`${ url }`, '_blank');
  };

  return (
    <GridListTile className={ classes.gridListTile } cols={ 2 }>
      { url !== '' ? (
        <a href="#" onClick={ handleClick }>
          <img className={ iconClass } src={ data.image } alt={ data.name } />
        </a>
      ) : image ? (
        <div>
          <img className={ iconClass } src={ data.image } alt={ data.name } />
        </div>
      ) : (
        <p className={ txtStyle }>{ name }</p>
      ) }
    </GridListTile>
  );
};

export default Tile;
