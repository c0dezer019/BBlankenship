import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import data from '../data/projectData';
import ContactForm from '../components/ContactForm';
import GridTiles from '../components/GridTiles';
import styledTypo from '../styles/material_ui/styledTypo';
import muiStyles from '../styles/material_ui/muiStyles';
import styles from '../styles/sass/contact.module.css';

const Contact = () => {
  const classes = muiStyles();
  const typo = styledTypo();
  const { contactDossier } = data[1];

  const contactMethods = [
    contactDossier.discord,
    contactDossier.email,
    contactDossier.gitHub,
    contactDossier.linkedIn,
    contactDossier.reddit,
    contactDossier.skype,
    contactDossier.twitter,
  ];

  return (
    <Box className={ classes.contact } maxWidth="xl">
      <Head>
        <title>Contact Me</title>
      </Head>
      <header>
        <Typography className={ typo.contactHeader } variant="h5">#contact_me</Typography>
      </header>
      <section className={ styles.contact } id="contact">
        <ContactForm />
      </section>
      <footer className={ styles.footer }>
        <GridTiles data={ contactMethods } />
      </footer>
    </Box>
  );
};

export default Contact;
