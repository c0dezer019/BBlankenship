import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(38, 33, 33, 0.2)',
    height: theme.spacing(5),
    color: theme.palette.grey[100],
    fontWeight: 'bold',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[700],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

export default StyledBreadcrumb;
