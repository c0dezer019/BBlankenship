import styled, { keyframes } from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  changeVisibility?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  readonly visible?: boolean;
}

const scaleContainer = keyframes`
  from {
    
  }
`;

const LinkContainer = styled.div.attrs(({ changeVisibility, setOpen }: Props) => ({
  onClick: e => {
    if (e.target.className.match('nav-link')) {
      changeVisibility(false);
      setOpen(false);
    }
  },
}))<Props>`
  display: flex;
  width: 30%;
  height: 100%;
  margin: 1em 0 0 6em;

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 1279px) {
    display: ${ ({ visible }: Props) => (visible ? 'flex' : 'none') };
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
    text-align: center;
    margin: 30% auto;
  }
`;

export default LinkContainer;
