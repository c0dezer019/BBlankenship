import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledChip = withStyles({
  root: {
    borderColor: '#c41206',
    color: 'yellow',
    height: '2em',
    margin: '0.5%',
  },
})(({ children, classes, label }) => (
  <Chip className={ classes.root } color="secondary" label={ label }>
    { children }
  </Chip>
));

StyledChip.propTypes = {
  children: PropTypes.shape.isRequired,
  classes: PropTypes.shape.isRequired,
  settings: PropTypes.shape.isRequired,
};

export default StyledChip;
