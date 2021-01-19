import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box, Typography } from '@material-ui/core';
import StyledChip from '../styles/MaterialUI/StyledChip';
import StyledContainer from '../styles/MaterialUI/StyledContainer';
import styledTypo from '../styles/MaterialUI/styledTypo';
import styles from '../styles/sass/project.module.css';

const ProjectCard = ({ project }) => {
  const { description, name, screenshot, tag, tech, url } = project;
  const projectTextArea = classNames('projectInfo', styles.projectTextArea);
  const projectImage = classNames('projectImage', styles.imageContainer);
  const classes = styledTypo();

  return (
    <StyledContainer className="projectCard" display="flex" id={ `${tag}_card` } maxWidth="xl">
      <section className={ styles.dataContainer }>
        <Box className={ projectImage } id={ `${tag}_image` }>
          <img className={ styles.screenshotImage } src={ screenshot } alt={ name } />
        </Box>
        <Box className={projectTextArea} id={ `${tag}_info` }>
          <Box className="projectDesc" id={ `${tag}_desc` }>
            <article id="descriptionText">
              <header>
                <Typography className={classes.root} variant="h6">#{name}</Typography>
              </header>
              <p>
                { description }
              </p>
            </article>
          </Box>
          <Box className="projectStack" id={`${tag}_stack`}>
            <section>
              <header>
                <Typography className={classes.root} variant="h6">tech_stack</Typography>
              </header>
              { tech.map((tech, i) => (
                <StyledChip key={`${i + 1}_chip`} label={ tech } variant="outlined" />
              )) }
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
