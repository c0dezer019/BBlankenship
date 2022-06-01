import { FC, ReactElement } from 'react';
import IntroContainer from '../organisms/IntroContainer';
import Header from '../atoms/Header';
import Subtitle from '../atoms/Subtitle';

const Intro: FC = (): ReactElement => (
  <IntroContainer id="intro-parent-container">
    <Header>Brian Blankenship</Header>
    <Subtitle>Full Stack Web Developer</Subtitle>
  </IntroContainer>
);

export default Intro;
