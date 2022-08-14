import { FC, ReactElement, useState } from 'react';
import classNames from 'classnames';
import { MobileMenu } from '../molecules';
import { NavContainer, LinkContainer, NavLink } from '../atoms';

const NavBar: FC = (): ReactElement => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const linkContainerClass = classNames({
    'fade-in': isOpen,
    'fade-out': !isOpen,
  });

  return (
    <NavContainer id="nav-container" isOpen={isOpen}>
      <MobileMenu />
      <LinkContainer
        className={linkContainerClass}
        id="link-container"
        changeVisibility={setVisible}
        setOpen={setOpen}
        visible={visible}
      >
        <NavLink className="nav-link" href="#">
          Home
        </NavLink>
        <NavLink className="nav-link" href="#about">
          About
        </NavLink>
        <NavLink className="nav-link" href="#techStack">
          The Stack
        </NavLink>
        <NavLink className="nav-link" href="#projects">
          Projects
        </NavLink>
        <NavLink className="nav-link" href="#contact">
          Contact
        </NavLink>
      </LinkContainer>
    </NavContainer>
  );
};

export default NavBar;
