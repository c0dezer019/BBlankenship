import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.grey[200],
    marginRight: '-1.45em',
    width: 100,
    height: '1em',
    position: 'relative',
    bottom: '0.1em',
    right: '0.5em',
  },
}));

export default useStyles;
