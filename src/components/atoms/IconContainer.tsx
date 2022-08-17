import {
  Dispatch,
  FC,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import styled from 'styled-components';

type Position = { x: number; y: number };

interface SProps {
  readonly visible: boolean;
  updatePos: Dispatch<SetStateAction<Position>>;
}

const StyledIconContainer = styled.div.attrs(({ updatePos }: SProps) => ({
  onMouseMove: (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    updatePos({
      x: e.clientX - target.offsetLeft,
      y: e.clientY - target.offsetTop + 1,
    });
    console.log(target.clientHeight);
  },
}))<SProps>`
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

interface Props {
  children: ReactNode;
}

const IconContainer: FC<Props> = ({ children }): ReactElement => {
  const [pos, updatePos] = useState<Position>({ x: 0, y: 0 });

  return (
    <StyledIconContainer
      id="contacts"
      updatePos={updatePos}
      style={{ color: 'white' }}
    >
      {children}
      <p>
        x: {pos.x} y: {pos.y}
      </p>
    </StyledIconContainer>
  );
};

export default IconContainer;
