import styled from 'styled-components';

const ContactIcon = styled.img`
  height: 3rem;
  width: 3rem;

  &.grow {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }
`;

export default ContactIcon;
