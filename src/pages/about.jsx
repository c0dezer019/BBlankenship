import React from 'react';
import Head from 'next/head';
import { Box, Container, Typography } from '@material-ui/core';
import className from 'classnames';
import data from '../data/projectData';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styledTypo from '../styles/MaterialUI/styledTypo';
import styles from '../styles/sass/about.module.css';
import TechGrid from '../components/TechGrid';
import muiStyles from '../styles/MaterialUI/muiStyles';

const About = () => {
  const classes = styledTypo();
  const boxStyle = muiStyles();
  const { languages, fnl, database, cloud, os } = data[0];
  const root = className('contentContainer', boxStyle.root);

  return (
    <Box className={root}>
      <StyledContainer maxWidth="xl">
        <Head>
          <title>About</title>
          <meta name="description" content="About Brian Blankenship" />
        </Head>
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
        <StyledContainer maxWidth="xl" id="technologiesContainer" containerStyle="second">
          <article id="technologies">
            <div id="containerTitle">
              <Typography className={ classes.root } variant="h4">#technologies</Typography>
            </div>
            <div className={ styles.techContainer } id="techContainer">
              <TechGrid category="Languages" tech={ languages } />
              <TechGrid category="Frameworks and Libraries" tech={ fnl } />
              <TechGrid category="Database" tech={ database } />
              <TechGrid category="Cloud" tech={ cloud } />
              <TechGrid category="Operating Systems" tech={ os } />
            </div>
          </article>
        </StyledContainer>
      </StyledContainer>
    </Box>
  );
};

export default About;
