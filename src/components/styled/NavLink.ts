import styled from 'styled-components';

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

export default NavLink;
