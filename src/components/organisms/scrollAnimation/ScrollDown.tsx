import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { Chevrons, Mouse } from '../../molecules/scrollAnimation';

const StyledContainer = styled.div`
  display: none;
  margin: 0 auto;
  width: 24px;
  height: 100px;
  margin-top: 125px;

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

const ScrollDown: FC = (): ReactElement => (
  <StyledContainer>
    <Mouse />
    <Chevrons />
  </StyledContainer>
);

export default ScrollDown;
