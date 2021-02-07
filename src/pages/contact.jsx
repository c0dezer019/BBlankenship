import React from 'react';
import Head from 'next/head';
import { Box, Divider, Typography } from '@material-ui/core';
import classNames from 'classnames';
import data from '../data/projectData';
import ContactForm from '../components/ContactForm';
import GridTiles from '../components/GridTiles';
import styles from '../styles/sass/contact.module.css';
import muiStyles from '../styles/material_ui/muiStyles';

const Contact = () => {
  const classes = muiStyles();
  const root = classNames('pageContainer', classes.root);
  const { contactInfo } = data[1];

  return (
    <Box className={ root } maxWidth="xl">
      <Head>
        <title>Contact Me</title>
      </Head>
      <header>
        <Typography className={ classes.contactHeader } variant="h5">#contact_me</Typography>
      </header>
      <section className={ styles.contact } id="contact">
        <ContactForm />
      </section>
      <hr className={ styles.divider } />
      <footer className={ styles.footer }>
        <GridTiles data={ contactInfo } source="social_media" />
      </footer>
    </Box>
  );
};

export default Contact;
