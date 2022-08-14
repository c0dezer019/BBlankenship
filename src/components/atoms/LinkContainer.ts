import { Dispatch, MouseEvent, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  readonly visible: boolean;
  changeVisibility: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LinkContainer = styled.div.attrs(
  ({ changeVisibility, setOpen }: Props) => ({
    onClick: (e: MouseEvent) => {
      if (e.currentTarget.className.match('nav-link')) {
        changeVisibility(false);
        setOpen(false);
      }
    },
  })
)<Props>`
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 800px) {
    width: 100%;
  }

  @media screen and (max-width: 1279px) {
    display: ${({ visible }: Props) => (visible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: fit-content;
    height: 50%;
    text-align: center;
    margin: 0;
  }
`;

export default LinkContainer;
