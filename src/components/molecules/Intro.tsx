import { FC, ReactElement } from 'react';
import IntroContainer from '../organisms/IntroContainer';
import Text from '../atoms/Text';

const Intro: FC = (): ReactElement => (
  <IntroContainer id="intro-parent-container">
    <Text>
      Hello,
    </Text>
  </IntroContainer>
);

export default Intro;
