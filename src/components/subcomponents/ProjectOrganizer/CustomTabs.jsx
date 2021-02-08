import React from 'react';
import { Tabs, withStyles } from '@material-ui/core';

const CustomTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs { ...props } TabIndicatorProps={{ children: <span /> }} />);

export default CustomTabs;
