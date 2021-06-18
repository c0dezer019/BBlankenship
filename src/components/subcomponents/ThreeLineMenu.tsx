// import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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
    transform: scaleX(3);
  }
`;

const NavContainer = styled.div`
  display: block;
  margin: 1em 0 0 1em;
  padding: 0;
  width: 30px;
  
  @media screen and (min-width: 1279px) {
    display: none;
  }
`;

const LeftBar = styled.div`
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
  // width: 20px;
`;

const RightBar = styled.div`
  background-color: white;
  border-radius: 25px;
  height: 4px;
  margin: 6px auto;
  width: 15px;
`;

const ThreeLineMenu = () => (
  <NavContainer id="nav-container">
    <LeftBar className="menu-bar" />
    <MiddleBar className="menu-bar" />
    <RightBar className="menu-bar" />
  </NavContainer>
);

export default ThreeLineMenu;
