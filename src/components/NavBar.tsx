import { FC, ReactElement, useState } from 'react';
import classNames from 'classnames';
import Container from './styled/Container';
import LinkContainer from './styled/LinkContainer';
import MobileMenuIcon from './styled/MobileMenuIcon';
import NavLink from './styled/NavLink';

const NavBar: FC = (): ReactElement => {
  const [initialState, setInitialState] = useState<boolean>(true);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const containerClasses = classNames({ 'grow-container': isOpen });
  const menuClass = classNames('menu-icon', {
    'rotate-forwards': isOpen,
    'rotate-backwards': !isOpen && !initialState });
  const oddBar = classNames('bar', { 'grow-bar': isOpen, 'shrink-bar': !isOpen && !initialState });

  return (
    <Container className={containerClasses} id="nav-container" isOpen={isOpen}>
      <MobileMenuIcon
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
      </MobileMenuIcon>
      <LinkContainer
        id="link-container"
        changeVisibility={setVisible}
        setOpen={setOpen}
        visible={visible}
      >
        <NavLink
          className="nav-link"
          href="#"
        >Home
        </NavLink>
        <NavLink
          className="nav-link"
          href="#about"
        >About
        </NavLink>
        <NavLink
          className="nav-link"
          href="#techStack"
        >The Stack
        </NavLink>
        <NavLink
          className="nav-link"
          href="#projects"
        >Projects
        </NavLink>
        <NavLink
          className="nav-link"
          href="#contact"
        >Contact
        </NavLink>
      </LinkContainer>
    </Container>
  );
};

export default NavBar;
