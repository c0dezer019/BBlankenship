import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  changeVisibility?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  readonly visible?: boolean;
}

// TODO: Links become visible upon start of animation.
const LinkContainer = styled.div.attrs(({ changeVisibility, setOpen }: Props) => ({
  onClick: e => {
    if (e.target.className.match('nav-link')) {
      changeVisibility(false);
      setOpen(false);
    }
  },
}))<Props>`
  height: 100%;
  margin: auto 0 auto 6%;
  width: 30%;

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 1279px) {
    display: ${ ({ visible }: Props) => (visible ? 'block' : 'none') };
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

export default LinkContainer;
