import { Dispatch, FC, ReactElement, ReactNode, SetStateAction, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';

export interface Props {
  readonly isOpen?: boolean;
  readonly visible?: boolean;
  setInitialState?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
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

const MobileMenuIconStyle = styled.div.attrs(
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

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

interface EProps {
  children?: ReactNode;
}

const MobileMenuIcon: FC = ({ children }: EProps): ReactElement => {
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
      <div className={oddBar} />
      <div className="bar" />
      <div className={oddBar} />
      { children }
    </MobileMenuIconStyle>
  );
};


export default MobileMenuIcon;
