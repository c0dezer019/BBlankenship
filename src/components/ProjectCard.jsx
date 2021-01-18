import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import StyledContainer from '../styles/MaterialUI/StyledContainer';

const ProjectCard = ({ project }) => {
  const { name, description, screenshot, tech, url } = project;

  return (
    <StyledContainer maxWidth="xl" flex row>
      <Box className="projectCard" id={`${name}_image`}>
        <img src={screenshot} alt={name} />
      </Box>
    </StyledContainer>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
