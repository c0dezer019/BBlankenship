import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from './subcomponents/ProjectOrganizer/project_organizer';
import TabPanel from './subcomponents/ProjectOrganizer/TabPanel';
import ProjectCard from './subcomponents/ProjectOrganizer/ProjectCard';
import muiStyles from '../styles/material_ui/muiStyles';

const a11yProps = index => ({
  id: `custom-tab-${ index }`,
  'aria-controls': `custom-tabpanel-${ index }`,
});

const ProjectOrganizer = ({ data }) => {
  const [value, setValue] = useState(0);

  const cards = [];
  const classes = muiStyles();

  Object.entries(data).map(el => console.log(el));

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        aria-label="project-tabs"
        value={ value }
        onChange={ handleChange }
      >
        <Tab label="completed_works" { ...a11yProps(0) } />
        <Tab label="works_in_progress" { ...a11yProps(1) } />
        <Tab label="upcoming_projects" { ...a11yProps(2) } />
        <Tab label="publications" { ...a11yProps(3) } />
        <Tab label="other_works" { ...a11yProps(4) } />
      </Tabs>
      <TabPanel value={ value } index={ 0 }><p>Hello</p></TabPanel>
      <TabPanel value={ value } index={ 1 }><p>Good Bye</p></TabPanel>
      <TabPanel value={ value } index={ 2 }><p>NOOOOO!</p></TabPanel>
      <TabPanel value={ value } index={ 3 }><p>May the force be with you.</p></TabPanel>
      <TabPanel value={ value } index={ 4 }><p>You don't know the power of the dark side.</p></TabPanel>
    </div>
  );
};

ProjectOrganizer.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default ProjectOrganizer;
