import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
import data from '../data/projectData';
import GridTiles from '../components/GridTiles';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styledTypo from '../styles/MaterialUI/styledTypo';
import muiStyles from '../styles/MaterialUI/muiStyles';
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
        <section className={ styles.contact } id="contact"></section>
        <footer className={ styles.footer }>
          <StyledContainer gridFlex>
            <GridTiles data={ contactMethods } />
          </StyledContainer>
        </footer>
      </StyledContainer>
    </Box>
  );
};

export default Contact;
