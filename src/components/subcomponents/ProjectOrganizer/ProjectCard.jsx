import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box, Container, Typography } from '@material-ui/core';
import ImageButton from '../../ImageButton';
import StyledChip from '../../../styles/material_ui/StyledChip';
import StyledContainer from '../../../styles/material_ui/StyledContainer';
import muiStyles from '../../../styles/material_ui/muiStyles';
import styles from '../../../styles/sass/project.module.css';

const ProjectCard = ({ project }) => {
  const { description, demo, github, name, screenshot, tag, tech } = project;
  const projectTextArea = classNames('projectInfo', styles.projectTextArea);
  const projectImagePane = classNames('projectImage', styles.imageContainer);
  const classes = muiStyles();

  return (
    <StyledContainer className="projectCard" id={ `${ tag }_card` } maxWidth="xl" flex>
      <section className={ styles.dataContainer }>
        <Box className={ projectImagePane } id={ `${ tag }_image` }>
          <ImageButton image={ screenshot } title={ name } url={ demo } />
          <Container className={ classes.linkContainer }>
            <Link className={ classes.link } href={ github } passHref>
              <a target="_blank">
                <img
                  className={ styles.github }
                  src="images/tech_icons/github.png"
                  alt="Github"
                />
              </a>
            </Link>
          </Container>
        </Box>
        <Box className={ projectTextArea } id={ `${ tag }_info` }>
          <Box className="projectDesc" id={ `${ tag }_desc` }>
            <article id="descriptionText">
              <header>
                <Typography className={ classes.typography } variant="h6">#{ name }</Typography>
              </header>
              <p>
                { description }
              </p>
            </article>
          </Box>
          <Box className="projectStack" id={ `${ tag }_stack` }>
            <section>
              <header>
                <Typography className={ classes.typography } variant="h6">tech_stack</Typography>
              </header>
              <article>
                <p>
                  <span>
                    { tech.map((v, i) => (
                      <StyledChip className="techChip" key={ `${ i + 1 }_${ v }` } label={ v } />
                    )) }
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
