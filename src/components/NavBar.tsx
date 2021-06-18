import styled from 'styled-components';
import ThreeLineMenu from './subcomponents/ThreeLineMenu';

const Container = styled.div`
  height: 4.5em;
  width: 100%;
  padding: 21px;
  
  @media screen and (max-width: 1279px) {
    display: none;
    height: 100%;
    width: 40vw;
  }
  
  @media screen and (max-width: 600px) {
    width: 50vw;
  }
  
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
  
`;

const LinkContainer = styled.div`
  height: 100%;
  margin: auto 0 auto 6%;
  width: 30%;

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
  
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 100%;
  }
`;

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
`;

const NavBar = () => (
  <>
    <ThreeLineMenu />
    <Container>
      <LinkContainer id="link-container">
        <NavLink className="nav-link" href="#home">Home</NavLink>
        <NavLink className="nav-link" href="#about">About</NavLink>
        <NavLink className="nav-link" href="#techStack">The Stack</NavLink>
        <NavLink className="nav-link" href="#projects">Projects</NavLink>
        <NavLink className="nav-link" href="#contact">Contact</NavLink>
      </LinkContainer>
    </Container>
  </>
);

export default NavBar;
