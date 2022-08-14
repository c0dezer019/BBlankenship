import { FC, ReactElement } from 'react';

import { Content, Header } from '../atoms';

const About: FC = (): ReactElement => (
  <Content id="about-parent-container">
    <Header>About Me</Header>
  </Content>
);

export default About;
