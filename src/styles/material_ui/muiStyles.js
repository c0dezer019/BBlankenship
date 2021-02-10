import { makeStyles } from '@material-ui/core/styles';

const muiStyles = makeStyles(theme => ({
  root: {
    height: '100%',
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
    overflow: 'visible',
    margin: 0,
    '&.MuiGridList-root': {
      overflowY: 'visible',
    },
  },
  gridListContainer: {
    width: '100%',
    overflow: 'visible',
  },
  gridListTile: {
    width: 'max-content',
    padding: 5,
    margin: 0,
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
  linkContainer: {
    textAlign: 'center',
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
  tab: {
    margin: 20,
  },
  tabs: {
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
    },
  },
  tabpanel: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  panelChild: {
    width: '65%',
  },
  placeholder: {
    height: '100%',
  },
  placeholderChild: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  typography: {
    fontFamily: '"Fira Code", sans-serif',
    width: 'max-content',
  },
}));

export default muiStyles;
