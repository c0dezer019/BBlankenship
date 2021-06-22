import styled, { keyframes } from 'styled-components';

const growContainer = keyframes`
  from {
    width: fit-content;
  }
  to {
    width: 60%;
  }
`;

const ParentContainer = styled.div`
  .grow-container {
    animation: ${ growContainer } .5s forwards;
  }
`;

export default ParentContainer;
