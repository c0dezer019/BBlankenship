import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = ({ children }): ReactElement => (
  <StyledSection>
    <section>{children}</section>
  </StyledSection>
);

export default Section;
