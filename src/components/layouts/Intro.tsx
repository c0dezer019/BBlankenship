import { FC, ReactElement } from 'react';
import IntroContainer from '../containers/IntroContainer';

const Intro: FC = (): ReactElement => (
  <IntroContainer id="intro-parent-container">
    <p>Test</p>
  </IntroContainer>
);

export default Intro;
