import { FC, ReactElement } from 'react';

import Content from '../atoms/Content';
import Header from '../atoms/Header';
import Subtitle from '../atoms/Subtitle';

const Intro: FC = (): ReactElement => (
  <Content id="intro-parent-container">
    <Header>Brian Blankenship</Header>
    <Subtitle>Full Stack Web Developer</Subtitle>
    <p>Designing functional apps.</p>
  </Content>
);

export default Intro;
