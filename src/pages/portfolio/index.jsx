import React from 'react';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import classNames from 'classnames';
import data from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard';
import StyledContainer from '../../styles/material_ui/StyledContainer';
import muiStyles from '../../styles/material_ui/muiStyles';

const AppGallery = () => {
  const { projects } = data[2];
  const classes = muiStyles();
  const root = classNames('pageContainer', classes.root);

  return (
    <Box className={ root } maxWidth="xl">
      <Head>
        <title>App Portfolio</title>
        <meta name="description" content="Projects I have undertaken." />
      </Head>
      <StyledContainer flex col>
        { projects.map((project, i) => (
          <ProjectCard key={ `${ i + 1 }_project` } project={ project } />
        )) }
      </StyledContainer>
    </Box>
  );
};

export default AppGallery;
