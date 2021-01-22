import React from 'react';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import data from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard';
import muiStyles from '../../styles/MaterialUI/muiStyles';

const AppGallery = () => {
  const { projects } = data[2];

  return (
    <Box className="body" maxWidth="xl">
      <Head>
        <title>App Portfolio</title>
      </Head>
      { projects.map((project, i) => (
        <ProjectCard key={ `${ i + 1 }_project` } project={ project } />
      )) }
    </Box>
  );
};

export default AppGallery;
