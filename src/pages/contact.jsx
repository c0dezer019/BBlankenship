import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import classNames from 'classnames';
import data from '../data/projectData';
import ContactForm from '../components/ContactForm';
import GridTiles from '../components/GridTiles';
import styledTypo from '../styles/material_ui/styledTypo';
import styles from '../styles/sass/contact.module.css';
import muiStyles from '../styles/material_ui/muiStyles';

const Contact = () => {
  const typo = styledTypo();
  const classes = muiStyles();
  const root = classNames('pageContainer', classes.root);
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
      <footer className={ styles.footer }>
        <GridTiles data={ contactMethods } />
      </footer>
    </Box>
  );
};

export default Contact;
