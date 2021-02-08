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
        <Box className={ classes.tabpanel } p={ 3 }>
          <Box className={ classes.panelChild }><section>{ children }</section></Box>
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
