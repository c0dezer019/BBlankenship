import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Button, Typography } from '@material-ui/core';
import className from 'classnames';
import data from '../data/projectData';
import GridTiles from '../components/GridTiles';
import StyledContainer from '../styles/material_ui/StyledContainer';
import styles from '../styles/sass/about.module.css';
import muiStyles from '../styles/material_ui/muiStyles';

const About = () => {
  const classes = muiStyles();
  const { languages, fnl, database, cloud, os } = data[0];
  const root = className('pageContainer', classes.root);

  return (
    <Box className={ root } maxWidth="xl">
      <Head>
        <title>About</title>
        <meta name="description" content="About Brian Blankenship" />
      </Head>
      <StyledContainer className="contentContainer" flex>
        <StyledContainer id="missionStatementContainer" flex col>
          <section id="missionStatement">
            <article className={ styles.missionStatement }>
              <Typography className={ classes.typography } id="missionStatementText" variant="h4">#mission</Typography>
              <p>
                I am a Software Engineer with experience in Full Stack Development and cloud deployment. Whether it’s
                building a robust, functional form or updating data without delaying user experience, I aim to solve
                these problems with my experience in leading technologies such as Javascript, React, HTML5, Node.js,
                and Python.
              </p>
            </article>
          </section>
          <section>
            <Link href="../../documents/brian_blankenship.pdf" passHref>
              <Button className={ classes.link } target="_blank" variant="contained">
                Resume
              </Button>
            </Link>
            <Link href="../../documents/ga_cert.pdf" passHref>
              <Button className={ classes.link } target="_blank" variant="contained">
                Certificate
              </Button>
            </Link>
          </section>
        </StyledContainer>
        <StyledContainer maxWidth="xl" id="technologiesContainer" flex col>
          <article id="technologies">
            <div id="containerTitle">
              <Typography className={ classes.typography } variant="h4">#technologies</Typography>
            </div>
            <div className={ styles.techContainer } id="techContainer">
              <Typography className={ classes.typography } variant="h5">#languages</Typography>
              <GridTiles data={ languages } source="tech_icons" />
              <Typography className={ classes.typography } variant="h5">#frameworks_and_libraries</Typography>
              <GridTiles data={ fnl } source="tech_icons" />
              <Typography className={ classes.typography } variant="h5">#database</Typography>
              <GridTiles data={ database } source="tech_icons" />
              <Typography className={ classes.typography } variant="h5">#cloud</Typography>
              <GridTiles data={ cloud } source="tech_icons" />
              <Typography className={ classes.typography } variant="h5">#os</Typography>
              <GridTiles data={ os } source="tech_icons" />
            </div>
          </article>
        </StyledContainer>
      </StyledContainer>
    </Box>
  );
};

export default About;
