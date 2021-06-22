import { Dispatch, SetStateAction } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  readonly isOpen?: boolean;
  setInitialState?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
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

const MobileMenuIcon = styled.div.attrs(({ setOpen, isOpen, setInitialState }: Props) => ({
  onClick: () => {
    if (!isOpen) setOpen(true);
    else setOpen(false);
    setInitialState(false);
  },
}))`
  display: block;
  padding: 0;
  width: 30px;
  
  .grow-bar {
    animation: ${ growBar } .5s forwards;
  }
  .shrink-bar {
    animation: ${ shrinkBar } .5s backwards;
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

export default MobileMenuIcon;
