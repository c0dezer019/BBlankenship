import { FC, ReactElement } from 'react';

import MouseContainer from '../../atoms/scrollAnimation/MouseContainer';
import MouseWheel from '../../atoms/scrollAnimation/MouseWheel';

const Mouse: FC = (): ReactElement => (
  <MouseContainer>
    <MouseWheel />
  </MouseContainer>
);

export default Mouse;
