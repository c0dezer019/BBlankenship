import { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  animate?: boolean;
  changeAnimatedState?: Dispatch<SetStateAction<boolean>>;
  changeVisibility?: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  visible?: boolean;
}

const rotateContainer = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const scaleBar = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(2);
  }
`;

const TopBar = styled.div`
  background-color: white;
  border-radius: 25px;
  height: 4px;
  margin: 6px auto;
  width: 15px;
`;

const MiddleBar = styled.div`
  background-color: white;
  border-radius: 25px;
  height: 4px;
  margin: 6px 0;
`;

const BottomBar = styled.div`
  background-color: white;
  border-radius: 25px;
  height: 4px;
  margin: 6px auto;
  width: 15px;
`;

const Container = styled.div`
  height: 4.5em;
  width: 100%;
  padding: 21px;
  
  @media screen and (max-width: 1279px) {
    border: 1px solid white;
    height: fit-content;
    padding: .5em;
    width: ${ ({ isOpen }: Props) => (isOpen ? '60%' : 'fit-content') };
  }
`;

// TODO: Links become visible upon start of animation.
const LinkContainer = styled.div.attrs(({ changeVisibility, setOpen }: Props) => ({
  onClick: e => {
    if (e.target.className.match('nav-link')) {
      changeVisibility(false);
      setOpen(false);
    }
  },
}))`
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

// TODO: Scale link text to size with animation.
const NavLink = styled.a`
  font-size: 1.5rem;
  margin: auto 10px;
  text-decoration: none;

  &:hover {
    color: #9999d2;
    text-decoration: underline;
    }
  
  @media screen and (max-width: 1279px) {
    display: block;
  }
  @media screen and (max-width: 158px) {
    font-size: 1.0rem;
  }
`;

// TODO: Trigger animation on click.
const MobileMenuIcon = styled.div.attrs(({
  changeAnimatedState,
  changeVisibility,
  setOpen,
  isOpen,
  visible }: Props) => ({
  onClick: () => {
    if (!visible) changeVisibility(true);
    else changeVisibility(false);
    if (!isOpen) {
      changeAnimatedState(true);
      setOpen(true);
    } else {
      changeAnimatedState(false);
      setOpen(false);
    }
  },
}))`
  // TODO: Figure out how to conditionally animate.
  // animation: ;
  display: block;
  padding: 0;
  width: 30px;
  
  &:hover {
    
    
    .nav-top {
      animation: ${ scaleBar } .5s forwards;
    }
    .nav-bottom {
      animation: ${ scaleBar } .5s forwards;
    }
  }
  
  @media screen and (min-width: 1279px) {
    display: none;
  }
`;

const NavBar: FC = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [animate, changeAnimatedState] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  // @ts-ignore
  return (
    <Container id="nav-container" isOpen={isOpen}>
      <MobileMenuIcon
        id="mobile-nav-container"
        animate={animate}
        changeAnimatedState={changeAnimatedState}
        changeVisibility={setVisible}
        isOpen={isOpen}
        setOpen={setOpen}
        visible={visible}
      >
        <TopBar className="menu-bar nav-top" />
        <MiddleBar className="menu-bar nav-middle" />
        <BottomBar className="menu-bar nav-bottom" />
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
