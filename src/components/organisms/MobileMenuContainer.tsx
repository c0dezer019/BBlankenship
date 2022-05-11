import { FC, ReactElement, ReactNode, useState } from 'react';
import classNames from 'classnames';

import StyledMobileMenuIcon from '../atoms/StyledMobileMenuIcon';

interface ContainerProps {
  children?: ReactNode;
}

const MobileMenuContainer: FC<ContainerProps> = ({ children }): ReactElement => {
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
    <StyledMobileMenuIcon
      className={menuClass}
      id="mobile-nav-container"
      isOpen={isOpen}
      visible={visible}
      setOpen={setOpen}
      setInitialState={setInitialState}
      setVisible={setVisible}>
      <div className={oddBar} />
      <div className="bar" />
      <div className={oddBar} />
      {children}
    </StyledMobileMenuIcon>
  );
};

export default MobileMenuContainer;
