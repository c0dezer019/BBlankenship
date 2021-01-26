import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Modal, Typography } from '@material-ui/core';
import HighligtOffIcon from '@material-ui/icons/HighlightOff';
import muiStyles from '../styles/material_ui/muiStyles';

const NotifierModal = ({ message, signal }) => {
  const [open, setOpen] = useState(false);

  const classes = muiStyles();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (signal === 'open') {
      setOpen(true);
    }
  }, [signal]);

  const body = (
    <Box>
      <HighligtOffIcon />
      <Typography className={ classes.typography } id="modalTitle" variant="h3">Success!</Typography>
      <Typography id="modalMessage" className={ classes.typography }>{ message }</Typography>
      <Button color="secondary" variant="contained" onClick={ handleClose }>Close</Button>
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
  message: PropTypes.string.isRequired,
  signal: PropTypes.string.isRequired,
};

export default NotifierModal;
