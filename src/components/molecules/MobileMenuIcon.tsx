import { FC, ReactElement, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';

import { SProps } from '../props/types';
import Bar from '../atoms/Bar';

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

const MobileMenuIconStyle = styled.div.attrs(
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
  position: absolute;
  display: block;
  margin: ${2 / 6}em;
  padding: .1em;
  width: 30px;

  .grow-bar {
    animation: ${growBar} 0.5s forwards;
  }

  .shrink-bar {
    animation: ${shrinkBar} 0.5s backwards;
  }

  .bar:nth-child(odd) {
    margin: 6px auto;
    width: 15px;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MobileMenuIcon: FC = (): ReactElement => {
  const [initialState, setInitialState] = useState<boolean>(true);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const menuClass = classNames('menu-icon', {
    'rotate-forwards': isOpen,
    'rotate-backwards': !isOpen && !initialState,
  });
  const oddBar = classNames('bar', {
    'grow-bar': isOpen,
    'shrink-bar': !isOpen && !initialState,
  });

  return (
    <MobileMenuIconStyle
      className={menuClass}
      id="mobile-nav-container"
      isOpen={isOpen}
      visible={visible}
      setOpen={setOpen}
      setInitialState={setInitialState}
      setVisible={setVisible}
    >
      <Bar className={oddBar} />
      <Bar />
      <Bar className={oddBar} />
    </MobileMenuIconStyle>
  );
};


export default MobileMenuIcon;
