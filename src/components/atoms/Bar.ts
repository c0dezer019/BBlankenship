import styled from 'styled-components';

const Bar = styled.div`
  background-color: white;
  border-radius: 25px;
  height: 4px;
  margin: 6px 0;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default Bar;
