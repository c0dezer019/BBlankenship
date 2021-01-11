import React from 'react';
import { Container, withStyles } from '@material-ui/core';

const styledContainer = withStyles({
  root: {
    height: '100%',
    position: 'relative',
    margin: 'auto',
    marginTop: '50px',
    paddingLeft: '10%',
    width: '100%',
  },
})(({ classes, children }) => (
  <Container className={classes.root} maxWidth="xl">
    {children}
  </Container>
));

export default styledContainer;
