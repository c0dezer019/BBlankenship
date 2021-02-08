import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import muiStyles from '../../../styles/material_ui/muiStyles';

const TabPanel = ({ children, value, index, ...other }) => {
  const classes = muiStyles();

  return (
    <div
      aria-labelledby={ `custom-tabpanel-${ index }` }
      hidden={ value !== index }
      id={ `custom-tabpanel-${ index }` }
      role="tabpanel"
      { ...other }
    >
      { value === index && (
        <Box p={ 3 }>
          <Typography className={ classes.typography }>{ children }</Typography>
        </Box>
      ) }
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
};

TabPanel.defaultProps = {
  children: <></>,
};

export default TabPanel;
