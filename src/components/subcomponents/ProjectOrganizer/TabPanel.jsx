import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import muiStyles from '../../../styles/material_ui/muiStyles';
import styles from '../../../styles/sass/project.module.css';

const TabPanel = ({ children, value, index, placeholder, ...other }) => {
  const classes = muiStyles();
  const parentStyle = placeholder ? classes.placeholder : classes.tabpanel;
  const childStyle = placeholder ? classes.placeholderChild : classes.panelChild;

  return (
    <div
      aria-labelledby={ `custom-tabpanel-${ index }` }
      className={ styles.tabpanel }
      hidden={ value !== index }
      id={ `custom-tabpanel-${ index }` }
      role="tabpanel"
      { ...other }
    >
      { value === index && (
        <Box className={ parentStyle } p={ 3 }>
          <Box className={ childStyle }><section>{ children }</section></Box>
        </Box>
      ) }
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.bool,
};

TabPanel.defaultProps = {
  children: <></>,
  placeholder: false,
};

export default TabPanel;
