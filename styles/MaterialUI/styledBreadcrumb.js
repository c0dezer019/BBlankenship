import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(38, 33, 33, 0.0)',
    borderRadius: 8,
    fontSize: '1.3rem',
    height: theme.spacing(5),
    color: theme.palette.grey[900],
    marginLeft: '5em',
    marginRight: '5em',
    fontWeight: 'medium',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[700],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export default styledBreadcrumb;
