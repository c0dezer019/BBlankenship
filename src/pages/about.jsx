import React from 'react';
import Head from 'next/head';
import { Box, Container, Typography } from '@material-ui/core';
import data from '../data/projectData';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styledTypo from '../styles/MaterialUI/styledTypo';
import styles from '../styles/sass/about.module.css';
import TechGrid from '../components/TechGrid';

const About = () => {
  const classes = styledTypo();
  const { languages, fnl, database, cloud, os } = data[0];

  return (
    <Box className="contentContainer" maxWidth="xl">
      <Head>
        <title>About</title>
        <meta name="description" content="About Brian Blankenship" />
      </Head>
      <StyledContainer>
        <Container maxWidth="xl" id="missionStatementContainer">
          <section id="missionStatement">
            <article className={ styles.missionStatement }>
              <Typography className={ classes.root } id="missionStatementText" variant="h4">#mission</Typography>
              <p>
                I am a Software Engineer with experience in Full Stack Development and cloud deployment. Whether it’s
                building a robust, functional form or updating data without delaying user experience, I aim to solve
                these problems with my experience in leading technologies such as Javascript, React, HTML5, Node.js,
                and Python.
              </p>
            </article>
          </section>
        </Container>
        <Container maxWidth="xl" id="technologiesContainer">
          <section id="technologies">
            <Typography className={ classes.root } variant="h4">#technologies</Typography>
            <TechGrid category="Languages" items={ languages } />
            <TechGrid category="Frameworks and Libraries" items={ fnl } />
            <TechGrid category="Database" items={ database } />
            <TechGrid category="Cloud" items={ cloud } />
            <TechGrid category="Operating Systems" items={ os } />
          </section>
        </Container>
      </StyledContainer>
    </Box>
  );
};

export default About;
