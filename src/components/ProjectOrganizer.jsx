import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Tab, Tabs } from './subcomponents/ProjectOrganizer/project_organizer';
import TabPanel from './subcomponents/ProjectOrganizer/TabPanel';
import ProjectCard from './subcomponents/ProjectOrganizer/ProjectCard';
import muiStyles from '../styles/material_ui/muiStyles';
import styles from '../styles/sass/project.module.css';

const a11yProps = index => ({
  id: `custom-tab-${ index }`,
  'aria-controls': `custom-tabpanel-${ index }`,
});

const ProjectOrganizer = ({ data }) => {
  const [value, setValue] = useState(0);

  const cards = [];
  const classes = muiStyles();

  Object.values(data).map(el => cards.push(<ProjectCard project={ el } />));

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={ styles.container }>
      <Tabs
        aria-label="project-tabs"
        className={ classes.tabs }
        value={ value }
        onChange={ handleChange }
      >
        <Tab label="completed_works" { ...a11yProps(0) } />
        <Tab label="works_in_progress" { ...a11yProps(1) } />
        <Tab label="upcoming_projects" { ...a11yProps(2) } />
        <Tab label="publications" { ...a11yProps(3) } />
        <Tab label="other_works" { ...a11yProps(4) } />
      </Tabs>
      <TabPanel value={ value } index={ 0 } placeholder>
        <Typography className={ classes.typography } variant="h4">
          coming soon(tm)
        </Typography>
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        { cards }
      </TabPanel>
      <TabPanel value={ value } index={ 2 } placeholder>
        <Typography className={ classes.typography } variant="h4">
          coming soon(tm)
        </Typography>
      </TabPanel>
      <TabPanel value={ value } index={ 3 } placeholder>
        <Typography className={ classes.typography } variant="h4">
          coming soon(tm)
        </Typography>
      </TabPanel>
      <TabPanel value={ value } index={ 4 } placeholder>
        <Typography className={ classes.typography } variant="h4">
          coming soon(tm)
        </Typography>
      </TabPanel>
    </div>
  );
};

ProjectOrganizer.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default ProjectOrganizer;
