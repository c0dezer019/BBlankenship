import React from 'react';
import { Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: '65%',
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs id="tab-container" { ...props } TabIndicatorProps={{ children: <span /> }} />);

export default CustomTabs;
