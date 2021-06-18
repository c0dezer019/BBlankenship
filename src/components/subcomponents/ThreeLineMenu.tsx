import { styled } from 'styled-components';

const NavContainer = styled.div`
  width: 30px;
  display: block;
  margin: 1em 0 0 1em;
`;

const Bar = styled.div`
  background-color: white;
  border-radius: 25px;
  height: 4px;
  margin: 5px 0;
`;

const ThreeLineMenu = () => (
  <NavContainer>
    <Bar />
    <Bar />
    <Bar />
  </NavContainer>
);

export default ThreeLineMenu;
