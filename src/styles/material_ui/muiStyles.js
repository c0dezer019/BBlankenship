import { makeStyles } from '@material-ui/core';

const muiStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'relative',
    marginTop: '50px',
    width: '100%',
  },
  contact: {
    height: '100%',
    marginTop: '50px',
    paddingLeft: '10%',
    width: '100%',
  },
  contactHeader: {
    fontFamily: '"Fira Code", sans-serif',
    margin: '0 auto 0 36rem',
    position: 'relative',
    top: '5rem',
    width: 'max-content',
  },
  grid: {
    flexDirection: 'column',
  },
  gridList: {
    transform: 'translateZ(0)',
    width: '100%',
    justifyContent: 'center',
  },
  gridListContainer: {
    width: '100%',
  },
  gridListTile: {
    height: 32,
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
  link: {
    margin: '10px',
  },
  techGrid: {
    margin: 0,
    marginBottom: '1rem',
    padding: 0,
  },
  techGridCell: {
    display: 'flex',
    alignItems: 'center',
    flexBasis: 0,
    justifyContent: 'center',
  },
  typography: {
    fontFamily: '"Fira Code", sans-serif',
  },
}));

export default muiStyles;
