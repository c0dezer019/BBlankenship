import { FC, ReactElement } from 'react';
import { IntroContainer, Header, Subtitle } from '../atoms';

const Intro: FC = (): ReactElement => (
  <section>
    <IntroContainer id="intro-parent-container">
      <Header>Brian Blankenship</Header>
      <Subtitle>Full Stack Web Developer</Subtitle>
    </IntroContainer>
  </section>
);

export default Intro;
