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
  width: 100%;

  .fade-in {
    animation: ${fade} 2s forwards;
  }

  .fade-out {
    animation: ${fade} 1s backwards;
  }

  .rotate-forwards {
    animation: ${rotateIconOpen} 0.5s forwards;
  }

  .rotate-backwards {
    animation: ${rotateIconClosed} 0.5s backwards;
  }

  @media screen and (min-width: 800px) {
    background-color: ${({ isOpen }) =>
      isOpen ? '#342b2b' : 'rgba(255, 255, 255, 0)'};
    transition: width 0.5s, height 0.5s, background-color 0.5s;
    width: ${({ isOpen }) => (isOpen ? '50%' : null)};
    height: ${({ isOpen }) => (isOpen ? '100%' : null)};
  }
`;

export default NavContainer;
