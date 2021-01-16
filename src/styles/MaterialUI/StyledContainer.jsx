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
})(({ classes, children, cStyle }) => {
  if (cStyle === 'second') {
    return (
      <Container className={ classes.second } maxWidth="xl">
        { children }
      </Container>
    );
  }
  return (
    <Container className={ classes.root } maxWidth="xl">
      { children }
    </Container>
  );
});

StyledContainer.propTypes = {
  cStyle: PropTypes.string,
};

StyledContainer.defaultProps = {
  cStyle: null,
};

export default StyledContainer;
