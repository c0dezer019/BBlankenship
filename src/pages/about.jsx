import React from 'react';
import Head from 'next/head';
import {
  Box, Container, GridList, GridListTile, Typography,
} from '@material-ui/core';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styledTypo from '../styles/MaterialUI/styledTypo';
import styles from '../styles/sass/about.module.css';

const About = () => {
  const classes = styledTypo();

  return (
    <Box className="contentContainer" maxWidth="xl">
      <Head>
        <title>About</title>
        <meta name="description" content="About Brian Blankenship" />
      </Head>
      <StyledContainer>
        <Container maxWidth="xl" id="missionStatementContainer">
          <article className={styles.missionStatement}>
            <Typography className={classes.root} id="missionStatementText" variant="h4">#mission</Typography>
            <p>
              I am a Software Engineer with experience in Full Stack Development and cloud deployment. Whether it’s
              building a robust, functional form or updating data without delaying user experience, I aim to solve
              these problems with my experience in leading technologies such as Javascript, React, HTML5, Node.js, and
              Python.
            </p>
          </article>
        </Container>
        <Container maxWidth="xl" id="technologiesContainer">
          <section id="technologies">
            <Typography className={classes.root}>#technologies</Typography>
          </section>
        </Container>
      </StyledContainer>
    </Box>
  );
};

export default About;
