import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const StyledMouse = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid white;
  top: 170px;
`;

const MouseContainer: FC<Props> = ({ children }: Props): ReactElement => (
  <StyledMouse>{children}</StyledMouse>
);

export default MouseContainer;
