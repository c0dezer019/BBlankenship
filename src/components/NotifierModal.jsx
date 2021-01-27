import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box, Button, Container, Modal, Typography } from '@material-ui/core';
import HighligtOffIcon from '@material-ui/icons/HighlightOff';
import modalStyle from '../styles/material_ui/modalStyle';
import muiStyles from '../styles/material_ui/muiStyles';

const NotifierModal = ({ error, message, resetStatus, signal }) => {
  const [open, setOpen] = useState(false);

  const classes = muiStyles();
  const modal = modalStyle();
  const modalMsg = classNames(classes.typography, modal.message);

  const handleClose = () => {
    setOpen(false);
    resetStatus();
  };

  useEffect(() => {
    if (signal === 'open') {
      setOpen(true);
    }
  }, [signal]);

  const body = (
    <Box className={ modal.root }>
      <Container className={ modal.header }>
        <Typography className={ classes.typography } id="modalTitle" variant="h5">Message Status</Typography>
        <HighligtOffIcon />
      </Container>
      <hr className={ modal.divider } />
      <Typography id="modalMessage" className={ modalMsg } variant="h6">{ message }</Typography>
      { Object.keys(error).length > 0 && (<p>{ error }</p>)}
      <Button className={ modal.closeButton } color="secondary" variant="contained" onClick={ handleClose }>
        <span>Close</span>
      </Button>
      <NotifierModal />
    </Box>
  );

  return (
    <Modal
      aria-labelledby="modalTitle"
      aria-describedby="modalMessage"
      open={ open }
      onClose={ handleClose }
    >
      { body }
    </Modal>
  );
};

NotifierModal.propTypes = {
  error: PropTypes.object,
  message: PropTypes.string.isRequired,
  signal: PropTypes.string.isRequired,
};

NotifierModal.defaultProps = {
  error: {},
};

export default NotifierModal;
