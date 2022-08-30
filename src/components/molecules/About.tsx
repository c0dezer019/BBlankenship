import { FC, ReactElement } from 'react';

import Content from '../atoms/Content';
import Header from '../atoms/Header';

const About: FC = (): ReactElement => (
  <Content id="about-parent-container">
    <Header>About Me</Header>
  </Content>
);

export default About;
