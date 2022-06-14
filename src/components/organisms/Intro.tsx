import { FC, ReactElement } from 'react';
import { Content, Header, Subtitle } from '../atoms';

const Intro: FC = (): ReactElement => (
  <Content id="intro-parent-container">
    <Header>Brian Blankenship</Header>
    <Subtitle>Full Stack Web Developer</Subtitle>
    <p>Designing functional apps.</p>
  </Content>
);

export default Intro;
