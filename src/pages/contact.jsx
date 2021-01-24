import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import data from '../data/projectData';
import GridTiles from '../components/GridTiles';
import StyledContainer from '../styles/material_ui/StyledContainer';
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
    <Box className={ classes.root } maxWidth="xl">
      <Head>
        <title>Contact Me</title>
      </Head>
      <StyledContainer id="contentContainer" flex col>
        <header>
          <Typography className={ typo.root } variant="h5">#contact_me</Typography>
        </header>
        <section className={ styles.contact } id="contact">
          <p>
            Hello World
          </p>
        </section>
        <footer className={ styles.footer }>
          <GridTiles data={ contactMethods } />
        </footer>
      </StyledContainer>
    </Box>
  );
};

export default Contact;
