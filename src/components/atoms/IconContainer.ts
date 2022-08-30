import styled from 'styled-components';

const IconContainer = styled.div`
  position: fixed;
  right: 0;
  top: 50vh;
  display: none;
  flex-direction: column;
  height: fit-content;
  width: 4rem;
  border: 1px solid white;
  margin-right: 1rem;
  padding: 0.5rem;

  @media screen and (min-width: 800px) {
    display: flex;
  }
`;

export default IconContainer;
