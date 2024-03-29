import { FC, ReactElement, useState } from 'react';

import classNames from 'classnames';
import styled from 'styled-components';

import MobileMenuIcon from './MobileMenuIcon';
import { SProps } from '../props/types';

// const grow = keyframes``;
// const shrink = keyframes``;

const MobileMenuContainer = styled.div.attrs(
  ({ isOpen, visible, setInitialState, setOpen, setVisible }: SProps) => ({
    onClick: () => {
      if (!isOpen) setOpen(true);
      else setOpen(false);
      if (!visible) setVisible(true);
      else setVisible(false);
      setInitialState(false);
    },
  })
)<SProps>`
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid yellow;
  min-width: 100%;
  min-height: 100%;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

// Intend to include the navbar here
const MobileMenu: FC = (): ReactElement => {
  const [initialState, setInitialState] = useState<boolean>(true);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const menuClass = classNames('mobile-menu', {
    grow: isOpen,
    shrink: !isOpen && !initialState,
  });

  return (
    <MobileMenuContainer
      className={menuClass}
      isOpen={isOpen}
      visible={visible}
      setInitialState={setInitialState}
      setOpen={setOpen}
      setVisible={setVisible}
    >
      <MobileMenuIcon />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
