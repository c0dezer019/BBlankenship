import { makeStyles } from '@material-ui/core/styles';

const btnStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 250,
    width: '100%',
  },
  image: {
    height: 200,
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.6,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $overlayText': {
        opacity: 1,
        transition: theme.transitions.create('opacity'),
      },
    },
  },
  focusVisible: {},
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  src: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  backdrop: {
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    transition: theme.transitions.create('opacity'),
    width: '100%',
    height: '100%',
  },
  overlayText: {
    fontFamily: '"Fira Code", sans-serif',
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
}));

export default btnStyle;
