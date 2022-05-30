import { FC, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

import { AnimatedChevron } from '../../atoms/scrollAnimation';

const chevronAnimation = keyframes`
  0%   { opacity: 0;}
  50%  { opacity: .5;}
  100% { opacity: 1;}
`;

const AnimationContainer = styled.div`
  .one {
    margin-top: 1px;
  }

  .one, .two, .three {
    animation: ${chevronAnimation} 1s infinite;
  }

  .one {
    animation-direction: alternate;
    animation-delay: alternate;
  }

  .two {
    animation-delay: .2s;
    animation-direction: alternate;
    margin-top: -6px;
  }

  .three {
    animation-delay: .3s;
    animation-direction: alternate;
    margin-top: -6px;
  }
`

const Chevrons: FC = (): ReactElement => (
  <AnimationContainer>
    <AnimatedChevron className="one" />
    <AnimatedChevron className="two" />
    <AnimatedChevron className="three" />
  </AnimationContainer>
);

export default Chevrons