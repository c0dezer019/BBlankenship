import React from 'react';
import Head from 'next/head';
import data from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard';
import StyledContainer from '../../styles/MaterialUI/StyledContainer';

const AppGallery = () => {
  const { projects } = data[2];

  return (
    <StyledContainer className="body" maxWidth="xl">
      <Head>
        <title>App Portfolio</title>
      </Head>
      { projects.map((project, i) => (
        <ProjectCard key={ `${i}_project` } project={ project } />
      )) }
    </StyledContainer>
  );
};

export default AppGallery;
