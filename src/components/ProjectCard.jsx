import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box, Typography } from '@material-ui/core';
import StyledChip from '../styles/material_ui/StyledChip';
import StyledContainer from '../styles/material_ui/StyledContainer';
import styledTypo from '../styles/material_ui/styledTypo';
import styles from '../styles/sass/project.module.css';

const ProjectCard = ({ project }) => {
  const { description, name, screenshot, tag, tech, url } = project;
  const projectTextArea = classNames('projectInfo', styles.projectTextArea);
  const projectImage = classNames('projectImage', styles.imageContainer);
  const classes = styledTypo();

  return (
    <StyledContainer className="projectCard" id={ `${ tag }_card` } maxWidth="xl" flex>
      <section className={ styles.dataContainer }>
        <Box className={ projectImage } id={ `${ tag }_image` }>
          <img className={ styles.screenshotImage } src={ screenshot } alt={ name } />
        </Box>
        <Box className={ projectTextArea } id={ `${ tag }_info` }>
          <Box className="projectDesc" id={ `${ tag }_desc` }>
            <article id="descriptionText">
              <header>
                <Typography className={ classes.root } variant="h6">#{ name }</Typography>
              </header>
              <p>
                { description }
              </p>
            </article>
          </Box>
          <Box className="projectStack" id={ `${ tag }_stack` }>
            <section>
              <header>
                <Typography className={ classes.root } variant="h6">tech_stack</Typography>
              </header>
              <article>
                <p>
                  <span>
                    {tech.map((v, i) => (
                      <StyledChip className="techChip" key={`${ i + 1 }_${ v }`} label={ v } />
                    ))}
                  </span>
                </p>
              </article>
            </section>
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
