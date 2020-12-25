import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(38, 33, 33, 0.0)',
    borderRadius: 8,
    color: theme.palette.grey[200],
    fontSize: '1.3rem',
    fontFamily: '"Fira Code", sans-serif',
    fontWeight: 500,
    justifyContent: 'center',
    height: theme.spacing(5),
    marginLeft: '5em',
    marginRight: '5em',
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: 'rgba(63, 63, 63, 0.4)',
    },
    '&:active, &:focus': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize('rgba(245, 23, 7, 0.2)'),
    },
  },
}))(Chip);

export default styledBreadcrumb;
