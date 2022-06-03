import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { Chevrons, Mouse } from '../../molecules/scrollAnimation';

const StyledContainer = styled.div`
  display: none;
  margin: 0 auto;
  width: 24px;
  height: 100px;

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

const Aside = styled.aside`
  width: 99vw;
`;

const ScrollDown: FC = (): ReactElement => (
  <Aside>
    <StyledContainer>
      <Mouse />
      <Chevrons />
    </StyledContainer>
  </Aside>
);

export default ScrollDown;
