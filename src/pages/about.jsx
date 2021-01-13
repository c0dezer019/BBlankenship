import React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
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
        <article className={styles.missionStatement}>
          <Typography className={classes.root} variant="h4">#Mission</Typography>
          <p>
            I am a Full Stack Software Engineer motivated to grow with a team and dedicated to learning the latest
            technologies.Whether it’s building a robust, functional form or updating data without delaying user
            experience, I aim to solve these problems with my experience in leading full stack web technologies such as
            Javascript, React, HTML5, Node,js, and Python.
          </p>
        </article>
      </StyledContainer>
    </Box>
  );
};

export default About;
