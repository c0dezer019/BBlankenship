import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from '@material-ui/core';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styles from '../styles/sass/project.module.css';

const ProjectCard = ({ project }) => {
  const { description, descStyleRule, name, screenshot, screenshotStyleRule, tag, tech, url } = project;
  const projectDesc = classNames('projectDesc', descStyleRule);
  const projectImage = classNames('projectImage', styles.imageContainer);

  return (
    <StyledContainer className="projectCard" display="flex" id={ `${tag}_card` } maxWidth="xl">
      <section className={ styles.dataContainer }>
        <Box className={ projectImage } id={ `${tag}_image` }>
          <img className={ screenshotStyleRule } src={ screenshot } alt={ name } />
        </Box>
        <Box className="projectInfo" id={ `${tag}_info` }>
          <Box classname={ projectDesc } id={ `${tag}_desc` }>
            <article id="descriptionText">
              <p>
                { description }
              </p>
            </article>
          </Box>
        </Box>
      </section>
    </StyledContainer>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired,
    styleRules: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
