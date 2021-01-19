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
  image: {
    width: 'fit-content',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    width: 1200,
    padding: '1%',
  },
})(({ classes, children, containerStyle, display, flexDirection }) => {
  if (containerStyle === 'second') {
    return (
      <Container className={ classes.second } maxWidth="xl">
        { children }
      </Container>
    );
  } else if (containerStyle === 'image') {
    return (
      <Container className={ classes.image }>
        { children }
      </Container>
    );
  } else if (display === 'flex') {
    if (flexDirection === 'col') {
      return (
        <Container className={ classes.flexCol } maxWidth="xl">
          { children }
        </Container>
      );
    }
    return (
      <Container className={ classes.flexRow } maxWidth="xl">
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
  containerStyle: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
};

StyledContainer.defaultProps = {
  containerStyle: '',
  display: '',
  flexDirection: 'row',
};

export default StyledContainer;
