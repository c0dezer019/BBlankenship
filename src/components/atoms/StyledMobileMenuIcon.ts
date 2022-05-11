import { Dispatch,SetStateAction} from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  readonly isOpen?: boolean;
  readonly visible?: boolean;
  setInitialState?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  setVisible?: Dispatch<SetStateAction<boolean>>;
}

const growBar = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(2);
  }
`;

const shrinkBar = keyframes`
  from {
    transform: scaleX(2);
  }
  to {
    transform: scaleX(1);
  }
`;

const StyledMobileMenuIcon = styled.div.attrs(
  ({ isOpen, visible, setInitialState, setOpen, setVisible }: Props) => ({
    onClick: () => {
      if (!isOpen) setOpen(true);
      else setOpen(false);
      if (!visible) setVisible(true);
      else setVisible(false);
      setInitialState(false);
    },
  })
)<Props>`
  display: block;
  position: absolute;
  margin: ${ 3.5 / 6 }em;
  width: 30px;

  .grow-bar {
    animation: ${ growBar } 0.5s forwards;
  }
  .shrink-bar {
    animation: ${ shrinkBar } 0.5s backwards;
  }
  .bar {
    background-color: white;
    border-radius: 25px;
    height: 4px;
    margin: 6px 0;
  }
  .bar:nth-child(odd) {
    margin: 6px auto;
    width: 15px;
  }

  @media screen and (min-width: 1279px) {
    display: none;
  }
`;


export default StyledMobileMenuIcon;
