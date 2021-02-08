import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledContainer = withStyles({
  root: {
    height: 'auto',
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
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
    paddingLeft: '10%',
    marginBottom: '20px',
    width: '100%',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
    marginBottom: '20px',
    width: '100%',
  },
  footer: {
    backgroundColor: '#282e2a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    width: '100%',
    height: 34,
  },
  gridFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
})(({ classes, children, col, containerStyle, flex, footer, gridFlex }) => {
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
  } else if (flex) {
    if (col) {
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
  } else if (gridFlex) {
    return (
      <Container className={ classes.gridFlex } maxWidth="xl">
        { children }
      </Container>
    );
  } else if (footer) {
    return (
      <Container className={ classes.footer } maxWidth="xl">
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
