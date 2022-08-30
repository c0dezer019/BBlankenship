import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import ScrollDown from '../organisms/scrollAnimation/ScrollDown';

const FooterContainer = styled.div`
  display: flex;
`;

const SectionFooter: FC = (): ReactElement => (
  <footer>
    <FooterContainer>
      <ScrollDown />
    </FooterContainer>
  </footer>
);

export default SectionFooter;
