import { makeStyles } from '@material-ui/core';

const muiStyles = makeStyles({
  root: {
    height: '100%',
  },
  grid: {
    flexDirection: 'column',
    position: 'relative',
    top: 120,
  },
  gridList: {
    flexWrap: 'none',
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
});

export default muiStyles;
