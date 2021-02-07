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
  gridListSocial: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  gridListTech: {
    width: '100%',
  },
  gridListContainer: {
    width: '100%',
    overflow: 'visible',
  },
  gridListTile: {
    width: 'max-content',
    padding: 5,
    '& .MuiGridListTile-tile': {
      overflow: 'visible',
    },
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
