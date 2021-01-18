import React from 'react';
import PropTypes from 'prop-types';
import { Container, withStyles } from '@material-ui/core';

const StyledContainer = withStyles({
  root: {
    height: '100%',
    position: 'relative',
    marginTop: '50px',
    paddingLeft: '10%',
    width: '100%',
  },
  second: {
    marginTop: '3rem',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
  },
})(({ classes, children, cStyle, flex = false, column = false }) => {
  switch (cStyle) {
    case 'second':
      return (
        <Container className={ classes.second }>
          { children }
        </Container>
      );
    case flex:
      switch (column) {
        case true:
          return (
            <Container className={ classes.flexCol }>
              { children }
            </Container>
          );
        default:
          return (
            <Container className={ classes.flexRow }>
              { children }
            </Container>
          );
      }
    default:
      return (
        <Container className={ classes.root } maxWidth="xl">
          { children }
        </Container>
      );
  }
});

StyledContainer.propTypes = {
  cStyle: PropTypes.string,
};

StyledContainer.defaultProps = {
  cStyle: null,
};

export default StyledContainer;
