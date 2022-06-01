import { FC, ReactElement } from 'react';
import IntroContainer from '../atoms/IntroContainer';
import Header from '../atoms/Header';
import Subtitle from '../atoms/Subtitle';
import ScrollDown from '../organisms/scrollAnimation/ScrollDown';

const Intro: FC = (): ReactElement => (
  <IntroContainer id="intro-parent-container">
    <Header>Brian Blankenship</Header>
    <Subtitle>Full Stack Web Developer</Subtitle>
    <ScrollDown />
  </IntroContainer>
);

export default Intro;
