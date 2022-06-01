import styled from 'styled-components';

const Header = styled.p`
  font-size: 5rem;
  margin: 0;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
    margin: 1rem 1rem 0 1rem;
  }
`;

export default Header;
