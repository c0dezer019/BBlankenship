import styled, { keyframes } from 'styled-components';

interface Props {
  readonly isOpen: boolean;
}

const rotateIconOpen = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const rotateIconClosed = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Container = styled.div<Props>`
  height: 4.5em;
  width: 100%;
  padding: 21px;

  .rotate-forwards {
    animation: ${ rotateIconOpen } .5s forwards;
  }
  .rotate-backwards {
    animation: ${ rotateIconClosed } .5s backwards;
  }
  
  @media screen and (max-width: 1279px) {
    border: 1px solid white;
    height: fit-content;
    padding: .5em;
    width: ${ ({ isOpen }) => (isOpen ? '60%' : 'fit-content') };
  }
`;

export default Container;
