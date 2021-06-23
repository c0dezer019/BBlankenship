import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Intro: FC = (): ReactElement => (
  <Container id="intro-parent-container">
    <p>Test</p>
  </Container>
);

export default Intro;
