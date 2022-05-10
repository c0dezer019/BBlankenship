import styled, { keyframes } from 'styled-components';

interface Props {
  readonly isOpen: boolean;
}

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

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

const NavContainer = styled.div<Props>`

  height: 3.5em;
  position: absolute;
  width: 100%;

  .fade-in {
    animation: ${ fade } 2s forwards;
  }

  .fade-out {
    animation: ${ fade } 1s backwards;
  }

  .rotate-forwards {
    animation: ${ rotateIconOpen } .5s forwards;
  }

  .rotate-backwards {
    animation: ${ rotateIconClosed } .5s backwards;
  }

  @media screen and (max-width: 800px) {
    background-color: ${ ({ isOpen }) => (isOpen ? '#342b2b' : 'rgba(255, 255, 255, 0)') };
    transition: width .5s, height .5s, background-color .5s;
    width: ${ ({ isOpen }) => (isOpen ? '50%' : '3em') };
    height: ${ ({ isOpen }) => (isOpen ? '100%' : '3.4em') };
  }
 
`;

export default NavContainer;
