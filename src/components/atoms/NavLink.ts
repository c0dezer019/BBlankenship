import styled from 'styled-components';

const NavLink = styled.a`
  font-size: 1.5rem;
  margin: auto 10px;
  text-decoration: none;

  &:hover {
    color: #9999d2;
    text-decoration: underline;
  }

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 1rem;
  }
`;

export default NavLink;
