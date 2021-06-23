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
  height: 3.5em;
  padding: .5em;
  position: relative;
  width: 100%;

  .rotate-forwards {
    animation: ${ rotateIconOpen } .5s forwards;
  }
  .rotate-backwards {
    animation: ${ rotateIconClosed } .5s backwards;
  }

  @media screen and (max-width: 1279px) {
    transition: width .5s, height .5s;
    width: ${ ({ isOpen }) => (isOpen ? '50%' : '3em') };
    height: ${ ({ isOpen }) => (isOpen ? '70%' : '3.4em') };
  }
  @media screen and (max-width: 1024px) {
    width: ${ ({ isOpen }) => (isOpen ? '40%' : '3em') };
    height: ${ ({ isOpen }) => (isOpen ? '100%' : '3.4em') };
  }
  @media screen and (max-width: 768px) {
    width: ${ ({ isOpen }) => (isOpen ? '50%' : '3em') };
    height: ${ ({ isOpen }) => (isOpen ? '100%' : '3.4em') };
  }
  @media screen and (max-width: 450px) {
    width: ${ ({ isOpen }) => (isOpen ? '100%' : '3em') };
    height: ${ ({ isOpen }) => (isOpen ? '100%' : '3.4em') };
  }
`;

export default Container;
