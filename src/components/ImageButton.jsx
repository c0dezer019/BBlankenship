import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase, Typography } from '@material-ui/core';
import btnStyle from '../styles/material_ui/imageButtonStyle';

const ImageButton = ({ image, title, url }) => {
  const style = btnStyle();

  const handleClick = e => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className={ style.root }>
      <ButtonBase
        className={ style.image }
        focusVisibleClassName={ style.focusVisible }
        focusRipple
        key={ title }
        onClick={ handleClick }
        style={{ width: '100%' }}
      >
        <span
          className={ style.src }
          style={ { backgroundImage: `url(${ image })` } }
        />
        <span className={ style.backdrop } />
        <span className={ style.button }>
          <Typography
            className={ style.overlayText }
            component="span"
            color="inherit"
            variant="h5"
          >
            view_demo
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

ImageButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageButton;
