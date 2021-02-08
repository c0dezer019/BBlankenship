import React from 'react';
import { Tab, withStyles } from '@material-ui/core';

const CustomTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontFamily: 'Fira Code',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
  },
}))(props => <Tab disableRipple { ...props } />);

export default CustomTab;
