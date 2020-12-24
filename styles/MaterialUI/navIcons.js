import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.grey[200],
    marginRight: '-2em',
    width: 100,
    height: '1em',
    position: 'relative',
    bottom: '0.1em',
  },
}));

export default useStyles;
