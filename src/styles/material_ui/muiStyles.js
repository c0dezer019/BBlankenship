import { makeStyles } from '@material-ui/core';

const muiStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  contactForm: {
    width: 800,
  },
  grid: {
    flexDirection: 'column',
    position: 'relative',
    top: 120,
  },
  techGrid: {
    margin: 0,
    marginBottom: '1rem',
    padding: 0,
  },
  techGridCell: {
    flexBasis: 0,
  },
  gridList: {
    transform: 'translateZ(0)',
    width: '100%',
    justifyContent: 'center',
  },
  gridListTile: {
    height: 32,
  },
  gridListContainer: {
    width: '100%',
  },
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

export default muiStyles;
